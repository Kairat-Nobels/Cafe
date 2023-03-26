import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Basket from '../../components/Basket/Basket'
import Calculator from '../../components/Calculator/Calculator'
import Food from '../../components/Food/Food'
import { addToCart, clearCart, decrementCart, increaseCart, removeCart } from '../../redux/actions/action'
import classes from './homePage.module.css'


function HomePage()
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
    
    const categories = ['Завтраки','Блюда','Напитки', 'Десерты']
    const dispatch = useDispatch();
    let count = 0;
    let totalSumma = 0;
    const [calc, setCalc] = useState(false);
    const [category, setCategory] = useState(1)

    const data1 = useSelector((s)=>
    {
        const transformedCartItems = [];
        for (const key in s.basket.items) {
        count = count + s.basket.items[key].quantity
        transformedCartItems.push({
            product_id: key,
            title: s.basket.items[key].productTitle,
            price: s.basket.items[key].productPrice,
            img: s.basket.items[key].productImg,
            count: s.basket.items[key].quantity,
            sum: s.basket.items[key].sum,
        });
        }
        totalSumma = s.basket.totalAmount
            return transformedCartItems;
    })
    return (
        <>
            {
                calc ? <Calculator totalSumma={totalSumma} calc={calc} setCalc={setCalc} />
                    :
                    <div className={classes.home}>
                    <div className={classes.filter}>      
                        <ul>
                            {categories.map((value, index) => <li onClick={()=>setCategory(index)} key={index} className={category === index ? classes.CategoryActive : ''}>{value}</li>)}
                        </ul>
                    </div>
                    <div className={classes.foods}>
                        {
                            data[category]?.map(el => <Food key={el.id} product={el} />)
                        }
                    
                    </div>
                    <h2 id="basket" className={classes.title}>Корзина</h2>
                    <div className={classes.basket}>
                        {
                            totalSumma == 0 ? <p>корзина пуста</p> :
                            data1.map(el => <Basket key={el.product_id} product={el} />)
                        }
                    </div>
                    <div className={classes.cassa}>
                        <h2>Всего: {count == 0 ? 0 : count} штук</h2>
                        <h2>Сумма заказа: {totalSumma} сом</h2>
                        <div className={classes.actions}>
                            
                            <button className={classes.reset} onClick={()=>dispatch(clearCart())}>Сбросить</button>
                            <button disabled={totalSumma <= 0 ? true : false} onClick={()=>setCalc(!calc)}>Оплатить</button>
                        </div >
                    </div>
                </div>
            }
            
        </>
        
    )
}

export default HomePage