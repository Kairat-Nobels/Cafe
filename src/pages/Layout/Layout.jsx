import { NavLink, Outlet } from "react-router-dom"
import styles from './Layout.module.css'

function Layout() {
    return (    
    <>
        <nav className={styles.navbar}>
            <ul>
                <li><NavLink to='/' className={({ isActive }) => ( isActive ? styles.active : '' )}>Касса</NavLink></li>
                <li><NavLink to='/about' className={({ isActive }) => ( isActive ? styles.active : '' )}>Меню</NavLink></li>
            </ul>
        </nav>
        <div className="outlet">
            <Outlet />
        </div >
    </>
  ) 
}

export default Layout