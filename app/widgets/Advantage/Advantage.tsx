import React from 'react'
import styles from './advantage.module.scss'
import Image from 'next/image'
 export const Advantage = () => {
    return (
        <div>
            <div className={styles.root}>
                <div className={styles.root__container}>
                    <div className={styles.root__content}>
                        <div className={styles.root__description}>
                            <h3 className={styles.root__title}>
                                Мы берём на себя
                            </h3>
                            <p className={styles.root__text}>
                                Вам не потребуется самостоятельно подключать и
                                обслуживать фискальные регистраторы для ведения
                                кассы
                            </p>
                            <p className={styles.root__change}>
                            Вам не потребуется  <br />
                                самостоятельно подключать  <br />
                                        и обслуживать фискальные регистраторы.
                            </p>
                        </div>
                        <div className={styles.root__bottom}>
                            
                            
                            <Image
                                className={styles.root__contentArrow}
                                src='/arw.svg'
                                width={233}
                                height={60}
                                alt='Arrow'
                            />
                            <h3 className={styles.root__subtitle}>
                                онлайн кассу и чек
                            </h3>
                            <h3 className={styles.root__subchange}>
                                решение всех задач
                            </h3>
                        </div>
                        <Image
                            className={styles.root__contentBox}
                            src='/box.svg'
                            width={351}
                            height={216}
                            alt='box'
                        />
                        <div className={styles.root__wrapper}>
                        <Image
                            className={styles.root__contentKassa}
                            src='/kassa.svg'
                            width={438}
                            height={330}
                            alt='box'
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

