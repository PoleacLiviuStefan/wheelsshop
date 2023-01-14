import React,{useEffect,useState} from 'react'
import styles from './Cart.module.css'
import {EliminateItem} from '../../redux/cartSystem';
import { BiX } from "react-icons/bi";
import  {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux'

const Cart = ({phone}) => {
  const dispatch=useDispatch();
  const {carts}=useSelector(item=>item.user || {})

  return (
    <div className={phone ? styles.containerphone:styles.container}>
        <div className={styles.back} />
  {
     carts?.map((subItems,sindex)=>{
      return <>
      <div className={styles.item}>
        <div onClick={()=>dispatch(EliminateItem(carts))} className={styles.close}>
        <BiX />
        </div>
      <img className={styles.wheelphoto} src={subItems.image[0]} />
      <h2 className={styles.name}>{subItems.name}</h2>
      <br></br>
      <div className={styles.details}>
      <input className={styles.price} value={subItems.price+  " $"}></input>
      <input className={styles.quantity} value={"x"+subItems.quantity}></input>
      </div>
    </div>
    </>
    
    })
  }

    </div>
  )
}

export default Cart