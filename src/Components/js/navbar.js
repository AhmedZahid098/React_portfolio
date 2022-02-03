import React, {useState} from 'react';

const Navbar = () => {

  const [navTransparent, setNavTransparent] = useState(0)
  function changeColor() {
    return setNavTransparent((navColor) => {
      if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        return console.log("Scroll is more than 200px", navTransparent)
      } else {
        return console.log("Scroll is less than 200px", navTransparent)
    }
    })
  }

// const myNav = document.getElementById('navbar');
// window.onScroll = function () { 
//     // "use strict";
//    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
//         myNav.classList.add("bg-gray-200", "dark:bg-slate-700");
//         myNav.classList.remove("bg-transparent", "hover:bg-gray-200");
//     } 
//     else {
//         myNav.classList.add("bg-transparent", "hover:bg-gray-200");
//         myNav.classList.remove("bg-gray-200");
//     }
// // };

    return (
      <header onScroll={changeColor} id="navbar" className={`
        ${document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ? "bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:bg-gradient-to-r dark:from-slate-600 dark:via-slate-500 dark:to-slate-700": "bg-transparent hover:bg-gradient-to-r hover:from-gray-100 hover:via-gray-200 hover:to-gray-100 hover:dark:bg-gradient-to-r hover:dark:from-slate-600 hover:dark:via-slate-500 hover:dark:to-slate-700" }
        fixed
        flex flex-wrap
        md:flex-nowrap
        mx-auto
        justify-between
        items-center
        md:space-x-12
        py-4
        px-8
        md:px-14
        lg:px-24
        w-full
        font-bold
        hover:transition-all
        duration-200
        ease-in-out
      `}>
    {/* <!-- Logo would look great below --> */}
    <div className="logo text-lg font-bold cursor-pointer hover:text-red-900">
      <h1>Ahmed.Zahid</h1>
    </div>
    {/* <!-- nav elements below --> */}
    <nav className="hidden md:flex space-x-12 items-center">
      <a className="hover:text-green-600" href="#home">Home</a>
      <a className="hover:text-green-600" href="#services">Services</a>
      <a className="hover:text-green-600" href="#projects">Projects</a>
      <a className="hover:text-green-600" href="#client">Client</a>
      <a href="#hire-me">
        <button className="
              sm:text-sm
              font-bold
              px-4
              py-2
              bg-gray-300
              dark:bg-gray-900
              rounded-lg
              border-solid border-2 border-white
              hover:bg-white hover:text-green-500 hover:tranition-all
              duration-300
              ease-in-out
            ">
          Hire me
        </button>
      </a>
    </nav>
</header>
    );
};

export default Navbar;
