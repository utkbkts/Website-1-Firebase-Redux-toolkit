import React, { useEffect, useState } from 'react'
import Transition from './Transition'
import CV from "./CV.png"
import "../components/responsive/About.css"
const About = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolled2, setIsScrolled2] = useState(false);
  const [isScrolled3, setIsScrolled3] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 500);
        setIsScrolled2(window.scrollY > 700);
        setIsScrolled3(window.scrollY < 700);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <>
    <div className='About-form'>
       <h1>Beni Tanı</h1>
        <div className='düzcizgi'></div>
       <div className='about-scoupe'>
       <div className='about-left'>
        <h2>Yazılım Mükemmel Bir Serüven</h2>
        <div className='about-span'>
          <h2>Her gün Yeni Şeyler Öğrenmek <span>Ve Kendini Geliştirmek.</span></h2>
        </div>
        </div>
        <div className={`about-right ${isScrolled?"active":""}`}>
          <img src="https://images.pexels.com/photos/16550305/pexels-photo-16550305/free-photo-of-nokta-cizgisini-takip-et.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        </div>
       </div>
    </div>
    <div className='About-form'>
       <h1>CV</h1>
        <div className='düzcizgi'></div>
       <div className='about-scoupe'>
       <div className='about-left'>
        <h2 className={`${isScrolled2?"active":""}`}>Ve Eğlenceli Bir Serüven..</h2>
        <div className='about-span'>
          <h2>Daha Geniş Bir Bilgi İçin <br /><span>Ana sayfa'dan PDF halinde indirebilirsiniz.</span></h2>
        </div>
        </div>
        <div className={`about-rightt ${isScrolled3?"active":""}`}>
          <img src={CV} alt="" />
        </div>
       </div>
    </div>
    </>
  )
}

export default Transition(About)