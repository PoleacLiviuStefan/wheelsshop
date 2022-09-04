import React from "react";
import Card from "../Card/card";
import styles from "./products.module.css";
import { useState } from "react";
export default function products({ number }) {
  let name = [
    ["Vassen", "American Force"],
    ["GROOVE", "QUAKE"],
    ["ARC", "MESA FORGED BEADLOCK"],
    ["RAPID", "PR176"],
    ["PIKE DUALLY", "PR159"],
    ["DRS", "PR179"],
    ["PHOENIX", "PR205"],
    ["DIRTY DOG", "PR178"],
  ];
  let image = [
    [
      [
        "https://www.wheelpros.com/media/catalog/product/8/0/809bd3836111767fad6c0b273c1a743e92f1e7f7cc3a4af5333a30ffebff34c7.jpeg?quality=80&fit=bounds&height=500&width=500",
        "https://www.wheelpros.com/media/catalog/product/9/9/99a234a39862633f28c57717e4098957093fc6111643b773c95fc9fea5926211.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/8/0/809bd3836111767fad6c0b273c1a743e92f1e7f7cc3a4af5333a30ffebff34c7.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/c/1/c12edb9b6312bec305368c723e15097941e3a9838fa3e001723f32629d4f99bd.jpeg?quality=80&fit=bounds&height=78&width=89",
      ],
      [
        "https://www.wheelpros.com/media/catalog/product/e/6/e6ccec99e133d895aaf902184582c2a364fa0c36a2150c37ad17e1601736a449.jpeg?quality=80&fit=bounds&height=500&width=500",
        "https://www.wheelpros.com/media/catalog/product/1/4/14df97070c9bc4b4cb1f0a33d2d59e39ba7ee93ff8368a5cc4646cf52ac440b9.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/1/5/150d20f0aa3a0b6829af674899220822ba70ab68034a9782f84742e22d7da2de.jpeg?quality=80&fit=bounds&height=78&width=89",
      ],
      [
        "https://www.wheelpros.com/media/catalog/product/2/e/2eccfcac8bde77fabf57f26e5fe10bc64db577db849c1278f1e57d8dbd842e8b.jpeg?quality=80&fit=bounds&height=500&width=500",
        "https://www.wheelpros.com/media/catalog/product/b/e/be4d1cd38ecd0cd7b7d17480f8880a57b0814a5d7389983845d0b24274f5ae43.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/7/d/7d895a45d4b3bf703230874e0c4791c80babdcaefbb70fdd72da93c9c123857e.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/3/9/399dc146e651f343b6aecc2a0b929eb1ca0610ea09550c9791f553f5df58f08c.jpeg?quality=80&fit=bounds&height=78&width=89",
      ],
      [
        "https://www.wheelpros.com/media/catalog/product/7/4/74eb2f0bf550b5ca7a75a7a7c0d470576d0c9e5c5e9ef1a11f5c03d13a921296.jpeg?quality=80&fit=bounds&height=500&width=500",
        "https://www.wheelpros.com/media/catalog/product/1/2/1297a16619b717b6c51d8dbbfebe20182f42111fb9f6a04560fb010adaf0cb66.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/3/9/393b465bffe28862da80c80dd23fbd394fb88f565813e7977211017efb51e45f.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/d/8/d8a4e6a4fed66abc27a76b76b1aca209a359d73d5b756e7a9603c8994efe0af8.jpeg?quality=80&fit=bounds&height=78&width=89",
      ],
      [
        "https://www.wheelpros.com/media/catalog/product/e/5/e5dd4ce9c35a86aff895d5fdea83e629487d2164286e236ef5cde3bda0739ea6.jpeg?quality=80&fit=bounds&height=500&width=500",
        "https://www.wheelpros.com/media/catalog/product/e/5/e5dd4ce9c35a86aff895d5fdea83e629487d2164286e236ef5cde3bda0739ea6.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/a/5/a58c91a061145e8804ad70d52184960b796b8e6f55e3bfc67a6eada3c0896ff1.jpeg?quality=80&fit=bounds&height=78&width=89",
      ],
      [
        "https://www.wheelpros.com/media/catalog/product/a/b/ab9a1fb17432339b747e7abe905ed0f7cc087ce996f26ae8e40322e71aed9cee.jpeg?quality=80&fit=bounds&height=500&width=500",
        "https://www.wheelpros.com/media/catalog/product/9/0/90d58da1b02e38ac68bde726a1602454056b6db160e36937d4a7e49b0ddca581.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/a/b/ab9a1fb17432339b747e7abe905ed0f7cc087ce996f26ae8e40322e71aed9cee.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/d/e/dee1cf635b25dbec37ba389786dca2f1adef001dc840f637fd510220aa47e112.jpeg?quality=80&fit=bounds&height=78&width=89",
      ],
      [
        "https://www.wheelpros.com/media/catalog/product/b/d/bd43dd22fdc59889dcdfbb526f2681cafb0b2e01526199d6310f3f171fbff48f.jpeg?quality=80&fit=bounds&height=500&width=500",
        "https://www.wheelpros.com/media/catalog/product/9/8/98270c884e0c5b9764683c0c6e590899149ef10e9cee5f01a90173f2ac941811.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/b/d/bd43dd22fdc59889dcdfbb526f2681cafb0b2e01526199d6310f3f171fbff48f.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/6/7/6727f737f6016581cc47c205406f200dbef76abe6c5bfac93943f30106662b62.jpeg?quality=80&fit=bounds&height=78&width=89",
      ],
      [
        "https://www.wheelpros.com/media/catalog/product/5/4/5436db99cd1a23e4741d94389ce524f6d61cf0a6f6fee1e82cc6fda5aad9f447.jpeg?quality=80&fit=bounds&height=500&width=500",
        "https://www.wheelpros.com/media/catalog/product/4/c/4cd433abdb651c8e09fead69350e9895c88d6aaf37700466aa9ea39bd139956d.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/b/2/b271de1bfa14a33f2828effb891b1f67de4389f06071360ac9cf015e1375652a.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/f/c/fca34f2b4678229eae51c338d3df70b440c16452574e63830c0543e07a20a0c9.jpeg?quality=80&fit=bounds&height=78&width=89",
      ],
    ],
    [
      [
        "https://www.wheelpros.com/media/wheelpros/homepage/Brands/American-Force-Wheel-min.png",
        "https://www.wheelpros.com/media/catalog/product/8/d/8d160c1efe2523a1b99235e091cf3ead5cb6a003528bcf32ceeffc9febfe05fd.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/4/6/46e38cfced31fb1aeaf50ac1c0335ceb642210acae547eb640bcd85b09763550.jpeg?quality=80&fit=bounds&height=78&width=89",
      ],
      [
        "https://www.wheelpros.com/media/catalog/product/b/7/b79bd9bfbb9aa845e13d4cadb4e91e04828f8ecb67e3f1da494880a391bda833.jpeg?quality=80&fit=bounds&height=480&width=480",
        "https://www.wheelpros.com/media/catalog/product/f/4/f4af710e00d678106860243b3367d74a8392c8043e71765a47e4a08a8cf41f94.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/9/0/9039a0f8d4b18e33b5e0baec965bdf2795d212f6e51f9f2ca53ca2e64cf9112a.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/f/e/fe9103810b6f613e04dfa0611ff2f54793e08ac35b6197c8b68a665fc38b6dd6.jpeg?quality=80&fit=bounds&height=78&width=89",
      ],
      [
        "https://www.wheelpros.com/media/catalog/product/1/6/16ad73f0fde32714dd0872cd3e27fee2b3408139e6c5637d098f8d2e3bbd66a7.jpeg?quality=80&fit=bounds&height=480&width=480",
        "https://www.wheelpros.com/media/catalog/product/0/7/07a1fdf9d2d71f9858e3b7a2a9091977921304c982d9273b9eb9671d272b8d69.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/1/6/16ad73f0fde32714dd0872cd3e27fee2b3408139e6c5637d098f8d2e3bbd66a7.jpeg?quality=80&fit=bounds&height=78&width=89",
      ],
      [
        "https://www.wheelpros.com/media/catalog/product/e/3/e3d8a761e0e687522f19ff392c6f7f137b3fa66472260d9e81b173febff331e0.jpeg?quality=80&fit=bounds&height=480&width=480",
        "https://www.wheelpros.com/media/catalog/product/8/4/84dc740cdb0bb18eadb9cabb186ee7c8d3381c84e516f46fe4ec05e226dabdb7.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/f/8/f83c66ddc31ab36d9d09d3a69b51b393d52b6d1ece5993a3dcc9c7be386766cd.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/1/4/1413a5e8cb1e9699d512ed00b01978890f9ee07afd7d4642d695c7b6d13fd448.jpeg?quality=80&fit=bounds&height=78&width=89",
      ],
      [
        "https://www.wheelpros.com/media/catalog/product/e/c/ec6d35365289b55651ee8faa22b8baa7afc8fe85b921a4de35c1d1f016b501e6.jpeg?quality=80&fit=bounds&height=480&width=480",
        "https://www.wheelpros.com/media/catalog/product/d/f/df9caa82e1c65aef91afa08e5efc9dcf83098a01a2e8afa733c6b040737cac34.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/e/c/ec6d35365289b55651ee8faa22b8baa7afc8fe85b921a4de35c1d1f016b501e6.jpeg?quality=80&fit=bounds&height=78&width=89",
      ],
      [
        "https://www.wheelpros.com/media/catalog/product/f/7/f7a5262c96212621603e9429a5b48ebc49be3ebde94e1b253367ba2a8f96904d.jpeg?quality=80&fit=bounds&height=480&width=480",
        "https://www.wheelpros.com/media/catalog/product/f/7/f7a5262c96212621603e9429a5b48ebc49be3ebde94e1b253367ba2a8f96904d.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/f/7/f7a5262c96212621603e9429a5b48ebc49be3ebde94e1b253367ba2a8f96904d.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/8/f/8f0747988176e6b74efb490344902fca5d3e499851204d2fabaeaf7699238ab9.jpeg?quality=80&fit=bounds&height=78&width=89",
      ],
      [
        "https://www.wheelpros.com/media/catalog/product/e/0/e028578e6bdbad0f6f1f634e84703d71af2003fd7ef487a1a0d1edf0f328aac0.jpeg?quality=80&fit=bounds&height=480&width=480",
        "https://www.wheelpros.com/media/catalog/product/e/0/e028578e6bdbad0f6f1f634e84703d71af2003fd7ef487a1a0d1edf0f328aac0.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/3/e/3e8b4dcddbbd66ab9b6c23efa7683c019e1e1f3d29bb17070ed5daa9cbed6d49.jpeg?quality=80&fit=bounds&height=78&width=89",
      ],
      [
        "https://www.wheelpros.com/media/catalog/product/2/d/2d4bf450ac016761a9fb04f7a5ec7732ca3cff0ccbc90ba358846d7627371b8f.jpeg?quality=80&fit=bounds&height=480&width=480",
        "https://www.wheelpros.com/media/catalog/product/0/7/0745b8df5bbd44f1068207d8e7584eed4139e4f0dc6b4e9d2e6a9bb7071c624a.jpeg?quality=80&fit=bounds&height=78&width=89",
        "https://www.wheelpros.com/media/catalog/product/2/d/2d4bf450ac016761a9fb04f7a5ec7732ca3cff0ccbc90ba358846d7627371b8f.jpeg?quality=80&fit=bounds&height=78&width=89",
      ],
    ],
  ];
  let price = [
    ["700", "560"],
    ["840", "940"],
    ["920", "630"],
    ["670", "570"],
    ["780", "860"],
    ["820", "520"],
    ["730", "1100"],
    ["650", "770"],
  ];
  const title = number ? "AMERICAN WHEELS" : "POPULAR WHEELS";
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.wheelsarea}>
        <div className={styles.card}>
          {" "}
          <Card
            name={name[0][number]}
            image={image[number][0]}
            price={price[0][number]}
          />
        </div>
        <div className={styles.card}>
          <Card
            name={name[1][number]}
            image={image[number][1]}
            price={price[1][number]}
          />{" "}
        </div>
        <div className={styles.card}>
          <Card
            name={name[2][number]}
            image={image[number][2]}
            price={price[2][number]}
          />{" "}
        </div>
        <div className={styles.card}>
          <Card
            name={name[3][number]}
            image={image[number][3]}
            price={price[3][number]}
          />{" "}
        </div>
        <div className={styles.card}>
          <Card
            name={name[4][number]}
            image={image[number][4]}
            price={price[4][number]}
          />{" "}
        </div>
        <div className={styles.card}>
          <Card
            name={name[5][number]}
            image={image[number][5]}
            price={price[5][number]}
          />{" "}
        </div>
        <div className={styles.card}>
          <Card
            name={name[6][number]}
            image={image[number][6]}
            price={price[6][number]}
          />{" "}
        </div>
        <div className={styles.card}>
          <Card
            name={name[7][number]}
            image={image[number][7]}
            price={price[7][number]}
          />{" "}
        </div>
      </div>
    </div>
  );
}
