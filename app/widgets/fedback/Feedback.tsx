import Image from "next/image"
import style from "./feedback.module.scss"
import Button from "@/app/shared/ui/Button/Button"

export default function Feedback(){
    return(
        <section className={style.feedback}>
            <div className={style.feedback__container}>
                <div className={style.feedback__left}>
                    <Image 
                        src="/feedback.png"
                        width={1000}
                        height={640}
                        className={style.feedback__image}
                        alt="FeedBack Image"
                    />
                </div>
                <div className={style.feedback__right}>
                    <h2 className={style.feedback__title}>Связаться с нами</h2>
                    <form action="#" className={style.feedback__form}>
                        <input type="text" className={style.feedback__input} placeholder="Имя"/>
                        <input type="text" className={style.feedback__input} placeholder="Почта"/>
                        <input type="text" className={style.feedback__input} placeholder="Номер"/>
                        <div className={style.feedback__checkboxContainer}>
                            <input type="checkbox" id="checkbox" className={style.feedback__checkbox}/>
                            <label htmlFor="checkbox" className={style.feedback__label}>Я принимаю условия пользовательского соглашения</label>
                        </div>
                        <Button title="Отправить"/>
                    </form>
                </div>
            </div>
        </section>
    )
}