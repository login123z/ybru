import './Tarrifs.scss'
import tarrifIcon1 from '../../assets/img/icon01.svg'
import tarrifIcon2 from '../../assets/img/icon02.svg'
import tarrifIcon3 from '../../assets/img/icon03.svg'
import checkIcon from '../../assets/img/check.svg'

export default function Tarrifs() {
    return(

        <>
        
    <section id='3' className="price">
      <div className="container price-wrapper">
        <h3 className="price-title">Стоимость разработки<br /> мобильных приложений</h3>
       
        <div className="price-box">
          <div className="price-box__item">
            <div className="price-box__title">
              <img src={tarrifIcon1} alt="" />
              <p className="price-box__text">Типовой</p>
            </div>
            <ul className="services-element__list">
              <li className="services-element__list-item">
                <p className="list-item__text">Каталог товаров или услуг</p>
                <img src={checkIcon}alt="" />
              </li>
              <li className="services-element__list-item">
                <p className="list-item__text">Сделать заказ</p>
                <img src={checkIcon} alt="" />
              </li>
              <li className="services-element__list-item">
                <p className="list-item__text">Новости и акции</p>
                <img src={checkIcon} alt="" />
              </li>
              <li className="services-element__list-item">
                <p className="list-item__text">Обратная связь</p>
                <img src={checkIcon} alt="" />
              </li>
              <li className="services-element__list-item">
                <p className="list-item__text">Контакты</p>
                <img src={checkIcon} alt="" />
              </li>
            </ul>
            <div className="price-btn__box">
              <span className="price-text">1 000 000 руб.</span>
              <button className="price-btn">Заказать приложение</button>
            </div>
          </div>

          <div className="price-box__item">
            <div className="price-box__title">
              <img src={tarrifIcon2} alt="" />
              <p className="price-box__text">Типовой</p>
            </div>
            <ul className="services-element__list">
              <li className="services-element__list-item">
                <p className="list-item__text">Программа лояльности</p>
                <img src={checkIcon} alt="" />
              </li>
              <li className="services-element__list-item">
                <p className="list-item__text">Push уведомления</p>
                <img src={checkIcon} alt="" />
              </li>
              <li className="services-element__list-item">
                <p className="list-item__text">Серверная часть</p>
                <img src={checkIcon} alt="" />
              </li>
              <li className="services-element__list-item">
                <p className="list-item__text">Панель управления</p>
                <img src={checkIcon} alt="" />
              </li>
              <li className="services-element__list-item">
                <p className="list-item__text">Чаты</p>
                <img src={checkIcon} alt="" />
              </li>
            </ul>
            <div className="price-btn__box">
              <span className="price-text">2 000 000 руб.</span>
              <button className="price-btn">Заказать приложение</button>
            </div>
          </div>

          <div className="price-box__item">
            <div className="price-box__title">
              <img src={tarrifIcon3} alt="" />
              <p className="price-box__text">Типовой</p>
            </div>
            <ul className="services-element__list">
              <li className="services-element__list-item">
                <p className="list-item__text">Автоматизация процессов</p>
                <img src={checkIcon} alt="" />
              </li>
              <li className="services-element__list-item">
                <p className="list-item__text">Сложные интеграции</p>
                <img src={checkIcon} alt="" />
              </li>
              <li className="services-element__list-item">
                <p className="list-item__text">Маркетплейс</p>
                <img src={checkIcon} alt="" />
              </li>
              <li className="services-element__list-item">
                <p className="list-item__text">Корпоративные решения</p>
                <img src={checkIcon} alt="" />
              </li>
              <li className="services-element__list-item">
                <p className="list-item__text">Smart TV, Kit, VR \ AR</p>
                <img src={checkIcon} alt="" />
              </li>
            </ul>
            <div className="price-btn__box">
              <span className="price-text">3 000 000 руб.</span>
              <button className="price-btn">Заказать приложение</button>
            </div>
          </div>
        </div>
      </div>
    </section>
        
        </>


    )
}