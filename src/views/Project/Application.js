import React from "react";

// components

import BlueNavbar from "components/Navbars/blueBar";

export default function Application() {
  return (
    <>
      <BlueNavbar />
      <div className="container px-4 mx-auto bg-lightBlue-200" >
          <div className="flex flex-wrap">
          <section className="mt-48 md:mt-40 pb-40 relative bg-lightBlue-200">
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
            </div>
            <div className="container px-4 mx-auto">
  <div className="flex flex-wrap">
    <div className="w-full px-4 flex-1">
      <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100
      text-2xl font-normal leading-normal mt-0 mb-2 text-lightBlue-800">
        IOS Game Application 
      </span>
    </div>
    <div className="w-full px-4 flex-1">
      <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100
      text-2xl font-normal leading-normal mt-0 mb-2 text-lightBlue-800">
      Android Mobile Application - blog app
      </span>
    </div>
    <div className="w-full"></div>
    <div className="w-full px-4 flex-1">
      <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100
       text-base font-light leading-relaxed mt-0 mb-4 text-lightBlue-800">
      - Constructed the C# script logic of the 2048 mobile game: move and merge even Integers in a 2-dimension Matrix 
      <br/><br/>
      - Utilized Itween for 2D icon animation, and tested build work both on pc and iOS mobile

      </span>
    </div>
    <div className="w-full px-4 flex-1">
      <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100
      text-base font-light leading-relaxed mt-0 mb-4 text-lightBlue-800">
      - based on Android Studio 
      <br/><br/>
      - Mastered Android software development, the usage of various layouts and controls
      <br/><br/>
      - Created registration and login system, user personal information system, blog system
      <br/><br/>  
      - Utilized LitePal and SQLite for the mobile database to manage user data and blog data
      </span>
    </div>
  </div>
</div>
          </div>
        </section>
      </div>
    </div>


          
       {/* <Footer /> */}
    </>
  );
}
