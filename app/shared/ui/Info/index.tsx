import styles from './style.module.scss'

export default function Info() {

    return ( 
        <nav className={styles.News}>
        <ul className={styles.News__list}>  

            <li className={styles.News__item_top}><a href="">Пользовательские оферты</a></li>

            <li className={styles.News__item}><a href="">ООО "НПК "РПР"</a></li>

        </ul>
        </nav>
     );
}
 
