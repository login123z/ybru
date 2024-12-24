import './Tascks.scss'

export default function Tascks() {
    return(

        <>
        
            <section id='4' className="tasks">
      <div className="container task-wrapper">
        <h3 className="task-title">Какие задачи поможет решить<br />запуск мобильного приложения</h3>
        <div className="task-list">
          <div className="task-list__item">
            <div className="task-box__title">
              <span className="task-number">1</span>
              <h4 className="task-item__title">Повысить лояльность</h4>
            </div>
            <p className="task-text__first">
              Мобильное приложение работает намного быстрее сайта и может выполнять многие функции даже без интернета. Также здесь не нужно каждый раз авторизовываться, чтобы оформить заказ или отследить его статус. Все это создает положительный пользовательский опыт.
            </p>
            <div className="task-box__title">
              <span className="task-number">2</span>
              <h4 className="task-item__title">Автоматизировать продажи</h4>
            </div>
            <p className="task-text">
              С приложением легче провести пользователя по каждому этапу воронки продаж. С помощью автоматизации внутри интерфейса можно показывать ценность продукта, рассказывать о новых функциях, делать допродажи и напоминать о себе с помощью пуш-уведомлений.
            </p>
          </div>

          <div className="task-list__item">
            <div className="task-box__title">
              <span className="task-number">3</span>
              <h4 className="task-item__title">Сократить издержки</h4>
            </div>
            <p className="task-text__first">
              Мобильный сервис помогает сэкономить на рекламном бюджете и дополнительных сотрудниках. Например, многие маркетинговые акции можно проводить в самом приложении и адаптировать рекламу под целевых пользователей, а часть работы службы поддержки делегировать автоматическим чат-ботам.
            </p>
            <div className="task-box__title">
              <span className="task-number">4</span>
              <h4 className="task-item__title">Увеличить прибыль</h4>
            </div>
            <p className="task-text">
              Повышение уровня клиентского сервиса, экономия на закупке рекламы на других площадках и автоматизация процессов положительно скажется и на итоговой выручке. Вложения в разработку приложения быстро окупятся, если интерфейс хорошо справляется со своими задачами.
            </p>
          </div>
        </div>
      </div>
    </section>

        </>

    )
}