import React from 'react'
import icon from '../../assets/images/scrollTo.svg'
import styles from './scrollUpBtn.module.css'

const BtnScrollUp =() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    });       
}
function ScrollUpBtn() {
  return (
    <div onClick={BtnScrollUp} className={styles.btn}><img src={icon} alt="" /></div>
  )
}

export default ScrollUpBtn