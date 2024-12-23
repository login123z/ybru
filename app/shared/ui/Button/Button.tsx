import styles from "./Button.module.scss"

export default function Button(props){
    return(
        <button className={styles.root} style={{maxWidth: props.width}}>
            <span className={styles.root__text}>{props.title}</span>
            <img src="/button_arrow.svg" alt="Button Icon" className={styles.root__icon} />
        </button>
    )
}