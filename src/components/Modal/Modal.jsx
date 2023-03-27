import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from '../../redux/actions/action'
import styles from './Modal.module.css'
import succes from '../../assets/images/sucsecc.png'
function Modal({ sum, cashBack, setCalc, setSoms })
{
    const dispatch = useDispatch()
    const body = document.body;
    const handleNew = () =>
    {
        setCalc(false)
        dispatch(clearCart())
        setSoms(0)
        body.style.overflow = 'scroll';
    }
    useEffect(() =>
    {
        body.style.overflow = 'hidden';  
    }, [])
    return (
        <div className={styles.window}>
            <div className={styles.card}>
                <div><img src={succes} alt="galka" /></div>
                <p>Итог: <span>{sum}</span> сом</p>
                <p>Сдача: <span>{cashBack}</span> сом</p>
                <button onClick={() =>handleNew()}>Новый заказ</button>
            </div>
        </div>
    )
}

export default Modal