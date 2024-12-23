import { Header } from '../widgets/Header/Header'
import MultiBrand from '../widgets/Multi-brand/Multi-brand'
import Offer from '../widgets/offer/offers'
import { Option } from '../widgets/Option/Option'
import { Rewievs } from '../widgets/Rewievs/Rewievs'
import News from '../widgets/News/News'
import Feedback from '../widgets/fedback/Feedback'
import { Features } from '../widgets/Features/Features'
import { Advantage } from '../widgets/Advantage/Advantage'
import Footer from '../widgets/Footer/Footer'


import styles from './page.module.scss';
import Tariffs from '../widgets/Tariffs/Tariffs'
import { PreviewsMain } from '../widgets/Preview/Preview/Preview'
export default function Home() {
    return (
        <div className={styles.root}>
            <Header/>
            <main className={styles.root__main}>
                <PreviewsMain/>
                <Features/>
                <Offer/>
                <Advantage/>
                <Option/>
                <MultiBrand/>
                <Tariffs/>
                <Rewievs/>
                <News/>
                <Feedback/>
            </main>
            <Footer/>
        </div>
    )
}
