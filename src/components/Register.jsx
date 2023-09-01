import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../auth/Authslice";
import { toast } from "react-toastify";
import Transition from "./Transition";
const Register = () => {
  const [displayName, setdisplayName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, message, isSuccess, isError } = useSelector(
    (state) => state.auth
  );
  const validateDisplayName = (value) => {
    const hasSpecialCharacters = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(value);
    return hasSpecialCharacters;
  };
  const validatePassword = (value) => {
    return value.length < 6 && value.length > 1;
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    const userdata = {
      email,
      displayName,
      password,
    };
   
    if (validateDisplayName(displayName)) {
    }else if(validatePassword(password)){
      toast.error("parola en az 6 karakterden oluşmalı")
    } 
    else {
      dispatch(register(userdata));
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error("Bir Hata Oluştu.");
    }

    if (isSuccess || user) {
      navigate("/");
    }
    if (isLoading === false) {
      dispatch(reset());
    }
  }, [user, isLoading, isError, isSuccess, message, navigate, dispatch]);
  return (
    <div className="login-box">
      <div className="login-box-content">
        <h2>Üyelik Sayfası</h2>
        <form onSubmit={handlesubmit}>
          <div className="user-box">
            <input
              value={displayName}
              className={`registerinput ${
                validateDisplayName(displayName) ? "error" : ""
              }`}
              onChange={(e) => setdisplayName(e.target.value)}
              type="text"
              name=""
              required
              
            />
            <label>İsminiz</label>
          </div>
          <div className="user-box">
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="text"
              name=""
              required
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              name=""
              required
              className={`registerinput ${
                validatePassword(password) ? "error" : ""
              }`}
            />
            <label>Parola</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <button className="buttons" type="submit">
              Üye ol
            </button>
          </a>
        </form>
      </div>
    </div>
  );
};

export default Transition(Register);
