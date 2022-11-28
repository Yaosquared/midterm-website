import Button from "./Button";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
      <div className={styles.container}>
        <div className={styles.actions}>
        <Button variant="primary">Home</Button>
        <Button variant="primary">Team</Button>
        <Button variant="primary">Works</Button>
        <Button variant="primary">Services</Button>
        <Button variant="primary">Contact</Button>
      </div>
      </div>
    );
  }