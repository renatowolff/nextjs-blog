import Image from "next/image";
import styles from "./page.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
    <div>2023©. all rights reserved.</div>
      <div>
        <div className={styles.imgContainer}>
      <Image src="/1.png" alt="Facebook Logo" fill={true} />
        </div>
    </div>
    </div>
  )
}

export default Footer;