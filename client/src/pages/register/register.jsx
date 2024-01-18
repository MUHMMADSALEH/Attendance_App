import React from "react";
import styles from "./register.module.css";
const register = () => {
  return (
    <div className={styles.container}>
      <h1>Registration Page</h1>
      <div className={styles.subContainer}>
        <input
          className={styles.input}
          type="text"
          placeholder="Username...."
        />
        <input
          className={styles.input}
          type="password"
          placeholder="password...."
        />
        <input className={styles.input} type="email" placeholder="email..." />
        <input
          className={styles.input}
          type="number"
          placeholder="Enter number...."
        />

        <div className={styles.buttons}>
          <button className={styles.btn}>Login</button>
          <button className={styles.btn}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default register;
