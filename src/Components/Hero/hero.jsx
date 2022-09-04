import React from 'react'
import styles from './hero.module.css'
import { useState,useRef,useEffect } from 'react';
export default function Hero({number,names}) {
  const [name,setname]=useState(0);  
  const[slideimage,changeslideimage]=useState(0);
   
    const topslides=[["https://images.wallpaperscraft.com/image/single/bmw_car_bumper_191131_1920x1080.jpg",
    "https://images.wallpaperscraft.com/image/single/mitsubishi_lancer_evo_x_tune_96277_1920x1080.jpg",
    "https://images.wallpaperscraft.com/image/single/ferrari_f12_berlinetta_supercar_novitec_rosso_n_largo_97660_1920x1080.jpg"],
    ["https://images.wallpaperscraft.com/image/single/porsche_auto_car_cars_red_79763_1920x1080.jpg",
    "https://images.wallpaperscraft.com/image/single/nissan_gt_r_black_side_view_104588_1920x1080.jpg",
    "https://images.wallpaperscraft.com/image/single/subaru_impreza_black_wheels_101419_1920x1080.jpg"]]
    const slidename=[["BMW M5 WHEELS","MITUBISHI WHEELS","FERRARI 488 WHEELS"],["PORSCHE 911 WHEELS","NISSAN GTR WHEELS","SUBARU IMPREZA WHEELS"]];
    let imag=topslides[number][slideimage];
    useEffect(()=>{setTimeout(()=>{
       if(slideimage==0)
      { changeslideimage(1);
        setname(1);
       
      }
       if(slideimage==1)
      { changeslideimage(2);
        setname(2);
      
      }
       if(slideimage==2)
       {changeslideimage(0);
        setname(0);
       
      }
      
    },3000);});
   
  return (
    <div className={styles.container} style={{backgroundImage:`url(${imag})`}}>
      
 
        <div className={styles.imgdescription}><h3>{slidename[names][name]}</h3></div>
    </div>
  )
}
