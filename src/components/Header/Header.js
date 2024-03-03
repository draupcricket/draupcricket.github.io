import React from "react";
import "./Header.scss";
import "../main.scss"
import { motion } from "framer-motion";
import Banner from "../../images/banner.jpeg";
import Timer from '../Timer/Timer'


const Header = () => {
  return (
    <div id="home" className="d-md-flex container py-5">
      <div className="col-md-12">
       <div className ="row align-middle align-items-center">
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="col-md-6 text-start"
      >
       
        <h6 className="small sec_color">March 16th</h6>
        <h1 className ="primary_color fw-bold lh-base">
          COUNTDOWN <br/> TO DRAUP CRICKET TOURNAMENT
        </h1>
        <p className="drp_slogan sec_color">Uniting Teams, Igniting Passion!</p>
        <Timer/>
      </motion.div>
      <div className="col-md-6"><img src={Banner} alt="profile"  className="banner_img img-fluid"/></div>
      </div>
      
    </div>
    </div>
  );
};

export default Header;
