import styles from './style.module.scss'
import Logo from '../Logo';
import Menu from '../Menu';
import Contact from '../Contact';
import News from '../News';
import Info from '../Info';

export default function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__menu}>
                    <div className={styles.footer__logo}>
                        <Logo />
                    </div>
                    <div className={styles.footer__list}>
                    <div className={styles.footer__nav}>
                        <Menu />
                    </div>

                    <div className={styles.footer__contact}>
                        <Contact />
                    </div>

                    <div className={styles.footer__news}>
                        <News />
                    </div>
                </div>
                </div>
                <div className={styles.footer__info}>
                    <Info />
                </div>
            </div>
        </footer>
    )
}
 
