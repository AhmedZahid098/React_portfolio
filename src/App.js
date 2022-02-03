import './App.css';
import Content from './Components/js/content';
import Footer from './Components/js/footer';
import Hire from './Components/js/hire_me';
import MobileNav from './Components/js/mobileNav';
import Navbar from './Components/js/navbar';
import Services from './Components/js/services';
import FetchData from './Components/js/fetchData';
import React from 'react';
import ReactDOM from 'react-dom';


function App() {
  return (
    <div className="App bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 dark:bg-gradient-to-r dark:from-slate-600 dark:via-slate-500 dark:to-slate-700 dark:text-gray-200 font-poppins pb-12 mx-auto flex flex-col z-10">
      <MobileNav />
      <Navbar />
      <Content />
      <Services />
      <FetchData />
      <Hire />
      <Footer />
    </div>
  );
}

export default App;