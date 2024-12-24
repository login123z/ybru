import './Promo.scss'
import promoIcon1 from '../../assets/img/promo-1.svg'
import promoIcon2 from '../../assets/img/promo-2.svg'

export default function Promo() {
    return(
        <>

        <section id='1' className="promo">
            <div className="container promo-wrapper">
                <div className="promo-title__box">
                    <h1 className="promo-title">
                         Разработка мобильных <br /> приложений и <br /> сервисов
                    </h1>
                </div>
                    <div className="slogan-box">
                    <div className="slogan-box__item">
                        <img src={promoIcon1} alt="" />
                    <p className="box-item__text">Знаем, как решить вашу задачу оптимальным способом</p>
            </div>
            <div className="slogan-box__item">
                <img src={promoIcon2} alt="" />
                <p className="box-item__text">Подберем подходящее решение с учетом целей и возможностей</p>
            </div>
            </div>
            <div class="promo-btn__box">
                <button class="blue-btn">Онлайн-консультация</button>
            </div>
            </div>
        </section>


        </>
    )
}