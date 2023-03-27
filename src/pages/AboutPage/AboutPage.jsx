import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AboutFood from '../../components/AboutFood/AboutFood'
import styles from './aboutPage.module.css'
function AboutPage()
{
    const data = useSelector(s => s.getAbout)
    console.log(data);
  
  return (
        <div className={styles.page}>
            <h2 className={styles.title}>О продуктах</h2>
            <div className={styles.foods}>
                {data.map(arr => arr.map(el => <AboutFood key={el.id} product={el} />))}
            </div>
        </div>
    )
}

export default AboutPage