import Image from 'next/image'
import styles from './News.module.scss'

export default function root() {
    return (
        <section className={styles.root}>
            <div className={styles.root__container}>
                <div className={styles.root__content}>
                    <div className={styles.root__left}>
                        <Image src='/News.png' width={952} height={900} className={styles.root__leftImg} alt='1'/>
                    </div>
                    <div className={styles.root__right}>
                        <div className={styles.root__block}>
                            <h2 className={styles.root__blockTitle}>
                                Актуальные  события
                            </h2>
                            <p className={styles.root__blockText}>
                                Ежедневно улучшаем и внедряем новые функции в
                                YBRU.MENU Платформу на который каждый
                                ресторатор, не зависит от агрегаторов Имеет
                                функции по привлечению, обслуживанию, повышения
                                лояльности клиентов
                            </p>
                            <p className={styles.root__blockSubtext}>
                                Сейчас активно разрабатываем интеграции с «iiko»
                                и «R-keeper», чтобы сделать процесс подключения
                                и управления приложением удобнее. Если у Вас
                                возникли вопросы или требуется дополнительная
                                информация, пожалуйста, свяжитесь с нами
                            </p>
                        </div>
                        <ul className={styles.root__grid}>
                            <li className={styles.root__item}>
                                <img
                                    src='ItemNews3.svg'
                                    alt=''
                                    className={styles.root__itemImage}
                                />
                                <h3 className={styles.root__itemTitle}>
                                    Уведомляем о подключении к системам учёта
                                    товаров и финансов
                                </h3>
                            </li>
                            <li className={styles.root__item}>
                                <img
                                    src='ItemNews2.svg'
                                    alt=''
                                    className={styles.root__itemImage}
                                />
                                <h3 className={styles.root__itemTitle}>
                                    Создаем интеграцию с iiko и R-keeper для
                                    оптимизации продаж, контроля остатков
                                </h3>
                            </li>
                            <li className={styles.root__item}>
                                <img
                                    src='ItemNews1.svg'
                                    alt=''
                                    className={styles.root__itemImage}
                                />
                                <h3 className={styles.root__itemTitle}>
                                    Мы будем рады помочь вам и ответить на все
                                    интересующие вас вопросы.
                                </h3>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}