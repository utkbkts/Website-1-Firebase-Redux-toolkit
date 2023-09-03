import React, { useEffect, useState } from 'react'
import logo from "./LOGO.png"
import Transition from './Transition';
import "./responsive/Home.css"
const Section = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollX, setScrollX] = useState(0);
    useEffect(() => {
      const handleScroll = () => {
        setScrollX(window.scrollX);
        setIsScrolled(window.scrollY < 1700); // Scroll pozisyonuna göre isScrolled değerini güncelle
        //scroll 400px olunca true olmazsa false true olursa active classını ekler 400 den küçük olursa true
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <div className='Section-about' id='section'>
        <h2>Ben Kimim ?</h2>
        <div className='cizgi'></div>
        <div className={`section-title ${isScrolled ? "active" : ""}`}>
            <div className='image-background'>
            <img src={logo} alt="" />
            </div>
            <p><span>F</span>ront-end geliştirme konusunda tutkulu ve deneyimli bir profesyonelim. Kullanıcı dostu ve etkileyici web arayüzleri oluşturma konusundaki becerilerimle, kullanıcı deneyimini öncelikli tutarak çeşitli projelerde çalıştım. HTML, CSS ve JavaScript konularında derinlemesine bilgiye sahibim ve modern frontend teknolojilerini yakından takip ediyorum. Problem çözme yeteneğim sayesinde ekip içinde işbirliği yaparak yaratıcı çözümler üretme konusunda başarılıyım.</p>
        </div>
    </div>
  )
}

export default Transition(Section);