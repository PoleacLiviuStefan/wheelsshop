import React from "react";
import styles from "./Form.module.css";
const Form = () => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h2>Support Center</h2>
        <a>
          <h3>Email:support@bestwheels.com</h3>
        </a>
        <h3> Monday-Friday: 8:00-17:00</h3>
        <h3> Sunday:10:00-15:00</h3>
        <p>
          S.C. Dizing S.R.L.
          <br />
          RO-617106 Brusturi
          <br />
          judetul Neamt
          <br />
          Romania
        </p>
      </div>

      <form>
        <label>Contact us</label>
        <input type="text" placeholder="name" required />
        <input type="email" placeholder="email" required />
        <input type="phone" placeholder="phone" required />
        <input type="text" placeholder="adress" required />
        <input type="text" placeholder="city" required />
        <input type="text" placeholder="country" required />
        <input type="text" placeholder="subject" required />
        <textarea placeholder="message" required />
        <button className={styles.formbtn} type="submit">
          SUBMIT FORM
        </button>
      </form>
    </div>
  );
};

export default Form;
