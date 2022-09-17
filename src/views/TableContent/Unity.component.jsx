import React from "react";
import { Link } from "react-router-dom";

export default function UnityContent() {
    const ClickAlert = () => {
        alert("Under Construction Coming Soon !")
      }
  return (
    <>
    <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div >
              <div className="flex flex-wrap">

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                     Virtual Theme Park 
                  </h5>
                  <Link to="/project1">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <video autoPlay muted loop  className="align-middle border-none max-w-full h-auto rounded-lg">
                      <source src={require("assets/WebSource/Intro/Intro1/ThemeParkIntro.mp4").default} type="video/mp4"></source>
                      </video>
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  Virtual Museum Exhibition
                  </h5>
                  <Link to="/VirtualMuseum">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <video autoPlay muted loop  className="align-middle border-none max-w-full h-auto rounded-lg">
                      <source src={require("assets/WebSource/Intro/Intro1/MuseumIntro.mp4").default} type="video/mp4"></source>
                      </video>
                    </div>
                  </Link>
                </div>

                <div onClick={ClickAlert} className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    RTS Demo
                  </h5>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                   
                      <video autoPlay muted loop  className="align-middle border-none max-w-full h-auto rounded-lg">
                      <source src={require("assets/WebSource/Intro/Intro1/RTSIntro.mp4").default} type="video/mp4"></source>
                      </video>
                                
                    </div>   
                                    
                  </div>  
                  
                  <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    RPG Demo
                  </h5>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <Link to='/RpgDemo'>
                      <video autoPlay muted loop  className="align-middle border-none max-w-full h-auto rounded-lg">
                      <source src={require("assets/WebSource/Intro/Intro1/RPGIntro.mp4").default} type="video/mp4"></source>
                      </video>
                      </Link>             
                    </div>   
                                    
                  </div>  
                  <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    FPS demo
                  </h5>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <Link to='/FpsDemo'>
                      <video autoPlay muted loop  className="align-middle border-none max-w-full h-auto rounded-lg">
                      <source src={require("assets/WebSource/Intro/Intro1/UnityFpsIntro.mp4").default} type="video/mp4"></source>
                      </video>
                      </Link>             
                    </div>                   
                  </div>

                  <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  I-CHING PUZZLE GAME
                  </h5>
                  <Link to="/">
                    <div onClick={ClickAlert} className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                       <video autoPlay muted loop  className="align-middle border-none max-w-full h-auto rounded-lg">
                      <source src={require("assets/WebSource/Intro/Intro1/FinalProjectIntro.mp4").default} type="video/mp4"></source>
                      </video>          
                    </div>
                  </Link>
                </div>

                  <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    3d Parkour Game 
                  </h5>
                  <Link to="/">
                    <div onClick={ClickAlert} className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <video autoPlay muted loop  className="align-middle border-none max-w-full h-auto rounded-lg">
                      <source src={require("assets/WebSource/Intro/Intro1/PoukourIntro.mp4").default} type="video/mp4"></source>
                      </video>  
                    </div>
                  </Link>
                </div>

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
                  Mobile Game and App 
                  </h5>             
                  <Link to="/Application">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <video autoPlay muted loop  className="align-middle border-none max-w-full h-auto rounded-lg">
                      <source src={require("assets/video/2048MobileGame.mp4").default} type="video/mp4"></source>
                      </video> 
                    </div>
                  </Link>
                </div>
                   
              </div>
            </div>
          </div>
        </div>
    </>
  );
}