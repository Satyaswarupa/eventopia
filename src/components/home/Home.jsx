import Intro from './Intro'
import CardStyle from './CardStyle'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import Do from "./DoingPage"
import {MdOutlineSwipeLeft} from "react-icons/md"



import { EffectCards } from 'swiper/modules';
import Brands from './Brands';

const Home = () => {
  return (
   <>
   <div class="landing-page">
    <div class="content">
      <div class="container">
        <div class="info">
        <MdOutlineSwipeLeft className='sbg' />
          <h1>EVENTOPIA</h1>
          <p>At Frozen PyroCraft, we proudly introduce you to a new dimension of pyrotechnics that embraces the beauty of icy enchantment and the thrill of explosive innovation. Our groundbreaking cold pyrotechnics revolutionize the world of entertainment, transforming ordinary moments into extraordinary experiences.</p>
          <button>View Product</button>
          <button>Contact Now</button>
        </div>
        
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/Cvnjb8T/Photo-Room-20230818-160557.png" alt="image" />
          </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/jJbM3pg/Photo-Room-20230818-191127.png" alt="image" />
          </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/SBPKvg0/Photo-Room-20230818-220428.png" alt="image" />
          </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/YcWwptj/Photo-Room-20230818-220143.png" alt="image" />
          </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/SBPKvg0/Photo-Room-20230818-220428.png" alt="image" />
          </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/jJbM3pg/Photo-Room-20230818-191127.png" alt="image" />
          </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/YcWwptj/Photo-Room-20230818-220143.png" alt="image" />
          </SwiperSlide>
      </Swiper>
      </div>
      
    </div>
  </div>
  <Intro />
  <CardStyle />
  <Do />
  <Brands />
   </>
  )
}

export default Home