import styles from './styles.module.scss'
import Image from 'next/image'
import YesIcon from '../../img/Yes.svg'
import NoIcon from '../../img/No.svg'


export default function Servise(props) {

    const { txt, no } = props;

    return ( 
        <div className={styles.servise}>

            <Image
                src={no ? NoIcon : YesIcon}
                width={20}
                height={20}
                alt=""
                />

            <p>{txt}</p>
            
        </div>
     );
}
 
