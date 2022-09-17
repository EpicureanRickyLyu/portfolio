import React from "react";
import { Link } from "react-router-dom";

export default function WebApplication() {
    const ClickAlert = () => {
        alert("Coming Soon ! Find it in Home Page Video first !")
      }
  return (
    <>
      <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div >
              <div className="flex flex-wrap">
                
                <div className="w-full lg:w-6/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Cyberpunk Style Web - Bootstrap
                  </h5>
                  <a href="https://s2144544.edinburgh.domains/">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <video autoPlay muted loop  className="align-middle border-none max-w-full h-auto rounded-lg">
                    <source src={require("assets/WebSource/Intro/Intro1/SyberWebIntro.mp4").default} type="video/mp4"></source>
                    </video>
                    </div>
                  </a>
                </div>

                <div className="w-full lg:w-6/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Clothing-Shop-Web - React
                  </h5>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <a href="https://epicureanrickylyu.github.io/MyProfolio/">
                      <video autoPlay muted loop  className="align-middle border-none max-w-full h-auto rounded-lg">
                      <source src={require("assets/WebSource/Intro/Intro1/ReactIntro.mp4").default} type="video/mp4"></source>
                      </video>
                      </a>              
                    </div>                   
                  </div>  
                   
                  
                  
                  
                   
              </div>
            </div>
          </div>
        </div>

    </>
  );
}