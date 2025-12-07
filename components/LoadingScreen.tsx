import React from 'react';
import bootImage from '@/public/assets/images/win7-boot-anim.gif';
// import bootVideo from '@/public/assets/videos/win7-boot-anim.mp4';
import Image from 'next/image';
import { useGlobal } from '@/app/context/GlobalContext';
import styles from './LoadingScreen.module.css';
const LoadingScreen = () => {
    const { state, setState } = useGlobal();

    const handleVideoEnd = () => {
        setState('isLoading', false);
        setState('isShowLoginScreen', true);
    }
  return (
    <div className="flex flex-col items-center justify-between h-screen w-full bg-black text-white-700 text-xl">
        <div className="flex items-center justify-center flex-1">
            <div>
                <video src="/assets/videos/win7-boot-anim.mp4" width={250} height={250} autoPlay muted playsInline onEnded={handleVideoEnd}></video>
                <p className={`flex items-center justify-center ${styles.fadeIn}`}>Starting Portfolio</p>
                {/* <p className="ml-3">Software Developer</p> */}
            </div>
        </div>
        <div className="w-full pb-8">
            <p className={`flex items-center justify-center text-xs text-gray-400 ${styles.fadeIn}`}>For the best expirience</p>
            <p className={`flex items-center justify-center text-xs text-gray-400 ${styles.fadeIn}`}>Enter the full screen (F11)</p>
        </div>
    </div>
  )
}

export default LoadingScreen
