import React from "react";

// components

import Navbar from "components/Navbars/MyNavbar";

export default function ThemPark() {
  return (
    <>
      <Navbar />
      <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
          <video autoPlay muted loop>
              <source src={require("assets/WebSource/Playground/p1.mp4").default} type = "video/mp4"></source>
            </video>

            <div className="w-full px-4 flex-1 ">     
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
            <video autoPlay muted loop>
              <source src={require("assets/WebSource/Playground/P2.mp4").default} type = "video/mp4"></source>
            </video>  
             </span>   
            </div>
            <div className="w-full px-4 flex-1">
              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <p className="text-lg font-light leading-relaxed mt-6 mb-4 text-emerald-800">
                <h1>Virtual Them Park</h1><br></br>
                <p>A virtual playground project with multiple mini-games (pirate ship, hot air balloon, town shooting game, car driving, boating game, etc.)</p>
                <br/>
                <p>The program is divided into multiple modules, which generally follow the MVC pattern. Design patterns use the singleton pattern more, with some observer patterns.</p>
                <br/>
                  Constructed Stylized shaders for trees, grass, water and buildings
              </p>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap">  
              <div className="w-full px-4 flex-1">
              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid ">
              <img src={require("assets/img/PlaygroundGame.png").default} alt="..." className="shadow rounded max-w-full h-auto align-middle border-none" />
              
              </span>
              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <p className="text-lg font-light leading-relaxed mt-6 mb-4 text-emerald-800">
              Utilize Photon engine to achieve LAN online mode. Players can set the room name to let other players connect to the same server through the same room name to play. Data synchronization is performed through the APIs related to the hashtable and photon engine.
              </p>
              </span>
              </div>

              <div className="w-full px-4 flex-1">
                <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100"> 
                <img src={require("assets/WebSource/Playground/minigame2.png").default} alt="..." className="shadow rounded max-w-full h-auto align-middle border-none" />
                </span>
              </div>
          </div>
            <div className="w-full px-4 flex-1">
              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <img src={require("assets/WebSource/Playground/miniGame.png").default} alt="..." className="shadow rounded max-w-full h-auto align-middle border-none" />
              </span>
            </div>
            
            <div className="flex flex-wrap">
            </div>


        </div>
       {/* <Footer /> */}
    </>
  );
}
