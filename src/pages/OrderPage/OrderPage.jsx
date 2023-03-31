import React, { useEffect, useState } from 'react'
import Order from '../../components/Order/Order'

function OrderPage()
{
    const [orders, setOrders] = useState([])
    const [sort, setSort] = useState([])
    useEffect(() =>
    {
        setOrders(JSON.parse(window.localStorage.getItem('orders')) || [])
    }, [])
    return (
        <div>
            {
                orders.length > 0 ?
                    orders.map((o, i) => <Order key={i} order={o} />)
                    : <p>История заказов пустая</p>
            }
        </div>
    )
}

export default OrderPage