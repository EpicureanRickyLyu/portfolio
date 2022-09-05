import React from "react";

// components

import Navbar from "components/Navbars/blackNavbar";

export default function RpgDemo() {
  return (
    <>
      <Navbar />
      <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
          <video autoPlay muted loop>
              <source src={require("assets/WebSource/RPG DEMO/Inventory Demo.mp4").default} type = "video/mp4"></source>
            </video>

            <div className="w-full px-4 flex-1 ">     
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
            <img src={require("assets/img/3dRpg.png").default} alt="..." className="shadow rounded max-w-full h-auto align-middle border-none" />
               
             </span>   
            </div>
            <div className="w-full px-4 flex-1">
              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <p className="text-lg font-light leading-relaxed mt-6 mb-4 text-emerald-800">
                <h1>Virtual Them Park</h1>
                Include: battle system, skill system, backpack system, task system, store system, monster system.<br/>
                <br/>
                UI_Manager:
                Use the MVC pattern to distinguish the data layer, control layer and visual effect layer to make the structure clearer. 
                The Inventory system has completed CRUD, and at the same time has deployed detailed functions such as item stacking (more than 99 to form a group) and equipment-related character attributes.
                <br/><br/>
                Data_Manager:
                Use UtilityJson and LitJson to parse the backpack and store data, and also try to directly read the txt file for line-by-line analysis to obtain skill and character data.
                When storing, you can directly store the Json format data for easy viewing, and you can also enhance the security of the data through binary storage.
              </p>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap">  
              <div className="w-full px-4 flex-1">
              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid ">
              <img src={require("assets/WebSource/RPG DEMO/CharacterChose.png").default} alt="..." className="shadow rounded max-w-full h-auto align-middle border-none" />
              
              </span>

          </div>

              <div className="w-full px-4 flex-1">
                <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100"> 
                <img src={require("assets/WebSource/RPG DEMO/Fight.png").default} alt="..." className="shadow rounded max-w-full h-auto align-middle border-none" />
                </span>
              </div>
          </div>
          
            <div className="flex flex-wrap">
            <div className="w-full px-4 flex-1">
              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <img src={require("assets/WebSource/RPG DEMO//Sticker.png").default} alt="..." className="shadow rounded max-w-full h-auto align-middle border-none" />
              </span>
            </div>
            <div className="w-full px-4 flex-1">
              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <img src={require("assets/WebSource/RPG DEMO/joysticker.png").default} alt="..." className="shadow rounded max-w-full h-auto align-middle border-none" />
              </span>
              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <p className="text-lg font-light leading-relaxed mt-6 mb-4 text-emerald-800">
              Next Step:
              Added the function of using Sticker to control characters on the mobile terminal. The next step will be to improve the overall process and then deploy it to the Mobile platform
              </p>
              </span>
            </div>
            </div>


        </div>
       {/* <Footer /> */}
    </>
  );
}
