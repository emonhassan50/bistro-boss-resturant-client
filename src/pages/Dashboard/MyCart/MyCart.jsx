import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useCart();
  //console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = item => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | MyCart</title>
      </Helmet>
      <div className="uppercase font-semibold flex justify-evenly items-center h-20">
        <h3 className="text-3xl text-center">Total Items: {cart.length}</h3>
        <h3 className="text-3xl text-center">Total Price: ${total}</h3>
        <Link to="/dashboard/payment">
        <button className="btn btn-warning">Pay</button>
        </Link>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>ITEM IMAGE</th>
              <th>GUEST NUMBER</th>
              <th>CATEGORY</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar h-[75px] w-[75px]">
                    <img
                      className="rounded-md"
                      src={item.image}
                      alt="item image"
                    />
                  </div>
                </td>
                <td>4 guest</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-sm bg-red-600 rounded-md text-white text-xl border-none"
                  >
                    <RiDeleteBinLine />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
