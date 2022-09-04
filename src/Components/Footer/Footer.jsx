import React from "react";
import styles from "./Footer.module.css";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div className={styles.footerarea}>
      <div className={styles.container}>
        <div className={styles.emailarea}>
          <input type="email" placeholder="email" />
          <button type="submit">Subscribe to the newsletter</button>
        </div>
      </div>
      <div className={styles.footerdetails}>
        <div className={styles.section}>
          <ul>
            <li>PARTNERS</li>
            <li>Dealers</li>
          </ul>
        </div>
        <div className={styles.section}>
          <ul>
            <li>IMPORTANT</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={styles.section}>
          <ul>
            <li>OTHER</li>
            <li>Media & Downloads</li>
          </ul>
        </div>
        <div className={styles.sectionmedia}>
          <h3>
            <RiFacebookCircleLine />
          </h3>

          <h3>
            <AiOutlineInstagram />
          </h3>
          <h3><AiFillTwitterCircle/></h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
