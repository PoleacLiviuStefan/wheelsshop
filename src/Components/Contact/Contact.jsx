import React from "react";
import Navbar from "../Navbar/navbar";
import Herolinks from "../Hero/Herolinks";
import Form from "../Formcontact/Form";
import Footer from "../Footer/Footer";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <Herolinks
        message="Contact"
        image={
          "https://images.wallpaperscraft.com/image/single/bmw_car_bumper_191131_1920x1080.jpg"
        }
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
