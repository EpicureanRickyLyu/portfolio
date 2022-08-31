import React from "react";
// components
import Navbar from "components/Navbars/AuthNavbar.js";
import './auth.css'

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
            >
            <div className="aspect-ratio">
              <iframe
          src="//player.bilibili.com/player.html?aid=52428099&bvid=BV1R4411a7Tp&cid=91755580&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
            </div>
          </div>
        
        </section>
      </main>
    </>
  );
}
