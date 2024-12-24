
import React, { useState } from 'react'
import burgerMenu from '../../assets/burgerMenu.svg'
import menuOpen from '../../assets/menuOpen.svg'
import './burgerBtn.scss'
import Btn from '../Button/Button'

export default function burgerBtn() {
    const [open, setOpen] = useState(false);

    return (
        <>

            <button className='burgerMenu' onClick={() => setOpen(!open)} > <img src={open ? menuOpen : burgerMenu} alt="" /> </button> 

            {
                open && (
                    <div className='burger__nav'>

                        <ul className='burger__list'>
                            <li className='burger__list-item'><a href="#1">Консультация</a></li>
                            <li className='burger__list-item'><a href="#2">Услуги</a></li>
                            <li className='burger__list-item'><a href="#3">Тарифы</a></li>
                            <li className='burger__list-item'><a href="#4">Задачи</a></li>
                            <li className='burger__list-item'><a href="#5">Заказать приложение</a></li>
                            <li className='burger__list-item'><a href="#6">Контакты</a></li>
                            <li className='burger__list-item'><a href="#7">Технологии</a></li>
                            <li className='burger__list-item'><a href="#8">FAQ</a></li>
                        </ul>

                        <div className='burger__contact'>
                            <p className='burger__contact-text' >menu@ybru.ru</p>
                            <p className='burger__contact-text'>+7 (495) 088-42-02</p>
                        </div>

                        <Btn>Связаться</Btn>

                    </div>
                )
            }

        </>
    )
}