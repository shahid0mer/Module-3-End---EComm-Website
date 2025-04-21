import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Features from "./Features";
import ModelHighlights from "./ModelHighlights";

const Home = () => {
  return (
    <div className="text-black">
      <Header />
      <Features />
      <ModelHighlights />
      <Footer />
    </div>
  );
};

export default Home;
