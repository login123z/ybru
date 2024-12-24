import Btn from '../Button/Button'

import './NavBar.scss';

export default function NavBar() {
    return (
        <nav className='menu'>

          <ul className='menu__list'>
                            <li className='burger__list-item'><a href="#1">Консультация</a></li>
                            <li className='burger__list-item'><a href="#2">Услоги</a></li>
                            <li className='burger__list-item'><a href="#3">Тарифы</a></li>
                            <li className='burger__list-item'><a href="#4">Задачи</a></li>
                            <li className='burger__list-item'><a href="#5">Заказать приложение</a></li>
                            <li className='burger__list-item'><a href="#6">Контакты</a></li>
                            <li className='burger__list-item'><a href="#7">Технологии</a></li>
                            <li className='burger__list-item'><a href="#8">FAQ</a></li>
          </ul>

          <Btn>Связаться</Btn>

        </nav>
    );
}
