'use client'

import React, { useRef } from 'react'
import styles from './option.module.scss'
import Image from 'next/image'
import { Cards } from '../Card/Cards'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import 'swiper/css';

export const Option = () => {

    const swiperRef = useRef();

    return (
        <section className={styles.root}>
            <div className={styles.root__container}>
                <div className={styles.root__contentTop}>
                    <h2 className={styles.root__contentTitle}>Опции платформы</h2>
                    <div className={styles.root__contentPagination}>
                        <button className={styles.root__contentPaginationLeft} onClick={() => swiperRef.current?.slidePrev()}>
                            <Image
                                className={styles.root__ArrowLeftImg}
                                src='/ArrowLeft.svg'
                                width={22}
                                height={14}
                                alt='Стрелка налево'
                            />
                        </button>
                        <button className={styles.root__contentPaginationRight} onClick={() => swiperRef.current?.slideNext()}>
                            <Image
                                className={styles.root__ArrowRightImg}
                                src='/ArrowRight.svg'
                                width={22}
                                height={14}
                                alt='Стрелка направо'
                            />
                        </button>
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
                        200:{
                            slidesPerView: 1,
                            pagination: true,
                        },
                        // when window width is >= 640px
                        768: {
                          slidesPerView: 1.5,
                          spaceBetween: 20,
                        },
                        // when window width is >= 768px
                        1200: {
                            slidesPerView: 3,
                        }
                      }}
                >
                    <SwiperSlide>
                        <Cards
                            img="/phone.png"
                            text='Оформляя заказ онлайн, клиент изучает желаемые блюда и не ждёт в очереди Отслеживание статус заказа в реальном времени и получает уведомление о готовности'
                            title='Заказы и доставка'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cards
                            img="/phone2.png"
                            text='Просмотр истории сделанных заказов и их статуса Подборка любимых блюд на основе предпочтений клиента с использованием алгоритмов рекомендации'
                            title='История заказов и рекомендации'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cards
                            img="/phone3.png"
                            text='Настраивайте скидки, бонусы и промокоды Отправляйте групповые сообщение клиентам Отслеживайте активность по заказам, сколько клиентов было сегодня и ежедневную выручку'
                            title='Программа лояльности и CRM'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cards
                            img="/phone4.png"
                            text='На платформе будет доступна оплата через систему быстрых платежей (СБП) и банковскими картами'
                            title='Оплата'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cards
                            img="/phone5.png"
                            text='Размещайте последние события, акции, новости и другую информации в строис Информируйте и привлекайте внимание к новинкам'
                            title='Сторис'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Cards
                            img="/phone6.png"
                            text='Добавьте блюду модификаторы, чтобы клиент мог изменять или дополнять блюда, делая уникальный вкус и убирая не любимые ингредиенты'
                            title='Модификация'
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}
