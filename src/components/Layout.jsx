import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className='container mx-auto h-1/2'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
