import styles from './style.module.scss'

export default function Menu() {

    return ( 
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>  
                <li className={styles.nav__item_top}><a href="">Меню</a></li>

                <li className={styles.nav__item}><a href="">Продукты</a></li>
                <li className={styles.nav__item}><a href="">Опции</a></li>
                <li className={styles.nav__item}><a href="">Тарифы</a></li>
            </ul>
        </nav>
     );
}
 
