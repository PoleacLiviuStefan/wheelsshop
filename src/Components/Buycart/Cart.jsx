import React,{useEffect,useState} from 'react'
import styles from './Cart.module.css'
import Item from './Item'
const Cart = () => {
  const list=[];

 
  return (
    <div className={styles.container}>
    <Item />
    </div>
  )
}

export default Cart