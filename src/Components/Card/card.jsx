import React, { useState } from "react";
import styles from "./card.module.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import ProductPage from "../Products/ProductPage";
import  {useDispatch} from 'react-redux';
import {AddCart} from '../../redux/cartSystem';
import { useEffect } from "react";
import { useSelector } from 'react-redux'
const products=[

];


export default function Card({ name, image, price }) {

  const [appear, setAppear] = useState(false);
  const [productsnumber, setproductsnumber] = useState(0);
  const [number, setNumber] = useState(0);
  const [nr,setNr]=useState(0)
  const {carts}=useSelector(item=>item.user || {})
  const navigation = useNavigate();
  const  dispatch=useDispatch();
  const item={name,image,price}
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
        <button onClick={()=>{dispatch(AddCart(item));setNr(prev=>prev+=1)}} className={styles.buybtn}>
          BUY
        </button>

        <input
          className={styles.numberproduct}
          type="number"
          value={nr}
        ></input>
      </div>
    </div>
  );
}
