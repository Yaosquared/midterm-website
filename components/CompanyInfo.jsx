import styles from "./CompanyInfo.module.css";

export default function CompanyInfo() {
    return (
        <div className={styles.container}>
            <div className={styles.calendar}>
                <img src="calendar.png" alt="calendar logo" />
                <h2>3</h2>
                <p>Months in business</p>
            </div>
            <div className={styles.worker}>
                <img src="worker.png" alt="office worker logo" />
                <h2>4</h2>
                <p>Editors</p>
            </div>
            <div className={styles.works}>
                <img src="works.png" alt="works logo" />
                <h2>∞</h2>
                <p>Works</p>
            </div>
            <div className={styles.message}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur fugiat quidem laboriosam fuga nostrum voluptate culpa doloremque id saepe voluptates molestias, magni deleniti unde esse deserunt mollitia, laudantium qui dolorem. <br/><br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur fugiat quidem laboriosam fuga nostrum voluptate culpa doloremque id saepe voluptates molestias, magni deleniti unde esse deserunt mollitia, laudantium qui dolorem. Et autem vel maxime minus officiis pariatur voluptatibus quis natus neque distinctio perferendis. <br/><br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam consequuntur fugiat quidem laboriosam fuga</p>
            </div>
        </div>
    )
}