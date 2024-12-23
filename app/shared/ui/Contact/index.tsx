import styles from './style.module.scss'

export default function Contact() {

    return ( 
        <nav className={styles.Contact}>
        <ul className={styles.Contact__list}>  
            <li className={styles.Contact__item_top}><a href="">Контакты</a></li>

            <li className={styles.Contact__item}><a href="">menu@ybru.ru</a></li>
            <li className={styles.Contact__item}><a href="">+7 (495) 088-42-02</a></li>
        </ul>
        </nav>
     );
}
 
