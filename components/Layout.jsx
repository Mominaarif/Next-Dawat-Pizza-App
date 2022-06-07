import React from "react";
import Head from 'next/head'
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
    <Head>
        <title>PIZZA HOUSE</title>
        <meta name="description" content="Best pizza in lahore" />
        <link rel="icon" href="p3.ico" />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
