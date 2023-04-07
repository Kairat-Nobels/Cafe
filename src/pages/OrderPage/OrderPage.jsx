import React, { useEffect, useState } from 'react'
import SortOrderDay from '../../components/SortOrderDay/SortOrderDay'
import styles from './orderPage.module.css'
import empty from '../../assets/images/empty.png'
import { useNavigate } from 'react-router-dom'
import ScrollUpBtn from '../../components/ScrollUpBtn/ScrollUpBtn'

function OrderPage()
{
    const [orders, setOrders] = useState([])
    const [scrollPos, setScrollPos] = useState(0)
    window.addEventListener('scroll', () =>
    {
        setScrollPos(window.pageYOffset)
    })
    let count = 0
    let sum = 0;
    orders.map(element => {
        count += element.count
        sum += element.totalSumma
    });
    useEffect(() =>
    {
        setOrders(JSON.parse(window.localStorage.getItem('orders')) || [])
    }, [])
    const sortedDatesByDay = [];
    orders.forEach(o => {
        const day = o.date.substring(0, 10);
        const index = sortedDatesByDay.findIndex(item => item.day === day);
                
        if (index === -1) {
            sortedDatesByDay.splice(sortedDatesByDay.length, 0, { day, data: [o] });
        } else {
            sortedDatesByDay[index].data.splice(sortedDatesByDay[index].data.length, 0, o);
        }
    })
    const navigate = useNavigate()

    return (
        <div className={styles.orderPage}>
            <h1>История заказов</h1>
            {
                orders.length > 0 ?
                    sortedDatesByDay.map((obj, i) => <SortOrderDay key={i} data={obj} />)
                    :
                    <div className={styles.empty}>
                        <p className={styles.orderEmpty}>История заказов пустая</p>
                        <div><img src={empty} alt="empty" /></div>
                    </div>
            }
            <div className={styles.total}>
                <p>Итого продано: <span>{count}</span> штук</p>
                <p>Итого сумма: <span>{sum}</span> сом</p>
            </div>
            <div className={styles.btns}>
                <button onClick={()=> window.localStorage.setItem('orders', [])}>Очистить историю</button>
                <button onClick={() => navigate(-1)}>Назад</button>
            </div>
            {
                (scrollPos >= 100 && scrollPos <= (document.documentElement.clientHeight/2.5)) && <ScrollUpBtn /> 
            }   
        </div>
    )
}

export default OrderPage