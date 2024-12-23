'use client'

import Image from 'next/image'
import styles from './header.module.scss'
import { useState } from 'react'
import Button from '@/app/shared/ui/Button/Button'

export const Header = () => {
    
    const [isOpen, setIsOpen] = useState(true);

    return(
        <header className={styles.root}>
            <div className={styles.root__container}>
                <Image 
                    src="/Логотип.svg"
                    width={200}
                    height={100}
                    alt='Logo'
                    className={styles.root__logo}
                />
                <nav className={styles.root__navbar}>
                    <menu className={styles.root__menu}>
                        <li className={styles.root__item}>
                            <a href="#!" className={styles.root__link}>Продукт</a>
                        </li>
                        <li className={styles.root__item}>
                            <a href="#!" className={styles.root__link}>Опции</a>
                        </li>
                        <li className={styles.root__item}>
                            <a href="#!" className={styles.root__link}>Тарифы</a>
                        </li>
                    </menu>
                    <ul className={styles.root__contacts}>
                        <li className={styles.root__itemContacts}>
                            <a href="mailto:menu@ybru.ru" className={styles.root__link}>menu@ybru.ru</a>
                        </li>
                        <li className={styles.root__itemContacts}>
                            <a href="tel:+74950884202" className={styles.root__link}>+7 (495) 088-42-02</a>
                        </li>
                    </ul>
                    <Button title="Связаться"/>
                </nav>
                <button className={styles.root__buttonMenu} onClick={() => setIsOpen(!isOpen)}>
                    <Image 
                                className="styles root__buttonMenuImage" 
                                src="MenuIcon.svg"
                                width={28}
                                height={28}
                                alt='Menu Icon'
                    />
                </button>
            </div>
        </header>
    )
}