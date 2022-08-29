import React, { useEffect } from "react";
import Center from "./Center";
import Player from "./Player";
import Sidebar from "./Sidebar";
import NavBar from "./NavBar";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
// var UrlState = false;

//  const currentURL = window.location.href // returns the absolute URL of a page
//    if (currentURL !== "http://localhost:3000/"){
//        UrlState = true;
//         }

function Layout({ children }) {
  return (
    <div className="bg-black h-screen w-full overflow-hidden">
      <header>
        <NavBar />
      </header>
      <main className="flex">
        <Sidebar />
        {children}
      </main>

      <div className="fixed w-full bottom-0">
        <Player />
      </div>
    </div>
  );
}

export default Layout;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
