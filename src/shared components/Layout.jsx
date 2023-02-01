import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
const Layout = () => {
  return (
    <main className="min-h-screen bg-darkBlue">
      <Navbar />
      <div className="w-full lg:w-fit lg:mx-auto lg:max-w-[85%]  md:ml-auto md:mr-[5%]">
        <SearchBar />
        <Outlet></Outlet>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
