import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AboutFood from '../../components/AboutFood/AboutFood'
import ScrollUpBtn from '../../components/ScrollUpBtn/ScrollUpBtn'
import Spinner from '../../components/Spinner/Spinner'
import styles from './aboutPage.module.css'

function AboutPage()
{
    const [scrollPos, setScrollPos] = useState(0)
    const data = useSelector(s => s.getAbout.data)
    const load = useSelector(s => s.getAbout.load)
    window.addEventListener('scroll', () =>
    {
        setScrollPos(window.pageYOffset)
    })
    return (
        <>
        {
            load ?
            <div className={styles.page}>
                <h2 className={styles.title}>О продуктах</h2>
                <div className={styles.foods}>
                    {data.map(arr => arr?.map(el => <AboutFood key={el.id} product={el} />))}
                </div>
                {
                    scrollPos >= 760 && <ScrollUpBtn/>    
                }   
            </div>
            : <Spinner/>
        }
        </>
    )
}

export default AboutPage