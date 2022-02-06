import React, { useState } from 'react';

const MobileNav = () => {
    const [navbar, setNavbar] = useState(false);

    function openCloseNav() {
        setNavbar(() => !navbar)
    }

    return (
        <nav id="mobile-nav"  className={`mobile-navbar ${navbar ? "translate-x-0" : "w-0 translate-x-full"} md:hidden h-screen z-20 fixed right-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:bg-gradient-to-r dark:from-slate-600 dark:via-slate-500 dark:to-slate-700 text-lg font-bold origin-right transition-all duration-5000 ease-in-out`}>

      {/* <!-- open nav sign --> */}
      <svg onClick={openCloseNav} className={`open-sign ${navbar ? "w-0" : "w-auto"} mr-3 py-4 fixed right-0`}   width="100" height="60" viewBox="0 0 26 18" fill="none" xmlns="">
        <path className="open-sign" d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z" fill="black" data-darkreader-inline-fill=""></path>
      </svg>
            
      {/* <!-- close nav sign --> */}
      <svg onClick={openCloseNav} className={`close-sign ${navbar ? "w-auto" : "w-0"} mr-3 py-4 fixed right-0`} version="1.1" id="cross-11" xmlns="http://www.w3.org/2000/svg" width="100" height="60" viewBox="0 0 11 11">
      <path className="close-sign" d="M2.2,1.19l3.3,3.3L8.8,1.2C8.9314,1.0663,9.1127,0.9938,9.3,1C9.6761,1.0243,9.9757,1.3239,10,1.7&#xA;&#x9;c0.0018,0.1806-0.0705,0.3541-0.2,0.48L6.49,5.5L9.8,8.82C9.9295,8.9459,10.0018,9.1194,10,9.3C9.9757,9.6761,9.6761,9.9757,9.3,10&#xA;&#x9;c-0.1873,0.0062-0.3686-0.0663-0.5-0.2L5.5,6.51L2.21,9.8c-0.1314,0.1337-0.3127,0.2062-0.5,0.2C1.3265,9.98,1.02,9.6735,1,9.29&#xA;&#x9;C0.9982,9.1094,1.0705,8.9359,1.2,8.81L4.51,5.5L1.19,2.18C1.0641,2.0524,0.9955,1.8792,1,1.7C1.0243,1.3239,1.3239,1.0243,1.7,1&#xA;&#x9;C1.8858,0.9912,2.0669,1.06,2.2,1.19z"/>
      </svg>
            
      {/* <!-- mobile nav elements --> */}
      <div onClick={openCloseNav} className="m-nav-element-container flex flex-col gap-10 text-center mx-16 mt-10">
        <a className="m-nav-element hover:text-green-600" href="#home">Home</a>
        <a className="m-nav-element hover:text-green-600" href="#services">Services</a>
        <a className="m-nav-element hover:text-green-600" href="#projects">Projects</a>
        <a className="m-nav-element hover:text-green-600" href="#client">Client</a>
        <a className="m-nav-element hover:text-green-600" href="#hire-me">Hire me</a>
      </div>

  </nav>
    );
};

export default MobileNav;