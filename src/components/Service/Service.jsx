import './Service.scss'
import serviseIcon1 from '../../assets/img/services-1.svg'
import serviseIcon2 from '../../assets/img/services-2.svg'
import serviseIcon3 from '../../assets/img/services-3.svg'

export default function Servece() {
    return(

        <>
        
<section id='2' className="services">
    <div className="container services-wrapper">
            <h2 className="services-title">Наши услуги</h2>

        <div className="services-box">
            <div className="services-box__item">
                <img className="services-img" src={serviseIcon1} alt="" />
                <p className="services-text">Разработка мобильных <br /> приложений</p>
                <div className="services-text__box">
                    <p className="text-box__item">iOS</p>
                    <p className="text-box__item">Android</p>
                </div>
            </div>
            <div className="services-box__item">
                <img className="services-img" src={serviseIcon2} alt="" />
                <p className="services-text">Web разработка</p>
                <div className="services-text__box">
                    <p className="text-box__item">Frontend</p>
                    <p className="text-box__item">Backend</p>
                </div>
            </div>
            <div className="services-box__item">
                <img className="services-img" src={serviseIcon3} alt="" />
                <p className="services-text">Проектирование <br /> мобильного приложения</p>
                <div className="services-text__box">
                    <p className="text-box__item">Дизайн</p>
                    <p className="text-box__item">ТЗ</p>
                </div>
            </div>
        </div>
    </div>
</section>


        </>

    )
}