import React from "react";
import styles from "./navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCoffee,
  faYoutube,
  faCartPlus,
} from "@fortawesome/fontawesome-free-solid";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Buycart/Cart";
import { useSelector } from 'react-redux'

export default function Navbar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showlist, setshowlist] = useState(false);
  const [mobileVisible, setMobileVisible] = useState(false);
  const {carts}=useSelector(item=>item.user || {})
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  const appearlist = () => {
    setshowlist(!showlist);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const mobileMenu = () => {
    setMobileVisible((prev) => !prev);
  };
  return (
    <div
      className={
        scrollPosition < 1150
          ? styles.navbarcontainer
          : styles.navbarcontaineronpage
      }
    >
      <div className={styles.desktopnav}>
        <div className={styles.elements}>
          <div className={styles.element}>
            <Link to="/home">
              <a>HOME</a>
            </Link>
          </div>
          <div className={styles.element}>
            <Link to="/about">
              <a>ABOUT</a>
            </Link>
          </div>
          <div className={styles.element}>
            <Link to="/contact">
              <a>CONTACT</a>
            </Link>
          </div>
          <div onClick={appearlist} className={styles.element}>
            {" "}
            <div>
            <div className={localStorage.getItem("productsNumber")==0 ? styles.notshow:styles.itemsnumber } >{carts.length===null ? 0 : carts.length }</div>
            <FontAwesomeIcon className="font-awesome" icon={faCartPlus} />{" "}
            </div>  
          </div>
          <div className={showlist ? { opacity: 1 } : styles.hidden}>
            <Cart phone={false} />
          </div>
        </div>
      </div>
      <div className={styles.navmobile}>
        <div
          className={
            styles.hamburgerMenu + " " + (mobileVisible && styles.animhamburger)
          }
          onClick={mobileMenu}
        >
          <span />
          <span />
          <span />
        </div>
        <div
          className={styles.mobileLinks}
          style={{ display: !mobileVisible ? "none" : "flex" }}
        >
          <div className={styles.mobileButtons}>
            <div className={styles.linkElement}>
              <Link to="/home">
                <a>HOME</a>
              </Link>
            </div>
            <div className={styles.linkElement}>
              <Link to="/about">
                <a>ABOUT</a>
              </Link>
            </div>
            <div className={styles.linkElement}>
              <Link to="/contact">
                <a>CONTACT</a>
              </Link>
            </div>
            <div onClick={appearlist} className={styles.cartphone}>
            {" "}
            <div>
            <div className={localStorage.getItem("productsNumber")==0 ? styles.notshow:styles.itemsnumbermobile } >{carts.length===null ? 0 : carts.length }</div>
            <FontAwesomeIcon className="font-awesome" icon={faCartPlus} />{" "}
            </div>  
          </div>
          <div className={showlist ? styles.cartlistphone : styles.hidden}>
            <Cart phone={true}/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
