import React from 'react'
import styles from './order.module.css'
function Order({order}) {
    return (
        <div className={styles.order}>
            <p>время: {order.date.substr(12)}</p>
            <p>количество: {order.count} штук</p>
            <p>сумма: {order.totalSumma} сом</p>
        </div>
    )
}

export default Order