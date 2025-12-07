import React from 'react'
import Image from 'next/image'
import loginImage from '@/public/assets/images/windows-bg.jpg';
import styles from './LoginScreen.module.css';
const LoginScreen = () => {
  return (
    <div className={styles.windowsBackground}>
      {/* <Image src={loginImage} alt="Login Screen" /> */}
    </div>
  )
}

export default LoginScreen
