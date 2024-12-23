import styles from './style.module.scss'
import LogoIcon from '../../img/logo.png'
import Image from 'next/image'

export default function Logo() {

    return ( 
        <a href="">
            <Image
                src={LogoIcon}
                width={205}
                height={22}
                alt="Picture of the author"
            />
        </a>
     );
}
 
