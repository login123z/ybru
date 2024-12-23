'use client'
import React, { useState } from 'react'
import styles from './Multi-brand.module.scss'
import Accordion from './accordion/Accordion'

const MultiBrand = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleAccordion = (index: number) => {
        if (openIndex === index) {
            setOpenIndex(null)
        } else {
            setOpenIndex(index)
        }
    }

    return (
        <section className={styles.multi}>
            <div className={styles.multi__content}>
                <div className={styles.multi__contentLeft}>
                    <img
                        src='Rectangle 5295.png'
                        alt='multi'
                        className={styles.multi__contentLeft_img}
                    />
                </div>
                <div className={styles.multi__contentRight}>
                    <div className={styles.multi__contentRightContainer}>
                        <div className={styles.multi__contentRightName}>
                            <h2 className={styles.multi__contentRightName_zag}>
                                Мультибренд
                            </h2>
                            <p className={styles.multi__contentRightName_txt}>
                                Мультибренд - это стратегия, позволяющая
                                объединить несколько <br /> ресторанов в одном
                                приложении, ради совместного <br />
                                роста и продвижения
                            </p>
                            <p
                                className={
                                    styles.multi__contentRightName_txt_app
                                }
                            >
                                Мультибренд — одна из стратегий, которая
                                <br /> позволяет объединить усилия нескольких{' '}
                                <br />
                                компаний для достижения общих целей.
                            </p>
                        </div>
                        <p className={styles.multi__contentRight_txt}>
                            Основные преимущества мультибренда:
                        </p>
                        <div className={styles.multi__container}>
                            <Accordion
                                title='Экономия ресурсов'
                                isOpen={openIndex === 0}
                                onToggle={() => toggleAccordion(0)}
                            >
                                <p className={styles.multi__containerS_txt}>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Voluptates?
                                </p>
                            </Accordion>

                            <Accordion
                                title='Расширение рынка'
                                isOpen={openIndex === 1}
                                onToggle={() => toggleAccordion(1)}
                            >
                                <p className={styles.multi__containerS_txt}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Inventore, explicabo.
                                    Culpa animi possimus quasi voluptate!
                                </p>
                            </Accordion>

                            <Accordion
                                title='Ускорение роста'
                                isOpen={openIndex === 2}
                                onToggle={() => toggleAccordion(2)}
                            >
                                <p className={styles.multi__containerS_txt}>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Quae, quisquam alias!
                                </p>
                            </Accordion>

                            <Accordion
                                title='Совместные достижения'
                                isOpen={openIndex === 3}
                                onToggle={() => toggleAccordion(3)}
                            >
                                <p className={styles.multi__containerS_txt}>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                </p>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MultiBrand
