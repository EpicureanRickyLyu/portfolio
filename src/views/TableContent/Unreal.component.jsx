import React from "react";
import { Link } from "react-router-dom";

export default function Unreal() {
    const ClickAlert = () => {
        alert("Under Construction Coming Soon !")
      }
  return (
    <>
      <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div >
              <div className="flex flex-wrap">
                
                <div onClick={ClickAlert} className="w-full lg:w-6/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    UNREAL FPS
                  </h5>
                  
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <video autoPlay muted loop  className="align-middle border-none max-w-full h-auto rounded-lg">
                    <source src={require("assets/WebSource/Intro/Intro1/UnrealFpsIntro.mp4").default} type="video/mp4"></source>
                    </video>
                    </div>
                  
                </div>

                <div onClick={ClickAlert} className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    C++ MFC GAME
                  </h5>
                
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <video autoPlay muted loop  className="align-middle border-none max-w-full h-auto rounded-lg">
                    <source src={require("assets/WebSource/Intro/Intro1/C++Game.mp4").default} type="video/mp4"></source>
                    </video>
                    </div>
                  
                </div>
                  
                   
              </div>
            </div>
          </div>
        </div>

    </>
  );
}