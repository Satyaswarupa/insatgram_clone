import React from 'react';
import Header from "./components/Header"
import HeaderTow from './components/HeaderTow';
import Footer from "./components/Footer"



const DefaultLayout = ({ children }) => (
  <>
    <Header />
    <HeaderTow />
    {children}
    <Footer />
  </>
);

export default DefaultLayout;
