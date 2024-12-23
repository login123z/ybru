'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { useSwiper } from 'swiper/react'
import { Cards } from '../../shared/ui/Card/array'
import Card from '../../shared/ui/Card/Card'
import "@/app/shared/styles/swiper-bundle.css"
import styles from './tariffs.module.scss'
import 'swiper/css'
import { Navigation } from 'swiper/modules'
import { useRef } from 'react'

export default function Tariffs() {
    const swiperRef = useRef()

    return (
        <section className={styles.root}>
            <div className={styles.root__container}>
                <div className={styles.root__headBlock}>
                    <div className={styles.root__header}>
                        <h1 className={styles.root__title}>Тарифы</h1>
                        <ul className={styles.root__list}>
                            <li className={styles.root__item}>
                                <button
                                    className={styles.root__button}
                                    onClick={() => swiperRef.current?.slidePrev()}
                                >
                                    <img
                                        src='arrow.svg'
                                        alt=''
                                        className={styles.root__buttonImage}
                                    />
                                </button>
                            </li>
                            <li className={styles.root__item}>
                                <button
                                    className={styles.root__button}
                                    onClick={() => swiperRef.current?.slideNext()}
                                >
                                    <img
                                        src='arrow.svg'
                                        alt=''
                                        className={styles.root__buttonImage}
                                        style={{ transform: 'rotate(180deg)' }}
                                    />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <Swiper 
                    modules={[Navigation]}
                    spaceBetween={20}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className={styles.root__content}
                    breakpoints={{
                        200: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        // when window width is >= 640px
                        768: {
                            slidesPerView: 2.4,
                            spaceBetween: 10,
                        },
                        // when window width is >= 768px
                        1300: {
                            slidesPerView: 3.5
                        }
                    }}
                >
                    {Cards.map((card) => (
                        <SwiperSlide key={card.id}>
                         
                            <Card
                                title={card.title}
                                subtitle={card.subtitle}
                                text={card.text}
                                color={card.color}
                                items={card.items}
                            />
                            
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
