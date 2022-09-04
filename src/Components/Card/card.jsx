import React, { useState } from "react";
import styles from "./card.module.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProductPage from "../Products/ProductPage";
export default function Card({ name, image, price }) {
  const [appear, setAppear] = useState(false);
  const [productsnumber, setproductsnumber] = useState(0);
  const [number, setNumber] = useState(0);
  const navigation = useNavigate();
  let order = [
    ["name", name],
    ["image", image[0]],
    ["number", productsnumber],
  ];
  const optionsappear = () => {
    setAppear(true);
  };
  const optiondissapear = () => {
    setAppear(false);
  };
  const buyitem = () => {
    setproductsnumber(productsnumber + 1);
    window.localStorage.setItem(`${order[0][0]}${number}`, order[0][1]);
    window.localStorage.setItem(`${order[1][0]}${number}`, order[1][1]);
    window.localStorage.setItem(`${order[2][0]}${number}`, order[2][1]);

    console.log(number);
  };
  const namepath = name.split(" ").join("-")
  const goToPage = () => {
    navigation(`../${namepath}`, { replace: true });
  };
  return (
    <div
      onMouseEnter={optionsappear}
      onMouseLeave={optiondissapear}
      className={styles.container}
    >
      <div
        className={styles.optionscontainer + " " + [appear && styles.visible]}
      >
        <img src={image[1]}></img>
        <img src={image[2]}></img>
        <img src={image[3]}></img>
      </div>
      <div onClick={goToPage} className={styles.imagebackground}>
        <div className={styles.whitefilter}>
          <img src={image[0]}></img>
        </div>
      </div>
      <div className={styles.nameline}>
        <h3>{name}</h3>
      </div>
      <div classname={styles.buydetails}>
        <h2 className={styles.pricetag}>{price}$</h2>
        <button onClick={buyitem} className={styles.buybtn}>
          BUY
        </button>

        <input
          className={styles.numberproduct}
          type="number"
          value={productsnumber}
        ></input>
      </div>
    </div>
  );
}
