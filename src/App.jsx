import {  } from 'react'
import Header from './components/Header/Header'
import Promo from './components/Promo/Promo'
import Servece from './components/Service/Service'
import Tarrifs from './components/Tarrifs/Tarrifs'
import Tascks from './components/Tascks/Tascks'
import Order from './components/Order/Order'
import Tehno from './components/Tehno/Tehno'
import Accordion from './components/Accardion/Accardion'
import Footer from './components/Footer/Footer'

export default function App() {
  
  return (
    <div className="wrapper">

    <Header/>
    <Promo/>
    <Servece/>
    <Tarrifs/>
    <Tascks/>
    <Order/>
    <Tehno/>
    <Accordion/>
    <Footer/>
    </div>
  )
}


