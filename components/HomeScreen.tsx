import React, { useState, useRef, useEffect } from 'react'
import styles from './HomeScreen.module.css';
import startMenuIcon from '@/public/assets/images/windows-7-start.png'
import hoverStartMenuIcon from '@/public/assets/images/windows-7-start-hover.png';
import soundIcon from '@/public/assets/images/sound-icon.png';
import Image from 'next/image';
import TaskBar from './TaskBar';

const HomeScreen = () => {
  const [hover, setHover] = useState(false);
  const [isShowStartMenu, setShowStartMenu] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const taskbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside the taskbar
      if (taskbarRef.current && !taskbarRef.current.contains(event.target as Node)) {
        setShowStartMenu(false);
      }
    };

    if (isShowStartMenu) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isShowStartMenu]);

  return (
    <div className={styles.windowsBackground} ref={containerRef}>
      <div ref={taskbarRef}>
        <TaskBar isShowStartMenu={isShowStartMenu} setShowStartMenu={setShowStartMenu} />
      </div>
    </div>
  )
}

export default HomeScreen
