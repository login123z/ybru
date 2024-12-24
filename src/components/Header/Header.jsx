import logo from '../../assets/logotipe.svg'
import NavBar from '../NavBar/NavBar'
import BurgerBtn from '../BurgerBtn/burgerBtn'


import './Header.scss'

export default function Header() {
    
    return (
            <header className='header'>
                <img className='header__logo' src={logo} alt="" />
        
                <NavBar/>

                <BurgerBtn/>
            </header>
    )
    
}