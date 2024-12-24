import logo from '../../assets/logotipe.svg'
import './Footer.scss'


export default function Footer() {
    
    return (
            <footer className='footer header'>
                <div className='footer__wrapper'>
                <img className='header__logo' src={logo} alt="" />
        
                
                <p>Защищено правами!</p>
                </div>
            </footer>
    )
    
}