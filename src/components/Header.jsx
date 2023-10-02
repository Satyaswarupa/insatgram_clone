import React from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { LiaFacebookMessenger } from "react-icons/lia";
import "../styles/header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <h2>instagram</h2>
      <div className="one">
        <a href=""><AiOutlineHeart className="s1" /></a>
       <Link to={"/chat"}><LiaFacebookMessenger className="s1" /></Link>
      </div>
    </nav>
  );
};

export default Header;
