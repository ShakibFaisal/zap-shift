import React, { use } from "react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import img from "../../assets/customer-top.png"

const Reviews = ({ reviewpromise }) => {
  const review = use(reviewpromise);
  ;
  return (
    <div>
        <div className="flex justify-center my-6">
            <img src={img} alt="" />
        </div>
        <h3 className="text-center text-4xl font-bold">What our customers are sayings</h3>
        <p className="text-center opacity-65">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br></br> pain, and strengthen your body with ease!</p>
      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: '50%',
          depth: 200,
          modifier: 1,
           scale: 0.75,
          slideShadows: true,
        }}
       
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
        modules={[EffectCoverflow ,Autoplay]}
        className="mySwiper"
      >
        {review.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
