import React from 'react'
import styles from './PreviwsCard.module.scss'
import Image from 'next/image'
import {Props} from "./types"
 export function PreviewsCard({title, text, img}:Props) {
    return (
        
            <li className={styles.root}>
                <div className={styles.root__wrapper}>
                    <Image
                        className={styles.root__wrapperImg}
                        src={img}
                        width={109}
                        height={111}
                        alt='Картинка'
                    />
                    <h3 className={styles.root__wrapperTitle}>{title}</h3>
                    <p className={styles.root__wrapperText}>{text}</p>
                </div>
            </li>
        
    )
}