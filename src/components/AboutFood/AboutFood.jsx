import React from 'react'
import styles from './aboutFood.module.css'
function AboutFood({ product })
{
    return (
        <div className={styles.foodCard}>
            <div className={styles.foodImg}><img src={product.img} alt="image" /></div>
            <div className={styles.foodTitle}>
                <h3>{product.title}</h3>
                <p>Вес {product.weight} г.</p>
            </div>
            <p>{product.description}</p>
            <p className={styles.ingredients}>Состав: {product.inner}</p>
            <p className={styles.price}>Цена: {product.price} сом</p>
        </div>
    )
}

export default AboutFood;