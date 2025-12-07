import React from 'react'
import Image from 'next/image'
import loginImage from '@/public/assets/images/windows-bg.jpg';
import styles from './LoginScreen.module.css';
import floweImg from '@/public/assets/images/flower.png';
import windowsLogo from '@/public/assets/images/windows-7-logo.png'
import shutDownButton from '@/public/assets/images/shutdown.png';
const LoginScreen = () => {
  return (
    <div className={styles.windowsBackground}>
      <div className='flex flex-col justify-between h-screen'>
        {/* Center content */}
        <div className='flex items-center justify-center flex-1'>
          <div className='flex flex-col items-center justify-center'>
            <div className={styles.glassImage}>
              <Image src={floweImg} alt='User' width={100} height={100} />
            </div>
            <p className='text-white text-lg mt-3'>Eshwar</p>
            <p className='text-white text-lg'>Software Developer</p>
          </div>
        </div>

        {/* Bottom section with buttons and other elements */}
        <div className='flex flex-col gap-4 pb-4 px-4'>
          <div className='flex justify-between'>
            <div></div>
            <div className='flex'>
                <Image src={windowsLogo} alt='windows7' height={40} width={55}/> <p className={styles.titleFont}> Eshwar </p> <span className={styles.registedFont}>®</span>
            </div>
            <div>
                <Image className="mt-5" src={shutDownButton} alt='shutdown' />
                {/* <button className={styles.powerButton}>power</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
