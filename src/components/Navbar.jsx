import React, { useEffect, useState } from "react";
import Toggle from "./toggle";
import Transition from "./Transition";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout, reset } from "../auth/Authslice";
import "../components/responsive/Navbar.css"
const Navbar = () => {
  const { isLoading, user } = useSelector((state) => state.auth);
  const [greeting, setGreeting] = useState("");
  const [hamburg,sethamburg]=useState(false)
  const {kullanici} = useSelector((state) => state.kullaniciState);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const onlogout = async () => {
    await dispatch(logout());
    await dispatch(reset());
    navigate("/login");
  };
  const closeNavbar = () => {
    sethamburg(false);
  };
  const toggleHamburger = () => {
    sethamburg(!hamburg);
  };
  
  const handlekullanici=()=>{
    navigate("/kullanici");
  }
    useEffect(() => {
      const updateGreeting = () => {
        const currentHour = new Date().getHours();
  
        if (currentHour >= 5 && currentHour < 12) {
          setGreeting('Günaydın');
        } else if (currentHour >= 13 && currentHour < 18) {
          setGreeting('İyi Günler');
        } else if(currentHour >= 19 && currentHour < 23){
          setGreeting("iyi akşamlar")
        } else if(currentHour >= 0 && currentHour < 4){
            setGreeting("iyi geceler")
        }else{
          setGreeting("Hoş Geldiniz")
        }
      };
  
      updateGreeting();
  
      const interval = setInterval(updateGreeting, 1000 * 60 * 60); // Her saat başında güncelle
  
      return () => clearInterval(interval); // Komponent temizlendiğinde aralığı temizlemek için
    }, []);
  
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <h1>UTKU</h1>
        </Link>
        <Toggle />
        <h4>{greeting}</h4>
      </div>
      <div className={`backgroundnavbar ${hamburg ? "" : "active"}`}></div>
      <ul className={`${hamburg ? "" : "active"}`}>
        <li>
          <Link  onClick={closeNavbar}  to="/portfoy">Portfolyo</Link>
        </li>
        <li>
          <Link onClick={closeNavbar} to="/contact">İletişim</Link>
        </li>
        <li>
          <Link  onClick={closeNavbar}  to="/about">Hakkımda</Link>
        </li>
        {user || kullanici ? (
          <>
            <li className="exit-gap">
              <span>Hoş Geldin, {user?.displayName || kullanici?.displayName}</span>
              <button  className="exit" onClick={onlogout}>Çıkış</button>
              <button  className="exit" onClick={handlekullanici}>Profil</button>
            </li>
          </>
        ) : (
          <>
            <li className="register">
              <Link  onClick={closeNavbar}  to="/register">Üye ol</Link>
            </li>
            <li className="login">
              <Link  onClick={closeNavbar}  to="/login">Giriş Yap</Link>
            </li>
          </>
        )}
      </ul>
      <div className={`hamburger ${hamburg ? "active":""}`} onClick={toggleHamburger}>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Transition(Navbar);
