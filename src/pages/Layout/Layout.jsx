import { Link, NavLink, Outlet } from "react-router-dom"
import styles from './Layout.module.css'
import logo from '../../assets/images/logo.svg'
import blackBasketSvg from '../../assets/images/basketDark.svg'
import { useSelector } from "react-redux"
function Layout()
{
    let count = 0;
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
        return transformedCartItems;
    })
    return (    
        <div className="container">
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
                </div >
                <ul>
                    <li><NavLink to='/menu' className={({ isActive }) => ( isActive ? styles.active : '' )}>Menu</NavLink></li>
                    <li><NavLink to='/about' className={({ isActive }) => ( isActive ? styles.active : '' )}>About Food</NavLink></li>
                </ul>
                <a className={styles.basketIcon} href="#basket"><img src={blackBasketSvg} alt="basket" /><span>{count}</span></a>  
            </nav>
            <div className="outlet">
                <Outlet />
            </div >
        </div>
    ) 
}

export default Layout