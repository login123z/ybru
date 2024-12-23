'use client'
import Image from 'next/image'
import styles from './Rewievs.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import React, { useRef } from 'react'
import 'swiper/css';

export const Rewievs = () => {
       const swiperRef = useRef();
  return (
    <section className={styles.reviews}>
        <div className={styles.reviews__container}>
            <h4 className={styles.reviews__title}>Отзывы</h4>
            <div className={styles.reviews__cards}>
                <div className={styles.reviews__card}>
                    <Image src="/1.png" alt="Picture of the author" width={300} height={300} className={styles.reviews__img} />
                    <div className={styles.reviews__subtitle}>Эдгар</div>
                    <p className={styles.reviews__post}>Владелец кафе</p>
                    <p className={styles.reviews__description}>Платформа для ресторанного бизнеса YBRUMENU стала незаменимым помощником в управлении нашим заведением. Благодаря этой системе мы смогли значительно улучшить качество обслуживания и увеличить прибыль...</p>
                </div>
                <div className={styles.reviews__card}>
                    <Image src="/2.png" alt="Picture of the author" width={300} height={300} className={styles.reviews__img} />
                    <div className={styles.reviews__subtitle}>Захар</div>
                    <p className={styles.reviews__post}>Владелец кафе</p>
                    <p className={styles.reviews__description}>Хотел бы поделиться своим опытом использования платформы для ресторанного бизнеса. Эта платформа помогла мне оптимизировать процессы управления и повысить эффективность работы кафе...</p>
                </div>
                <div className={styles.reviews__card}>
                  
                    <Image src="/3.png" alt="Picture of the author" width={300} height={300} className={styles.reviews__img} />
                    
                    <div className={styles.reviews__subtitle}>Антон</div>
                    <p className={styles.reviews__post}>Владелец Ресторана</p>
                    <p className={styles.reviews__description}>Я решил попробовать новую платформу для автоматизации ресторанного бизнеса и хочу поделиться своими впечатлениями. За несколько месяцев использования я заметил значительные улучшения в управлении рестораном...</p>
                  
                </div>
            </div>
            <Swiper 
                    modules={[Navigation]}
                    spaceBetween={50}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                      }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className={styles.root__list}
                    breakpoints={{
                        500:{
                            slidesPerView: 1,
                            pagination: true,
                        },
                        // when window width is >= 640px
                        768: {
                          slidesPerView: 2,
                        },
                        // when window width is >= 768px
                        1200: {
                            slidesPerView: 3,
                        }
                      }}
                >
                    <SwiperSlide className={styles.root__slide}>
                    <div className={styles.reviews__slidecard}>
                    <Image src="/1.png" alt="Picture of the author" width={300} height={300} className={styles.reviews__img} />
                    <div className={styles.reviews__subtitle}>Эдгар</div>
                    <p className={styles.reviews__post}>Владелец кафе</p>
                    <p className={styles.reviews__description}>Платформа для ресторанного бизнеса YBRUMENU стала незаменимым помощником в управлении нашим заведением. Благодаря этой системе мы смогли значительно улучшить качество обслуживания и увеличить прибыль...</p>
                </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.root__slide}>
                    <div className={styles.reviews__slidecard}>
                    <Image src="/2.png" alt="Picture of the author" width={300} height={300} className={styles.reviews__img} />
                    <div className={styles.reviews__subtitle}>Захар</div>
                    <p className={styles.reviews__post}>Владелец кафе</p>
                    <p className={styles.reviews__description}>Хотел бы поделиться своим опытом использования платформы для ресторанного бизнеса. Эта платформа помогла мне оптимизировать процессы управления и повысить эффективность работы кафе...</p>
                </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.root__slide}>
                    <div className={styles.reviews__slidecard}>
                    <Image src="/3.png" alt="Picture of the author" width={300} height={300} className={styles.reviews__img} />
                    <div className={styles.reviews__subtitle}>Антон</div>
                    <p className={styles.reviews__post}>Владелец Ресторана</p>
                    <p className={styles.reviews__description}>Я решил попробовать новую платформу для автоматизации ресторанного бизнеса и хочу поделиться своими впечатлениями. За несколько месяцев использования я заметил значительные улучшения в управлении рестораном...</p>
                </div>
                    </SwiperSlide>
                   
                </Swiper>
            <div className={styles.reviews__tips}>
                <div className={styles.reviews__tip}>Технологии</div>
                <div className={styles.reviews__tip}>Опыт использования</div>
                <div className={styles.reviews__tip}>Качество</div>
                <div className={styles.reviews__tip}>Эффективность работы</div>
                <div className={styles.reviews__tip}>совершенсовование</div>
            </div>
        </div>
        
    </section>
  )
}
