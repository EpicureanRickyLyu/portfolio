/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";  
import Footer from "components/Footers/Footer";
import Tabs from "components/Navbars/ProjectSelectNav";

export default function Profolio() {
  const ClickAlert = () => {
    alert("Coming Soon ! Find it in Home Page Video first !")
  }

  return (
    <>
      <IndexNavbar transparent />
      
      <section>
          {/* <div className="items-center mx-auto">
              <video autoPlay muted loop>
              <source src={require("assets/video/initialVideo.mp4").default} type="video/mp4"></source>
              </video>
              </div> */}
            <div className="container items-center mx-auto">
                {/* <h2 className="mt-20 font-semibold text-4xl ">
                Under construction....<br/>
                not everthing is here but will be soon
                </h2>
                <p className="mt-4 text-lg leading-relaxed align-right">
                I respect tech, aiming to become a great tech expertise ! !<br/>
                Let's keep in touch first (๑•̀ㅂ•́)و✧ ! ! !
                </p> */}
                <p className="mt-20 text-lg leading-relaxed align-right">
                <Tabs/>
                </p>
              </div>      
      </section>

      <Footer />
    </>
  );
}
