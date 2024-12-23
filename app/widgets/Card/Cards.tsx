import React from 'react'
import Image from 'next/image'
import styles from './card.module.scss'
export const Cards = ({title, text, img}) => {
  return (
    <li className={styles.root}>
    <div className={styles.root__Top}>
        <h2 className={styles.root__Subtitle}>
            {title}
        </h2>
        <p className={styles.root__Text}>
            {text}
        </p>
    </div>
    <div className={styles.root__Bottom}>
        <Image
        src= {img}
        width={344}
        height={338}
        alt='картинка телефона'
        className={styles.root__image}
        />
    </div>
</li>
  )
}
