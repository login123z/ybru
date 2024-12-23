'use client'

import React from 'react'
import styles from './Preview.module.scss'
import Image from 'next/image'
import phone from '@/public/PreviewBlock.png'
import { PreviewsCard } from '../PreviewCard/PreviewCard'
import image1 from '@/public/Image1.svg'
export function PreviewsMain() {
    return (
        <section className={styles.root}>
            <div className={styles.root__container}>
                <div className={styles.root__content}>
                    <div className={styles.root__contentLeft}>
                        <Image
                            className={styles.root__contentImg}
                            src={phone}
                            width={952}
                            height={867}
                            alt='Картинка телефона'
                        />
                    </div>
                    <div className={styles.root__contentRight}>
                        <div className={styles.root__contentRightDesc}>
                            <h1 className={styles.root__contentTopTitle}>
                                Foodtech
                            </h1>
                            <span className={styles.root__contentTopSubtitle}>
                                для каждого бизнеса
                            </span>
                            <p className={styles.root__contentTopText}>
                                Оцифруем базу гостей без комиссии агрегаторов,
                                гибко настроим маркетинг и программу лояльности
                                под заведение Интегрируем выгодный процесс
                                доставки заказов
                            </p>
                        </div>
                        <ul className={styles.root__contentCards}>
                            <PreviewsCard
                                img='/Image.svg'
                                text='Улучшение бизнес-процессов 
                                  для роста 
                                  эффективности и 
                                  прибыли'
                                title='Оптимизация бизнеса'
                            />
                            <PreviewsCard
                                img='/PreviewImage.png'
                                text='Набор программных решений для создания полноценного функционирующего сервиса'
                                title='Готовая платформа'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
