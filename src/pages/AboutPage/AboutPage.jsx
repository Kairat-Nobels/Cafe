import React, { useEffect, useState } from 'react'
import AboutFood from '../../components/AboutFood/AboutFood'
import styles from './aboutPage.module.css'
function AboutPage()
{
    const [data, setData] = useState([])
    useEffect(() =>
    {
        fetch(`https://63d78ffe5c4274b136f6a651.mockapi.io/items`)
        .then((res) =>
        {
            return res.json();
            }).then((json) =>
            {
                console.log(json[1]);
                setData(json)
            })
    }, [])
  
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