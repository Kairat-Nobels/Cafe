import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Basket from '../../components/Basket/Basket'
import Calculator from '../../components/Calculator/Calculator'
import Food from '../../components/Food/Food'
import { addToCart, clearCart, decrementCart, increaseCart, removeCart } from '../../redux/actions/action'
import classes from './homePage.module.css'


function HomePage()
{   
    const data = [
        {
            id: 1,
            price: 120,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis eaque fuga magnam iure. Tempore eveniet quis itaque recusandae, aliquam totam soluta neque labore. Alias eaque optio quas aliquam maiores?',
            title: 'Рыба',
            img: 'https://eda.ru/img/eda/c270x270/s1.eda.ru/StaticContent/Photos/140201143522/140208000700/p_O.jpg.webp'
        },
        {
            id: 2,
            price: 150,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid earum iusto suscipit quam impedit labore at debitis reiciendis rem hic, cupiditate quis itaque vero tenetur officia. Possimus, quia quod!',
            title: 'Котлетки',
            img: 'https://eda.ru/img/eda/c270x270/s1.eda.ru/StaticContent/Photos/120213175433/140114142653/p_O.jpg.webp'
        },
        {
            id: 3,
            price: 200,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid earum iusto suscipit quam impedit labore at debitis reiciendis rem hic, cupiditate quis itaque vero tenetur officia. Possimus, quia quod!',
            title: 'Плов',
            img: 'https://eda.ru/img/eda/c270x270/s1.eda.ru/StaticContent/Photos/120131085017/171024233545/p_O.jpg.webp'
        },
        {
            id: 4,
            price: 250,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid earum iusto suscipit quam impedit labore at debitis reiciendis rem hic, cupiditate quis itaque vero tenetur officia. Possimus, quia quod!',
            title: 'Чечевица',
            img: 'https://eda.ru/img/eda/c270x270/s1.eda.ru/StaticContent/Photos/150810204910/150815154033/p_O.jpg.webp'
        },
        {
            id: 5,
            price: 220,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid earum iusto suscipit quam impedit labore at debitis reiciendis rem hic, cupiditate quis itaque vero tenetur officia. Possimus, quia quod!',
            title: 'Куринное филе',
            img: 'https://eda.ru/img/eda/c270x270/s1.eda.ru/StaticContent/Photos/120213185949/120214124324/p_O.jpg.webp'
        },
        {
            id: 6,
            price: 180,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid earum iusto suscipit quam impedit labore at debitis reiciendis rem hic, cupiditate quis itaque vero tenetur officia. Possimus, quia quod!',
            title: 'Баклажаны с Моцарелой',
            img: 'https://eda.ru/img/eda/c270x270/s1.eda.ru/StaticContent/Photos/120213175134/1202131752230/p_O.jpg.webp'
        },
    ]
    const categories = ['Завтраки','Блюда','Десерты','Напитки']
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
    console.log(data1);
    return (
        <>
            {
                calc ? <Calculator totalSumma={totalSumma} calc={calc} setCalc={setCalc} />
                    :
                <div className={classes.home}>
                    {/* <div>  
                        <button onClick={()=> dispatch(addToCart(data[0]))}>ad1</button>
                        <button onClick={()=> dispatch(addToCart(data[1]))}>ad2</button>
                        <button onClick={()=> dispatch(removeCart(1))}>удалить пролудкт</button>
                        <button onClick={()=> dispatch(increaseCart(1))}>+</button>
                        <button onClick={()=> dispatch(decrementCart(1))}>-</button>
                        <button onClick={()=> dispatch(clearCart())}>delete</button>
                        <button onClick={()=> console.log(data1)}>show result</button>
                    </div> */}
                    <h2 className={classes.title}>Меню</h2>
                    <div className={classes.filter}>      
                        <ul>
                            {categories.map((value, index) => <li onClick={()=>setCategory(index)} key={index} className={category === index ? classes.CategoryActive : ''}>{value}</li>)}
                        </ul>
                    </div>
                    <div className={classes.foods}>
                        {
                            data.map(el => <Food key={el.id} product={el} />)
                        }
                    
                    </div>
                    <h2 className={classes.title}>Корзина</h2>
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