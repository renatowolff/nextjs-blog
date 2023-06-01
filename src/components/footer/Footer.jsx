import Image from "next/image";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023©. Nenhum direito reservado.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={35}
          height={35}
          className={styles.icon}
          alt="Facebook Logo"
        />
        <Image
          src="/2.png"
          width={35}
          height={35}
          className={styles.icon}
          alt="Instagram Logo"
        />
        <Image
          src="/3.png"
          width={35}
          height={35}
          className={styles.icon}
          alt="Twitter Logo"
        />
        <Image
          src="/4.png"
          width={35}
          height={35}
          className={styles.icon}
          alt="Youtube Logo"
        />
      </div>
    </div>
  );
};

export default Footer;
