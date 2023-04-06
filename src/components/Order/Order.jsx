import React from 'react'
import styles from './order.module.css'
function Order({ order })
{
    return (
        <div className={styles.order}>
            <p className={styles.time}>время: <span>{order.date.substr(12)}</span></p>
            <p>количество: <span>{order.count} </span>штук</p>
            <p>сумма: <span>{order.totalSumma}</span> сом</p>
        </div>
    )
}

export default Order