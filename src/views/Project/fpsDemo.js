import React from "react";

// components

import Navbar from "components/Navbars/redNavbar";

export default function FpsDemo() {
  return (
    <>
      <Navbar />
      <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
          <video autoPlay muted loop>
              <source src={require("assets/WebSource/FpsDemo/fps demo.mp4").default} type = "video/mp4"></source>
            </video>

            <div className="w-full px-4 flex-1 ">     
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
           
            <img src={require("assets/WebSource/FpsDemo/fpsgame.png").default} alt="..." className="shadow rounded max-w-full h-auto align-middle border-none" />
             </span>   
            </div>
            <div className="w-full px-4 flex-1">
              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <p className="text-lg font-light leading-relaxed mt-6 mb-4 text-emerald-800">
              <h1>Including: character control, weapon system, enemy system, spawn system, etc.</h1>
              <br/>
              Weapon System:
              <br/>
              1. Through the MFC mode, the animation of the weapon, the shooting logic of the weapon, and the attributes of the weapon are handled separately.
              <br/>
              2. The most basic is a Gun class, AutoGun, and LazerGun and SingleGun all inherit from the Gun base class
              The Gun class inherits from a Weapon class. Weapon contains both Melee and Range weapons. Weapon is a base class that can contain various weapons with damage attributes for switching.
              </p>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap">  
              <div className="w-full px-4 flex-1">

              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <p className="text-lg font-light leading-relaxed mt-6 mb-4 text-emerald-800">
              Enemy system: 
              <br/>
              1. Large enemies have a state machine that distinguishes Patrol, Attack, Alert, and FindrPath states
              Guide the search for Players through Navmesh baking.
              <br/>
              2. The position where the bullet is shot is towards the back of the player and the speed of the bullet is controlled so that the player can avoid the barrage
              <br/>
              3. Small Enemy has a fixed WayPoint, after being killed, a new small Enemy will be created
              <br/>
              New features: 
              <br/>
              1. Through the Enemy base class, a script for finding the nearest enemy and the enemy with the lowest HP is added, and extra functions can be added, such as beheading the enemy with the lowest HP.
              <br/>
              2. Different collision detections are placed on different body parts of the enemy, and hitting different bodies will increase the damage. For example, attacking the eyes will cause double damage.         
              </p>
              </span>
              </div>

              <div className="w-full px-4 flex-1">
                <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100"> 
                <img src={require("assets/WebSource/FpsDemo/EnemyBody.png").default} alt="..." className="shadow rounded max-w-full h-auto align-middle border-none" />
                </span>
              </div>
              </div>
            
            <div className="flex flex-wrap">
            </div>


        </div>
       {/* <Footer /> */}
    </>
  );
}
