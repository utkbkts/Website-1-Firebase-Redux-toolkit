import React, { useEffect, useState } from "react";
import "./responsive/Home.css"
const Alintilar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handlescroll = () => {
        setIsScrolled(window.scrollY < 2500);
      };
  
      window.addEventListener("scroll", handlescroll);
  
      return () => {
        window.removeEventListener("scroll", handlescroll);
      };
    }, []);


  return (
    <div className="alinti-container">
      <h2>Galeri</h2>
      <div className="cizgi"></div>
      <div className="grid-container">
        <div className={`bir ${isScrolled ? "active":""}`}>
          <img
            src="https://images.pexels.com/photos/18054267/pexels-photo-18054267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="iki">
          <img
            src="https://images.pexels.com/photos/17160714/pexels-photo-17160714/free-photo-of-sokak-cubuk-kaldirim-ingiltere.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/17685526/pexels-photo-17685526/free-photo-of-deniz-kent-safak-peyzaj.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/17734945/pexels-photo-17734945/free-photo-of-bir-film-gecesi.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/16142799/pexels-photo-16142799/free-photo-of-sokak-kaldirim-pencereler-gecit.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Alintilar;
