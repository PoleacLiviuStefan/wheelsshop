import React, { useState } from "react";
import Navbar from "../Navbar/navbar";
import styles from "./product.module.css";
import { Link } from "react-router-dom";

import { BsZoomIn, BsFillPlayFill } from "react-icons/bs";
import { AiOutlineClose, AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
const ProductPage = ({ imgSlide3, wheelName, wheelLogo, wheelstype }) => {
  const [bigImageSrc, setBigImageSrc] = useState(
    "https://www.wheelpros.com/media/catalog/product/2/f/2fc6eef62e8386ce4f264e9a0e72c82d2f6ba5e92dec6181d95dedb68b39e6e4.jpeg?quality=80&fit=bounds&height=&width="
  );
  const imageslider = imgSlide3;
  const [selectedOption, setSelectedOption] = useState(0);
  const [optionName, setOptionName] = useState("MATTE BLACK");
  const [quantity, setQuantity] = useState(1);
  const [preview, setPreview] = useState(false);
  const [zoom, setZoom] = useState(false);
  const changeBigImage = (url, nr, name) => {
    setSelectedOption(nr);
    setBigImageSrc(url);
    setOptionName(name);
  };
  const filter = () => {
    console.log("mer");
    setPreview(true);
  };
  const disableFilter = () => {
    setPreview(false);
  };
  const addition = () => {
    setQuantity((prev) => (prev += 1));
    console.log(quantity);
  };

  const substraction = () => {
    if (quantity > 1) setQuantity((prev) => (prev -= 1));
  };
  const zoominout = () => {
    setZoom(!zoom);
    console.log(zoom);
  };
  const slideright = () => {
    if (selectedOption < 2) setSelectedOption((prev) => (prev += 1));
    else setSelectedOption(0);
  };
  const slideleft = () => {
    if (selectedOption > 0) setSelectedOption((prev) => (prev -= 1));
    else setSelectedOption(2);
  };
  return (
    <div
      className={styles.container}
      style={{ overflowY: preview ? "hidden" : " " }}
    >
      <div
        className={styles.blackbg}
        style={{ display: preview ? "block" : "none" }}
      >
        <div className={styles.exit} onClick={disableFilter} />
        <div className={styles.navigation}>
          <button onClick={zoominout}>
            <BsZoomIn />
          </button>
          <button>
            <BsFillPlayFill />
          </button>
          <button onClick={disableFilter}>
            <AiOutlineClose />
          </button>
        </div>
        <img
          onClick={zoominout}
          className={
            styles.previewImage +
            " " +
            (zoom ? styles.animationzoomenter : styles.animationzoomleave)
          }
          src={imageslider[selectedOption]}
          style={{
            display: preview ? "block" : "none",
          }}
        />
        <div className={styles.slideimgleft}>
          <button onClick={slideleft}>
            <AiOutlineLeft />
          </button>
        </div>
        <div className={styles.slideimgright}>
          <button onClick={slideright}>
            <AiOutlineRight />
          </button>
        </div>
      </div>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.leftside}>
          <h3>
            <Link to="/home">
              <span>Home</span>
            </Link>
            / {wheelName}
          </h3>
          <div onClick={filter} className={styles.productimage}>
            <img
              className={styles.bigImage}
              src={imageslider[selectedOption]}
            />
          </div>
        </div>
        <div className={styles.rightside}>
          <img className={styles.logo} src={wheelLogo} />
          <h1>{wheelName}</h1>
          <h3 className={styles.optionname}>FINISH : {optionName}</h3>
          <div
            className={
              styles.wheelsoptions +
              " " +
              (preview ? styles.inferior : styles.superior)
            }
          >
            <img
              onClick={() => changeBigImage(imageslider[0], 0, wheelstype[0])}
              className={
                styles.wheelsmallimage +
                " " +
                (imageslider[0] == undefined && styles.invisible)
              }
              style={{
                border: selectedOption == 0 ? "1px solid red" : "",
              }}
              src={imageslider[0]}
            />
            <img
              onClick={() => changeBigImage(imageslider[1], 1, wheelstype[1])}
              className={
                styles.wheelsmallimage +
                " " +
                (imageslider[1] == undefined && styles.invisible)
              }
              style={{
                border: selectedOption == 1 ? "1px solid red" : "",
              }}
              src={imageslider[1]}
            />
            <img
              onClick={() => changeBigImage(imageslider[2], 2, wheelstype[2])}
              style={{
                border: selectedOption == 2 ? "1px solid red" : "",
              }}
              className={
                styles.wheelsmallimage +
                " " +
                (imageslider[2] == undefined && styles.invisible)
              }
              src={imageslider[2]}
            />
          </div>
          <h3>DIAMETER:</h3>
          <h3 className={styles.diameter}>20''</h3>
          <span className={styles.line}></span>
          <h3>BOLT PATTERN:</h3>
          <select className={styles.optionlist}>
            <option value="Choose an option">Choose an option</option>
            <option value="5X120">5X120</option>
          </select>
          <h3>SIZE AND OFFSET</h3>
          <select className={styles.optionlist}>
            <option value="Choose an option">Choose an option</option>
            <option value="5X120">20X9 18MM</option>
          </select>
          <div className={styles.quantity}>
            <button onClick={addition}>+</button>
            <input type="number" value={quantity}></input>
            <button onClick={substraction}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
