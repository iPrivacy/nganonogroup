import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import styles from "../Components/Carousal.module.css";

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper";
import Image from "next/image";

export default function Carousal() {
  return (
    <>
      <Swiper
        navigation={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        pagination={{ clickable: true }}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <div>
            <Image src="/image3.jpg" layout="fill" />
            <div className={styles.textWrapper}>
              <span className={styles.textTitle}>Lorem Ipsum Dolor</span>
              <p className={styles.text}>
                Tempor aliqua exercitation veniam laborum. Nulla consectetur
                officia nostrud labore. Lorem ut aute quis reprehenderit ea do
                nisi nostrud eiusmod dolor ex minim qui. Anim sint reprehenderit
                ex officia labore consequat esse enim fugiat ex consequat eu
                commodo exercitation.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <div>
            <Image src="/image2.jpg" layout="fill" />
            <div className={styles.textWrapper}>
              <span className={styles.textTitle}>Lorem Ipsum Dolor</span>
              <p className={styles.text}>
                Tempor aliqua exercitation veniam laborum. Nulla consectetur
                officia nostrud labore. Lorem ut aute quis reprehenderit ea do
                nisi nostrud eiusmod dolor ex minim qui. Anim sint reprehenderit
                ex officia labore consequat esse enim fugiat ex consequat eu
                commodo exercitation.
              </p>
            </div>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className={styles.swiperSlide}><div>
            <Image src="/image4.jpg" layout="fill" />
            <div className={styles.textWrapper}>
              <span className={styles.textTitle}>Lorem Ipsum Dolor</span>
              <p className={styles.text}>
                Tempor aliqua exercitation veniam laborum. Nulla consectetur
                officia nostrud labore. Lorem ut aute quis reprehenderit ea do
                nisi nostrud eiusmod dolor ex minim qui. Anim sint reprehenderit
                ex officia labore consequat esse enim fugiat ex consequat eu
                commodo exercitation.
              </p>
            </div>
          </div></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><div>
            <Image src="/image5.jpg" layout="fill" />
            <div className={styles.textWrapper}>
              <span className={styles.textTitle}>Lorem Ipsum Dolor</span>
              <p className={styles.text}>
                Tempor aliqua exercitation veniam laborum. Nulla consectetur
                officia nostrud labore. Lorem ut aute quis reprehenderit ea do
                nisi nostrud eiusmod dolor ex minim qui. Anim sint reprehenderit
                ex officia labore consequat esse enim fugiat ex consequat eu
                commodo exercitation.
              </p>
            </div>
          </div></SwiperSlide>
      </Swiper>
    </>
  );
}
