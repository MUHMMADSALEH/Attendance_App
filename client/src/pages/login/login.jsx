import React from 'react'
import styles from "./login.module.css"

const login = () => {
  return (
    <div className={styles.container}>
        <h1>Login Page</h1>
        <div className={styles.subContainer}>
            <input type="text"  placeholder='Username...'  className={styles.input} />  
            <input type="password"  placeholder='password...'   className={styles.input}/>
            <div className={
                styles.buttons
            }>
                <button className={
                    styles.btn
                }>Login</button>
                <button className={
                    styles.btn
                }>Register</button>
            </div>
        </div>
     
    </div>
  )
}

export default login
