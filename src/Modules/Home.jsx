import React from "react";

import {
  Announcement,
  Categories,
  Navbar,
  Products,
  Slider,
  Newsletter,
  Footer,
} from "../Components";

// rafce
const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
