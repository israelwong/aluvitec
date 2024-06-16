import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carrusel() {
    return (
    <>
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            centeredSlides={false}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            // pagination={{
            //     clickable: true,
            // }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 1.5,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 0,
                },
            }}
            className="mySwiper h-full text-gray-100 w-full"
        >

            <SwiperSlide><img src='../images/producto/herraje-cristal.jpg' alt=''/></SwiperSlide>
            <SwiperSlide><img src='../images/producto/adicional-acrilico.jpg' alt=''/></SwiperSlide>
            <SwiperSlide><img src='../images/producto/adicional-domo.jpg' alt=''/></SwiperSlide>
            <SwiperSlide><img src='../images/producto/adicional-policarbonato.jpg' alt=''/></SwiperSlide>
            
        </Swiper>
    </>
);
}
