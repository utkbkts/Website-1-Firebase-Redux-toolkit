import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import Transition from './Transition';
import Section from './Section';
import Footer from './Footer';
import Alintilar from './Alintilar';
import "./responsive/Home.css"
const Home = () => {

    const [text] = useTypewriter({
        words: [
          "HTML",
          "CSS",
          "JavaScript",
          "MongoDB",
          "React",
          "Vite-React",
          "Sass and Scss",
          "Next.js",
            "FİREBASE",
        ],
        loop: {},
        typeSpeed: 120,
        deleteSpeed: 80,
      });
  return (
    <>
    <div className='Home-container'>
        <div className='left-home'>
            <h1>Merhaba <br />Ben Utku Toygun <br /><span>BEKTAŞOĞLU</span></h1>
            <span
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: "24px",
                marginLeft: "1rem",
                letterSpacing:"5px"
              }}
            >
              {text}
              <span style={{ color: "red" }}>
                <Cursor cursorStyle="|" />
              </span>
            </span>
            <a target="_blank" href="https://www.dosya.tc/server43/efpeso/UTKU_TOYGUN_BEKTASOGLU.pdf.html"><button className='btn'>CV</button></a>
        </div>
        <div className='right-home'>
        <Swiper
        effect={'cube'}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/800px-Sass_Logo_Color.svg.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" />
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
    <Section/>
    <Alintilar/>
    <Footer/>
    </>
  )
}

export default Transition(Home)