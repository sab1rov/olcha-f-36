
import {Swiper,  SwiperSlide } from "swiper/react";

export default function Right() {
    return (
        <>
        <Swiper
        navigation={true}
        loop={true} // Sliderni aylantirib kelish uchun
        
        className="mySlider"
        >

          <SwiperSlide>
            <img src="../public/images/divan.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../public/images/duxi.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../public/images/kuxni.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../public/images/car.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../public/images/tel.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../public/images/huawei.png" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../public/images/polo.png" alt="" />
          </SwiperSlide>
        </Swiper>
      </>
    )
}