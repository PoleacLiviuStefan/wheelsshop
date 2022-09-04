import React from 'react'
import styles from './Herolinks.module.css'
const Herolinks = ({message,image}) => {
  return (
    <div className={styles.container} style={{backgroundImage:`url(${image})`}}>

    <div className={styles.imgdescription}><h3>{message}</h3></div>
</div>
  )
}

export default Herolinks