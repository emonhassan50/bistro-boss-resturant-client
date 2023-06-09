// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="my-container">
        <SectionTitle
        subHeading={'---From 11:00am to 10:00pm---'}
        heading={'ORDER ONLINE'}
        />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-12 mb-[90px]"
      >
        <SwiperSlide>
          <img className="lg:w-[312px]" src={img1} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white primary-font">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="lg:w-[312px]" src={img2} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-16  text-white primary-font">Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="lg:w-[312px]" src={img3} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-16  text-white primary-font">Soup</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="lg:w-[312px]" src={img4} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-16  text-white primary-font">Dessert</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="lg:w-[312px]" src={img5} alt="" />
          <h3 className="text-3xl uppercase text-center -mt-16  text-white primary-font">Salads</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
