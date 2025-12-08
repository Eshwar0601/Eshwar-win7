"use Client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import loginImage from '@/public/assets/images/windows-bg.jpg';
import styles from './LoginScreen.module.css';
import floweImg from '@/public/assets/images/flower.png';
import windowsLogo from '@/public/assets/images/windows-7-logo.png'
import shutDownButton from '@/public/assets/images/shutdown.png';
import { useGlobal } from "@/app/context/GlobalContext";
import HomeScreen from './HomeScreen';
const LoginScreen = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { state, setState, getState } = useGlobal();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const restart = () => {
    setState('isShowBiosScreen', true);
    setState('isLoading', false);
    setState('isShowLoginScreen', false);
  }

  const login = () => {
    setTimeout(() => {
      const audio = new Audio('/assets/audio/windows-7-startup.mp3');
      audio.loop = false;
      audio.play().catch(error => {
          console.error("Audio playback failed:", error);
      });
    }, 400)
    setIsLoggedIn(true);
  }

  return (
    <div className={styles.windowsBackground}>
      {!isLoggedIn && (<div className='flex flex-col justify-between h-screen'>
        {/* Center content */}
        <div className='flex items-center justify-center flex-1'>
          <div className='flex flex-col items-center justify-center'>
            <div className={styles.glassImage} onClick={login}>
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
            <div className='relative'>
                <button 
                  className='mt-5 hover:opacity-80 transition-opacity'
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <Image src={shutDownButton} alt='shutdown' />
                </button>
                
                {/* Dropdown Menu */}
                {showMenu && (
                  <div className='absolute bottom-full right-0 mb-2 bg-white border-2 border-gray-400 rounded shadow-lg w-32 z-50'>
                    <button
                      className='w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white transition-colors border-b border-gray-300'
                      onClick={() => {
                        restart();
                        setShowMenu(false);
                      }}
                    >
                      Shut down
                    </button>
                    <button
                      className='w-full text-left px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white transition-colors'
                      onClick={() => {
                        restart();
                        setShowMenu(false);
                      }}
                    >
                      Restart
                    </button>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>)}
      {isLoggedIn && (<HomeScreen />)}
    </div>
  )
}

export default LoginScreen
