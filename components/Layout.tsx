'use client'
import React, { PropsWithChildren, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import moment from "moment";
// import DotRing from "./DotRing";
const Layout = ({ children }: PropsWithChildren) => {

  const fetchData = async () => {
    try {
      const response = await fetch('https://raw.githubusercontent.com/ibnunaufal/personal-website-content/main/all-list.json');
      const data = await response.json();
      localStorage.setItem('all-lists', JSON.stringify(data));
      console.log(data)
    } catch (error) {
      console.error('Error fetching JSON data:', error);
    }
  };
  useEffect(() =>{    
    let date = localStorage.getItem('date');
    let currentDate = moment().format('YYYY-MM-DD HH')
    if(date != currentDate){
      fetchData()
      localStorage.setItem('date', currentDate);
    }    
  },[])
  return (
    <div className=" antialiased max-w-2xl mb-5 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
      {/* <DotRing /> */}
      <div className=" flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0 ">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;
