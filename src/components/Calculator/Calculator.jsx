import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../redux/actions/action'
import styles from './Calculator.module.css'

function Calculator({totalSumma, calc, setCalc})
{
    const [soms, setSoms] = useState(0)
    const dispatch = useDispatch()
   
    const handleNew = () =>
    {
        dispatch(clearCart())
        setCalc(!calc)
    }
    return (
        <div className={styles.wrapperCalc}>
            <div className={styles.calc}>
                <h2>Оплата: {totalSumma} сом</h2>
                <div className={styles.payment}>
                    <input value={soms > 0 ? soms : ''} onChange={(e) => setSoms(e.target.value)} type="number" placeholder='0' />
                    <button onClick={()=>setSoms(0)}>Очистить</button>
                </div>
                <div className={styles.money}>
                    <button onClick={()=>setSoms(20)}>20</button>
                    <button onClick={()=>setSoms(50)}>50</button>
                    <button onClick={()=>setSoms(100)}>100</button>
                    <button onClick={()=>setSoms(100)}>150</button>
                    <button onClick={()=>setSoms(200)}>200</button>
                    <button onClick={()=>setSoms(300)}>300</button>
                    <button onClick={()=>setSoms(500)}>500</button>
                    <button onClick={()=>setSoms(1000)}>1000</button>
                    <button onClick={()=>setSoms(1000)}>2000</button>
                </div>
                
                <div className={styles.cashBack}>
                    <p>Сдача: <span>{soms && soms - totalSumma}</span> сом</p>
                    <div className={styles.actions}>
                        <button className={styles.back} onClick={()=>setCalc(!calc)}>Назад</button>
                        <button disabled={ (soms - totalSumma < 0 ? true : false)} onClick={()=>handleNew()}>Новый заказ</button>
                    </div>
                    
                </div>
            </div>
        </div >
    )
}

export default Calculator