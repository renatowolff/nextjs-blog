"use client";

import Modal from "@/components/modal/Modal";
import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

const links = [
  {
    id: 1,
    title: "Início",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "Sobre Nós",
    url: "/about",
  },
  {
    id: 5,
    title: "Contato",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((showModal) => !showModal);
  };

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        home
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
      </div>
      <button className={styles.logout} onClick={() => openModal()}>
        Login
      </button>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        openModal={() => openModal()}
      />
    </div>
  );
};

export default Navbar;
