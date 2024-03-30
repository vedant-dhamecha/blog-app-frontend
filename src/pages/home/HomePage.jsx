import React from "react";
import MainLayout from "../../components/MainLayout";
import Hero from "./container/Hero";
import Articles from "./container/Articles";
import CTA from "./container/CTA";

const HomePage = ({isDarkMode}) => {
  return (
    <MainLayout isDarkMode={isDarkMode}>
      <Hero isDarkMode={isDarkMode}/>
      <Articles isDarkMode={isDarkMode}/>
      <CTA isDarkMode={isDarkMode}/>
    </MainLayout>
  );
};

export default HomePage;
