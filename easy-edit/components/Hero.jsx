import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <div className={styles.container}>
                <img className={styles.bg} src="main-bg.png" />
                <img className={styles.logo} src="logo.png" alt="website logo" />
                <p>Your #1 provider of easy-level edits.</p>
        </div>
    )
}