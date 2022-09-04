import React from "react";
import styles from "./homePage.module.css";
import Products from "../Products/products";
import Navbar from "../Navbar/navbar";
import Hero from "../Hero/hero";
import Footer from "../Footer/Footer";

import { useState, useEffect } from "react";

export default function homePage() {
  return (
    <div>
      <Navbar />
      <Hero number={0} names={0} />
      <Products number={0} />
      <Hero number={1} names={1} />
      <Products number={1} />
      <Footer />
    </div>
  );
}
