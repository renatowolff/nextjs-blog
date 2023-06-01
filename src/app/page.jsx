import Image from "next/image";
import Hero from "public/hero.png";
import Button from "../components/Button/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Se leu é viado.</h1>
        <p className={styles.description}>alert que é o bom.</p>
        <Button url="/portfolio" text="See Our Works" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="Hero" className={styles.img} />
      </div>
    </div>
  );
}
