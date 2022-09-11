/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Navbar from "components/Navbars/AuthNavbar";
import Footer from "components/Footers/Footer.js";

export default function Profolio() {
  const ClickAlert = () => {
    alert("Coming Soon ! Find it in Home Page Video first !")
  }

  return (
    <>
      <IndexNavbar transparent />

      <section className="header pt-24  items-center flex h-screen max-h-860-px bg-full bg-blueGray-800">
 
              <div className="mx-auto rounded-lg">
                  <video autoPlay muted loop>
                  <source src={require("assets/video/initialVideo.mp4").default} type="video/mp4"></source>
                  </video>
              </div>

      </section>

      <section className="mt-48 md:mt-40  pb-40 relative">
      <div className="container items-center mx-auto z-3">
                <h2 className="font-semibold text-4xl ">
                Under construction....<br/>
                not everthing is here but will be soon
                </h2>
                <p className="mt-4 text-lg leading-relaxed ">
                I respect tech, aiming to become a great tech expertise ! !<br/>
                Let's keep in touch first (๑•̀ㅂ•́)و✧ ! ! !
                </p>
              </div>
       </section>

      <section className="block relative z-1 *-emerald-100 bg-blueGray-200">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  3D Exploration Game
                  </h5>             
                  <Link to="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/seacore.png").default}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                     Virtual Theme Park 
                  </h5>
                  <Link to="/project1">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/playground.png").default}
                      />
                    </div>
                  </Link>
                </div>
                
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Cyberpunk Style Web 
                  </h5>
                  <a href="https://s2144544.edinburgh.domains/">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/bootstrap.png").default}
                      />
                    </div>
                  </a>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  Virtual Museum Exhibition
                  </h5>
                  <Link to="/VirtualMuseum">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/museum.png").default}
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    React-Web-App
                  </h5>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <a href="https://epicureanrickylyu.github.io/MyProfolio/">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/react-web-app.png").default}
                      />  
                      </a>              
                    </div>                   
                  </div>  
                  
                  <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    RPG Demo
                  </h5>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <Link to='/RpgDemo'>
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/3dRpg.png").default}
                      />  
                      </Link>             
                    </div>   
                                    
                  </div>  
                  <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    FPS demo
                  </h5>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <Link to='/FpsDemo'>
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/unreal FPs.png").default}
                      />  
                      </Link>             
                    </div>                   
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  master degree final project
                  </h5>
                  <Link to="/">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                      onClick={ClickAlert}
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/master final project.png").default}
                      />
                      
                    </div>
                  </Link>
                </div>

                  <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    3d Parkour Game 
                  </h5>
                  <Link to="/">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                      onClick={ClickAlert}
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/parkourgame.png").default}
                      />     
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Mobile Application
                  </h5>
                  <Link to="/Application">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/WebSource/SDLC_BWC.png").default}
                      />     
                    </div>
                  </Link>
                </div>
                   
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}
