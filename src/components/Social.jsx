import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Social = () => {
  return (
    <div className="social-container">
      <div className="left-social">
        <h1>&copy;2023 Tüm Hakları Saklıdır.UTKU TOYGUN BEKTASOGLU</h1>
      </div>
      <div className="right-social">
        <h2>
          <a target="_blank" href="https://www.linkedin.com/in/utku-bektasoglu-80264a274/"><AiFillLinkedin /></a>
        </h2>
        <h2>
          <a target="_blank" href="https://github.com/utkbkts"><AiFillGithub /></a>
        </h2>
      </div>
    </div>
  );
};

export default Social;
