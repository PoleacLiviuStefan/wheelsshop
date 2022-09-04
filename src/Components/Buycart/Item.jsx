import React, { useEffect, useState } from "react";
import styles from "./Cart.module.css";
import { BiX } from "react-icons/bi";
const Item = () => {
  const [item, setitem] = useState("");
  const [imageurl, setimageurl] = useState("");
  const [number, setNumber] = useState();
  const removeelement = () => {
    window.localStorage.setItem("name", "");
    window.localStorage.setItem("image", "");
    window.localStorage.setItem("number", "0");
    setitem("");
    setimageurl("");
  };
  useEffect(() => {
    if (window.localStorage.getItem("name0") != "") {
      setitem(window.localStorage.getItem("name0"));
      setimageurl(window.localStorage.getItem("image0"));
      setNumber(parseInt(window.localStorage.getItem("number0")) + 1);
      console.log(window.localStorage.getItem("name0"));
    }
  });
  return (
    <div className={item ? styles.item : styles.hidden}>
      <img src={imageurl} />
      <h2>{item}</h2>
      <br></br>
      <input value={number}></input>
      <button onClick={removeelement}>
        <BiX />
      </button>
    </div>
  );
};

export default Item;
