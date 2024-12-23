import Button from '@/app/shared/ui/Button/Button'
import styles from './offer.module.scss'

export default function Offer() {
    return (
        <section className={styles.root}>
            <div className={styles.root__container}>
                <div className={styles.root__left}>
                    <img
                        src='block.left.png'
                        alt=''
                        className={styles.root__image}
                    />
                </div>
                <div className={styles.root__right}>
                    <div className={styles.root__content}>
                        <h2 className={styles.root__title}>Что мы предлагаем</h2>
                        <p className={styles.root__description}>
                            Настройте внешний вид приложения и сайта, выберите шрифт
                            и цвета отражающие концепцию ресторана. Установите
                            логотип и добавьте блюда из меню Управляйте сезонными
                            блюдами и делайте тематические меню в праздники
                        </p>
                        <p className={styles.root__subdescription}>
                            Если же хотите добавить дополнительный функционал или
                            тему в приложение или сайт, обсудим условия и реализуем
                            нововведения в кратчайшие сроки
                        </p>
                    </div>
                    <div className={styles.root__contentButton}>
                        <Button title="Связаться"/>
                    </div>
                    <ul className={styles.root__grid}>
                        <li className={styles.root__item}>
                            <img
                                src='item1.svg'
                                alt=''
                                className={styles.root__Image}
                            />
                            <h3 className={styles.root__itemTitle}>
                                Настройте стиль, отражающий концепцию ресторана
                            </h3>
                        </li>
                        <li className={styles.root__item}>
                            <img
                                src='item2.svg'
                                alt=''
                                className={styles.root__Image}
                            />
                            <h3 className={styles.root__itemTitle}>
                                Создавайте сезонные блюда и меню
                            </h3>
                        </li>
                        <li className={styles.root__item}>
                            <img
                                src='item3.svg'
                                alt=''
                                className={styles.root__Image}
                            />
                            <h3 className={styles.root__itemTitle}>
                                Индивидуальный стиль и функционал под Ваши
                                потребности
                            </h3>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
