
import { NavLink, Outlet } from "react-router-dom"
import styles from './Layout.module.css'
import logo from '../../assets/images/logo.svg'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAbout } from "../../redux/actions/about"

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

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAbout())
    }, [])
    
    return (    
        <div className="container">
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <NavLink to='/'><img src={logo} alt="logo" /></NavLink>
                </div>
                <ul>
                    <li><NavLink to='/menu' className={({ isActive }) => ( isActive ? styles.active : '' )}>Menu</NavLink></li>
                    <li><NavLink to='/about' className={({ isActive }) => ( isActive ? styles.active : '' )}>About Food</NavLink></li>
                </ul>
                <p className={styles.Link}><NavLink to='/order' className={({ isActive }) => ( isActive ? styles.active : '' )}>Orders</NavLink></p>
            </nav>
            <div className="outlet">
                <Outlet />
            </div>
        </div>
    ) 
}
export default Layout