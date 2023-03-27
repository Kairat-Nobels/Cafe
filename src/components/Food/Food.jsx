import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementCart, removeCart } from '../../redux/actions/action';
import styles from './Food.module.css';
import trash from '../../assets/images/trash.svg'
function Food({ product})
{
    let c = 0
    const data1 = useSelector((s)=>
    {
        const transformedCartItems = [];
        for (const key in s.basket.items) {
        c = c + s.basket.items[key].quantity
        transformedCartItems.push({
            product_id: key,
            title: s.basket.items[key].productTitle,
            price: s.basket.items[key].productPrice,
            img: s.basket.items[key].productImg,
            count: s.basket.items[key].quantity,
            sum: s.basket.items[key].sum,
        });
        }
        // totalSumma = s.basket.totalAmount
            return transformedCartItems;
    })
    let co = 0
    if (data1.length > 0) { 
        const arr = data1.filter(t => t.title === product.title)
        arr.length > 0 ? co = (arr[0].count) : ''
    }
    const dispatch = useDispatch();
    const handleAdd = () =>
    {
        dispatch(addToCart(product))
    }
    const handleMinus = () =>
    {
        dispatch(decrementCart(product.id))
    }
     const handleRemove = () =>
    {
        dispatch(removeCart(product.id))
    }
    return (
        <div className={styles.foodCard}>
            <div className={styles.foodImage}><img src={product.img} alt="image" /></div>
            <h3>{product.title}</h3>
            <div className={styles.foodPrice}>
                <p>Цена: <span>{product.price}</span> сом</p>
                {
                    co > 0 ?
                        <div className={styles.Actions}>
                            <button onClick={() => handleMinus()}><svg width="15" height="15" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.04019 0.0399933H8.84019C9.37035 0.0399933 9.80019 0.469833 9.80019 0.999993C9.80019 1.53015 9.37035 1.95999 8.84019 1.95999H4.04019H1.1602C0.630035 1.95999 0.200195 1.53015 0.200195 0.999993C0.200195 0.469833 0.630035 0.0399933 1.1602 0.0399933H4.04019Z" fill="#FE5F1E"/>
                            </svg></button>
                            <span>{co}</span>
                            <button onClick={() => handleAdd()}><svg width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.84019 4.04001H5.96019V1.16001C5.96019 0.629852 5.53035 0.200012 5.00019 0.200012C4.47003 0.200012 4.04019 0.629852 4.04019 1.16001V4.04001H1.1602C0.630035 4.04001 0.200195 4.46985 0.200195 5.00001C0.200195 5.53017 0.630035 5.96001 1.1602 5.96001H4.04019V8.84001C4.04019 9.37017 4.47003 9.80001 5.00019 9.80001C5.53035 9.80001 5.96019 9.37017 5.96019 8.84001V5.96001H8.84019C9.37035 5.96001 9.80019 5.53017 9.80019 5.00001C9.80019 4.46985 9.37035 4.04001 8.84019 4.04001Z" fill="#EB5A1E" />
                            </svg></button>
                            <button className={styles.trashBtn} onClick={()=>handleRemove()}><img src={trash} alt="remove" /></button>
                            
                        </div>
                        :
                        <button className={styles.addBtn} onClick={() => handleAdd()}>В корзину</button>
                }
            </div>
        </div>
    )
}

export default Food;