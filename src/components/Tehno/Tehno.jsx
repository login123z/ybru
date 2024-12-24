import './Tehno.scss'
import swiftIcon from '../../assets/img/swift.svg'
import kotlinIcon from '../../assets/img/kotlin.svg'
import xmarineIcon from '../../assets/img/xamarin.svg'

export default function Tehno() {
    return(

        <>
        
<section id='7' className="services">
    <div className="container services-wrapper">
            <h2 className="services-title">Технологии разработки</h2>

        <div className="services-box">
            <div className="services-box__item">
                <img className="services-img" src={swiftIcon} alt="" />
                
            </div>
            <div className="services-box__item">
                <img className="services-img tehno__img" src={kotlinIcon} alt="" />
            </div>
            <div className="services-box__item">
                <img className="services-img" src={xmarineIcon} alt="" />
            </div>
            
        </div>
    </div>
</section>


        </>

    )
}