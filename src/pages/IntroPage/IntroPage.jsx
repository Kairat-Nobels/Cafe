import watsapp from '../../assets/images/watsapp.svg'
import insta from '../../assets/images/insta.svg'
import styles from './IntroPage.module.css'
function IntroPage()
{
    return (
        <div className={styles.IntroPage}>
            <div className={styles.text}>
                <h1>Блюда приготовленные с любовью!</h1>
                <p>Пусть каждый кусочек этого изысканного блюда станет для вас маленьким кулинарным приключением, которое принесет вам удовольствие и новые вкусовые ощущения!</p>
            </div>
            <div className={styles.down}>
                <div className={styles.contacts}>
                    <a href="https://www.instagram.com/kairat_nobels/" target="_blank"><div>
                        <img src={insta} alt="insta" /> 
                        <span>chef.kg</span>
                    </div></a>
                    <a href="https://api.whatsapp.com/send/?phone=996502551118&text&type=phone_number&app_absent=0" target="_blank"><div>
                        <img src={watsapp} alt="watsapp" /> 
                        <span>+996999999</span>
                    </div></a>
                </div>
                <div className={styles.image}><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVK6XC2yhSIkmcqJEqpFTW5nmq5MePgmPMKUwHK6Lz0h6AoH_oXly6K0VJxz6noKSIN9k_QB0ea0sPCGgSdTpgf40ltv_U8RRGOPXI8JoxjXmCZ_y-DgJKgfW57LFPg6uzqsQ68Jwl28p1eGKc5udwHvSgPuhUYxBQZN-gN-RXhBGqRsS9-cRwcMB1/s320/Intro.png" alt="" /></div>
            </div>
            <div className={styles.green}></div>
        </div>
    )
}

export default IntroPage