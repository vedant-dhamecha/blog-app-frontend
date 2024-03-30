import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children, isDarkMode}) => {
  return (
    <div>
      <Header isDarkMode={isDarkMode}/>
      {children}
      <Footer isDarkMode={isDarkMode}/>
    </div>
  );
};

export default MainLayout;
