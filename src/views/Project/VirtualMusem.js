import React from "react";

// components

import YellowNavbar from "components/Navbars/blackNavbar";

export default function VirtualMuseum() {
  return (
    <>
      <YellowNavbar />
      <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
          <video autoPlay muted loop>
              <source src={require("assets/WebSource/Museum/p2.mp4").default} type = "video/mp4"></source>
            </video>

            <div className="w-full px-4 flex-1 ">     
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
            <video autoPlay muted loop>
              <source src={require("assets/WebSource/Museum/p1.mp4").default} type = "video/mp4"></source>
            </video>  
             </span>   
            </div>

            <div className="w-full px-4 flex-1">
              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <p className="text-lg font-light leading-relaxed mt-6 mb-4 text-emerald-800">
                <h1>Virtual Museum Exhibition</h1><br></br>
                <p>The project includes a movable first-person interactive museum exhibit, and a close-up interactive mode after clicking on a specific object.</p>
                <br/>
                <p>All materials, models, animations, lighting, scripts in the project are all done independently</p>
                <br/>
              </p>
              </span>
            </div>

            
            
          </div>

          <div className="flex flex-wrap">  
              <div className="w-full px-4 flex-1">
              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <p className="text-lg font-light leading-relaxed mt-6 mb-4 text-emerald-800">
              The virtual museum exhibition project mainly uses animation components, playable 
              components, combined with Itween to achieve various obj animations and UI animations
              </p>
              </span>
              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <p className="text-lg font-light leading-relaxed mt-6 mb-4 text-emerald-800">
              The next step will be to further improve the functional details of the exhibition, 
              and deploy it to Meta Quest to realize the function of VR tour.
              </p>
              </span>
              </div>

              <div className="w-full px-4 flex-1 ">     
              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <video autoPlay muted loop>
                <source src={require("assets/WebSource/Museum/p3.mp4").default} type = "video/mp4"></source>
              </video>  
              </span>   
              
              </div>
          </div>


        </div>
       {/* <Footer /> */}
    </>
  );
}
