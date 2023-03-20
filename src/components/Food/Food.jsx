import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, removeCart } from '../../redux/actions/action';
import styles from './Food.module.css';
function Food({ product })
{
    const dispatch = useDispatch();
    console.log(product.title);
    return (
        <div className={styles.foodCard}>
            <div className={styles.foodImage}><img src={product.img} alt="image" /></div>
            <h3>{product.title}</h3>
            <div className={styles.foodPrice}>
                <p>Цена: <span>{product.price}</span> сом</p>
                {
                    product.count > 0 ?
                        <button onClick={() => dispatch(removeCart(product.id))}>Remove</button> :
                        <button className={styles.addBtn} onClick={() => dispatch(addToCart(product))}>Add</button>
                }
            </div>
        </div>
    )
}

export default Food;