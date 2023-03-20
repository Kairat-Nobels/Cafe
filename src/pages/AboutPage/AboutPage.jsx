import React from 'react'
import AboutFood from '../../components/AboutFood/AboutFood'
import styles from './aboutPage.module.css'
function AboutPage()
{
  const data = [
        {
            id: 1,
            price: 120,
            weight: 340,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis eaque fuga magnam iure. Tempore eveniet quis itaque recusandae, aliquam totam soluta neque labore. Alias eaque optio quas aliquam maiores?',
            title: 'Рыба',
            img: 'https://eda.ru/img/eda/c270x270/s1.eda.ru/StaticContent/Photos/140201143522/140208000700/p_O.jpg.webp',
            inner: 'Рыба, помидор, салат, соль, хлеб'
        },
        {
            id: 2,
            price: 150,
            weight: 250,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid earum iusto suscipit quam impedit labore at debitis reiciendis rem hic, cupiditate quis itaque vero tenetur officia. Possimus, quia quod!',
            title: 'Котлетки',
            img: 'https://eda.ru/img/eda/c270x270/s1.eda.ru/StaticContent/Photos/120213175433/140114142653/p_O.jpg.webp',
            inner: 'Говядина, лук, салат, соль, хлеб'
        },
        {
            id: 3,
            price: 200,
            weight: 330,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid earum iusto suscipit quam impedit labore at debitis reiciendis rem hic, cupiditate quis itaque vero tenetur officia. Possimus, quia quod!',
            title: 'Плов',
            img: 'https://eda.ru/img/eda/c270x270/s1.eda.ru/StaticContent/Photos/120131085017/171024233545/p_O.jpg.webp',
            inner: 'Баранина, лук, рис, чеснок, соль, хлеб'
        },
        {
            id: 4,
            price: 250,
            weight: 200,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid earum iusto suscipit quam impedit labore at debitis reiciendis rem hic, cupiditate quis itaque vero tenetur officia. Possimus, quia quod!',
            title: 'Чечевица',
            img: 'https://eda.ru/img/eda/c270x270/s1.eda.ru/StaticContent/Photos/150810204910/150815154033/p_O.jpg.webp',
            inner: 'Чечевица, Гречка, соус, соль, хлеб'
        },
        {
            id: 5,
            price: 220,
            weight: 360,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid earum iusto suscipit quam impedit labore at debitis reiciendis rem hic, cupiditate quis itaque vero tenetur officia. Possimus, quia quod!',
            title: 'Куринное филе',
            img: 'https://eda.ru/img/eda/c270x270/s1.eda.ru/StaticContent/Photos/120213185949/120214124324/p_O.jpg.webp',
            inner: 'Курица, пюре, помидор, огурец, соус, грибы, соль, хлеб'
        },
        {
            id: 6,
            price: 180,
            weight: 250,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aliquid earum iusto suscipit quam impedit labore at debitis reiciendis rem hic, cupiditate quis itaque vero tenetur officia. Possimus, quia quod!',
            title: 'Баклажаны с Моцарелой',
            img: 'https://eda.ru/img/eda/c270x270/s1.eda.ru/StaticContent/Photos/120213175134/1202131752230/p_O.jpg.webp',
            inner: 'Баклажан, моцарела, салат, соль, хлеб'
        },
   ]
  
  return (
    <div className={styles.page}>
      <h2 className={styles.title}>О продуктах</h2>
      <div className={styles.foods}>
        {data.map(el => <AboutFood key={el.id} product={el} />)}
      </div>
    </div>
  )
}

export default AboutPage