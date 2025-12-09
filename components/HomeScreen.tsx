import React, { useState } from 'react'
import styles from './HomeScreen.module.css';
import startMenuIcon from '@/public/assets/images/windows-7-start.png'
import hoverStartMenuIcon from '@/public/assets/images/windows-7-start-hover.png';
import Image from 'next/image';

const HomeScreen = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className={styles.windowsBackground}>
      <footer>
        <div className="fixed bottom-0 left-0 right-0 h-10 
      bg-gradient-to-b from-[#5fa5d7] to-[#276c9a] 
      shadow-[0_-2px_6px_rgba(0,0,0,0.4)] 
      border-t border-[#0f4f73] flex items-center select-none">

          {/* LEFT: Start Button */}
          <div className="h-full flex items-center px-3">
            {/* <button className="h-10 w-10 rounded-full bg-gradient-to-b 
          from-[#4cb4f6] to-[#0a6ba8] shadow-md
          hover:brightness-110 transition"> */}
              <Image src={ hover ? hoverStartMenuIcon : startMenuIcon} alt="start" className="h-10 w-10 cursor-pointer" onMouseEnter={(() => setHover(true))} onMouseLeave={(() => setHover(false))} />
            {/* </button> */}
          </div>

          {/* MIDDLE: Taskbar Items */}
          <div className="flex-1 h-full flex items-center gap-2 px-2 overflow-x-auto">
            {/* Example task item */}
            {/* <div className="h-9 min-w-[120px] bg-gradient-to-b 
          from-[#d7e9f9] to-[#b7d5ef] rounded-lg shadow 
          border border-[#8fb4d1] px-3 flex items-center text-sm text-black">
              App Window */}
            {/* </div> */}
          </div>

          {/* RIGHT: System Tray */}
          <div className="flex items-center gap-4 text-white px-4 text-sm">

            {/* icons */}
            <div className="flex items-center gap-3">
              <img src="/icons/network.png" className="h-4" alt="" />
              <img src="/icons/sound.png" className="h-4" alt="" />
            </div>

            {/* time + date */}
            <div className="text-right leading-4">
              <div>21:43</div>
              <div className="text-xs">09/12/2025</div>
            </div>
          </div>
        </div>        
        
      </footer>
    </div>
  )
}

export default HomeScreen
