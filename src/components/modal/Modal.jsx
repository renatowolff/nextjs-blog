"use client";

import { useEffect, useRef } from "react";
import styles from "./modal.module.css";

const Modal = ({ showModal, setShowModal, openModal }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        openModal(); // Call the close modal function when clicked outside
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openModal]);

  return (
    <>
      {showModal ? (
        <div
          style={{
            background: "#53c28b",
            position: "absolute",
            borderRadius: "8px",
            zIndex: "999",
            marginTop: "800px",
            width: "500px",
            height: "700px",
            marginLeft: "400px",
            opacity: "0.7",
          }}
          ref={modalRef}
        >
          <button
            onClick={() => setShowModal(false)}
            className={styles.closeButton}
          >
            X
          </button>
          <h3>Email</h3>
          <h3>Senha</h3>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
