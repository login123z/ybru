import React from 'react'
import styles from './Features.module.scss'
import { Cards } from './Cards/Cards'

export const Features = () => {
  return (
    <section className={styles.root}>
      <div className={styles.root__container}>
        <div className={styles.root__block}>
          <div className={styles.root__head}>
            <h4 className={styles.root__title}>Эффективность, удобство и экономия времени</h4>
            <p className={styles.root__description}>Предлагаем инструменты улучшения клинского опыта, развития ресторанного бизнеса Решения улучшающие впечатление от вашего бренда и качества обслуживания клиентов</p>
          </div>
        </div>
        <div className={styles.root__cards}>
          <Cards />
        </div>
      </div>
    </section>
  )
}
