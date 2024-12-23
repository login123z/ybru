import Image from 'next/image'
import styles from './card.module.scss'

import { Cards } from './array'
import Button from '../Button/Button'

export default function Card(props) {
    console.log(props.items)
    return(
        <li className={styles.root__card}>
            <div className={styles.root__cardContent}>
                <div className={styles.root__cardBlock} style={{background: props.color}}>
                    <div className={styles.root__cardHeader}>
                        <h3 className={styles.root__cardTItle}>{props.title}</h3>
                        <span className={styles.root__cardText}>{props.subtitle}</span>
                        <p className={styles.root__cardDesc}>{props.text}</p>
                    </div>
                    <ul className={styles.root__cardList}>
                        {
                            props.items.map((item) => (
                                <li className={styles.root__cardItem} key={item.id}>
                                    <img src={item.image} alt="" />
                                    <span className={styles.root__cardItemText} style={{opacity: item.opacity}}>{item.item}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <Button title="Связаться" width="100%"/>
            </div>
        </li>
    )
}
 
