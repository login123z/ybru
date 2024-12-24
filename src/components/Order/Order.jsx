import './Order.scss'

export default function Order() {
     return(

        <>
        
             <section  className="order">
      <div className="container order-wrapper">
        <h2 id='5' className="order-title">Заказать приложение</h2>
        <div className="budget-box">
          <div className="budget-box__item">
            <p className="budget-title">Бюджет проекта:</p>
            <div className="budget-list">
              <button className="budget-btn">20 000 — 50 000 руб.</button>
              <button className="budget-btn">50 000 — 100 000 руб.</button>
              <button className="budget-btn">100 000 — 500 000 руб.</button>
              <button className="budget-btn__first">500 000 — 1 000 000 руб.</button>
              <button className="budget-btn__second">1 000 000 руб. — 2 000 000 руб.</button>
              <button className="budget-btn__second">2 000 000 руб. — 3 000 000 руб.</button>
            </div>
          </div>

          <div className="form-box">
            <p id='6' className="form-title">Контакты:</p>
            <form className="form-order" action="#">
              <input className="form-order__name" type="text" placeholder="Ваше Имя" />
              <input className="form-order__phone" type="tel" placeholder="Телефон" />
              <textarea className="form-order__text" placeholder="Комментарий"></textarea>
            </form>
            <button className="form-btn">Заказать звонок</button>
          </div>
        </div>
      </div>
    </section>

        </>

     )
}