import React from 'react'
import Image from 'next/image'
import loginImage from '@/public/assets/images/windows-bg.jpg';
import styles from './LoginScreen.module.css';
import floweImg from '@/public/assets/images/flower.png';
const LoginScreen = () => {
  return (
    <div className={styles.windowsBackground}>
      {/* <Image src={loginImage} alt="Login Screen" /> */}
      <div className='flex items-center justify-center h-screen'>
        <div className='flex flex-col items-center justify-center'>
            <div className={styles.glassImage}>
            <Image src={floweImg} alt='User' width={100} height={100} />
            </div>
            <p className='text-white text-lg mt-3'>Eshwar</p>
            <p className='text-white text-lg'>Software Developer</p>
            {/* <input type='password' id="login-text-box" name="login-text-box" /> */}
        </div>
        {/* <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-width="2" d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
        </svg> */}
      </div>

    </div>
  )
}

export default LoginScreen
