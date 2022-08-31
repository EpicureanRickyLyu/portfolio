/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />

      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
              Under construction.......
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Not everything is showing here, but will be soon ! ! ! <br/>
                Let`s just keep in touch first ! ! !
              </p>
      
            </div>
          </div>
        </div>

       
      </section>

      <section className="block relative z-1 *-emerald-100">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  Competition work
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
                     Playground Project
                  </h5>
                  <Link to="/">
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
                    bootstap cyberpunk style web 
                  </h5>
                  <Link to="/">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/bootstrap.png").default}
                      />
                      
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  master degree final project
                  </h5>
                  <Link to="/">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/master final project.png").default}
                      />
                      
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  Virtual Museum Exhibition
                  </h5>
                  <Link to="/">
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
                    3d Parkour Game 
                  </h5>
                  <Link to="/">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/parkourgame.png").default}
                      />
                      
                    </div>
                  </Link>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    react-web-app
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
                    3D RPG GAME
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
                    3D FPS GAME
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
                   
                  


              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
         
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                
                <blockquote className="relative p-8 mb-4">
                  
                  <video autoPlay muted loop>
                  <source src={require("assets/video/2048MobileGame.mp4").default} type="video/mp4"></source>
                  </video>
          
                </blockquote>
              </div>
            </div>
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                
                <blockquote className="relative p-8 mb-4">
                  
                    <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/Appprototype.png").default}
                      />  
          
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Unity3D
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Mobile Puzzle Game  
                      </p>
                    </div>             
                  </div>
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
