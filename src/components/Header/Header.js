import React from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import Banner from "../../images/banner.jpeg";
 

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
       
        <h6 className="small">March 16th</h6>
        <h1 className>
          Draup Cricket League
        </h1>
        <p className="drp_slogan">Uniting Teams, Igniting Passion!</p>
       
      </motion.div>
      <div className="col-md-6"><img src={Banner} alt="profile"  className="banner_img img-fluid"/></div>
      </div>
    </div>
    </div>
  );
};

export default Header;
