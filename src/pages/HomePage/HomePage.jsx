import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Basket from '../../components/Basket/Basket'
import Calculator from '../../components/Calculator/Calculator'
import Food from '../../components/Food/Food'
import { addToCart, clearCart, decrementCart, increaseCart, removeCart } from '../../redux/actions/action'
import classes from './homePage.module.css'
import Modal from '../../components/Modal/Modal'

function HomePage()
{   
    const data = useSelector(s => s.getAbout)
    const [soms, setSoms] = useState(0)
    
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
                            totalSumma == 0 ? <p>корзина пуста</p>
                            : <div>
                                <div className={classes.tableTitle}>
                                    <h3>Наименование:</h3>
                                    <div className={classes.tableLeft}>
                                        <p>колличество:</p>
                                        <p>цена:</p>
                                        <p>сумма:</p>
                                        <p></p>
                                    </div>
                                </div>
                                    {data1.map(el => <Basket key={el.product_id} product={el} />)}
                            </div>
                        }
                        </div>
                    <div className={classes.cassa}>
                        <h2>Всего: {count == 0 ? 0 : count} штук</h2>
                        {
                            totalSumma > 0 &&
                            <div className={classes.input}>
                                <h2>Оплата:</h2>
                                    <input placeholder='0' type="number" value={soms > 0 ? soms : ''} onChange={(e) => setSoms(e.target.value)} />
                                    <span>сом</span>
                            </div>
                        }
                        <h2>Сумма заказа: {totalSumma} сом</h2>
                        
                           <div className={classes.actions}>
                                <button disabled={totalSumma > 0 ? false : true} className={classes.reset} onClick={() => dispatch(clearCart())}>Сбросить</button>
                                {
                                    soms < totalSumma && totalSumma > 0 &&
                                    <p>Недостаточно средств для оплаты</p>
                                }
                                <button className={classes.pay} disabled={ (totalSumma > 0 && totalSumma <= soms) ? false : true} onClick={()=>setCalc(!calc)}>Оплатить</button>
                            </div>
                                
                        {
                            calc && <Modal sum={totalSumma} cashBack={soms - totalSumma} setCalc={setCalc} setSoms={setSoms} />
                        }
                    </div>
                </div>
            }
            
        </>
        
    )
}

export default HomePage