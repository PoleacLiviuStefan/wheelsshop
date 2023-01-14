import React from "react";
import Navbar from "../Navbar/navbar";
import Herolinks from "../Hero/Herolinks";
import styles from "./About.module.css";
import Footer from "../Footer/Footer";
const About = () => {
  return (
    <div>
     
      <Herolinks
        message="About"
        image={"https://wallpapercave.com/wp/wp2884825.jpg"}
      />
      <div className={styles.details}>
        <p>
          <h2>Everything started with an idea. And became a movement!</h2>
          You know, those ideas that can change your entire existence and
          influence a generation of enthusiastic people? Well, the Z-Performance
          idea was one of those. As a fanatic for cars and tuning, Sly Zed was
          always seeking for the best that the market could offer. After years
          of disappointment concerning quality, price and choice, he finally
          decided to create a better choice of his own, one that combines
          superior quality and competitive prices. The result was a new brand -
          Z-Performance Wheels, born in 2002, with the support and cooperation
          of an experienced team, with a track record of over 25 years of
          working experience in the car industry. Ever since, Z-Performance has
          set standards in the aftermarket wheel industry by bringing new,
          evolutionary designs, stretching the concavity and raising quality
          standards, and connecting to the very heart of the European car nerds
          scene. Our home is Wörthersee, our showground is Essen Motor Show, our
          summer is Monaco and Garda lake, our race is the Megarun, our
          connection to you is personal and everpresent with omnipresent ties
          through Instagram, Facebook and Youtube. Today, Z-Performance offers a
          wide range of wheels for every car. Our cast wheels cover well the
          German producers, such as BMW, Mercedes, Audi, Volkswagen, Seat,
          Skoda, Opel and many other cars. Through our FORGED wheels division we
          offer custom made wheels for any car model, custom made dimensions,
          offsets and finishes, we give your car an uncomparable look. Last but
          not least, the real deal of tomorrow is the FLOWFORGE TILT CAST
          technology, which has been pioneering this year and is changing the
          industry. We offer LIGHT monoblock wheels in best quality at an
          uncomparable price. To summarize, Z-Performance is perfectly tailored
          for our customers. Our long history and experience will assure their
          satisfaction, because we know that only together we can create value
          and make a difference.
        </p>
        <div className={styles.imagediv}  style={{backgroundImage:`url(https://cncwheels.com.au/wp-content/uploads/2021/03/gt-form-venom-wheels-bmw-3-series.jpg)`}} />
      </div>
      <Footer />
    </div>
  );
};

export default About;
