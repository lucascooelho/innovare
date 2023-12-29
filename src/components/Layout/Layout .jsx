import React from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Services from "../Services/Services";
import About from "../About/About";
import Staff from "../Staff/Staff";
import CTA from "../CTA/CTA";
import Blog from "../Blog/Blog";
import Footer from "../Footer/Footer";
import BackToTop from "../BackTop/BackToTop";

const Layout = () => {  
  return (
    <>
      <Header />
      <Home />
      <Services />
      <About />
      <Staff />
      <CTA />
      <Blog />
      <Footer />
      <BackToTop />      
    </>
  );
};

export default Layout;
