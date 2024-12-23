import styles from './style.module.scss'

export default function News() {

    return ( 
        <nav className={styles.News}>
        <ul className={styles.News__list}>  
            <li className={styles.News__item_top}><a href="">Будьте в курсе<br />всех новостей</a></li>

            <li className={styles.News__item}><a href="">Telegram</a></li>
            <li className={styles.News__item}><a href="">VK</a></li>
        </ul>
        </nav>
     );
}
 
