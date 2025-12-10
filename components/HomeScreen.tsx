import React, { useState } from 'react'
import styles from './HomeScreen.module.css';
import startMenuIcon from '@/public/assets/images/windows-7-start.png'
import hoverStartMenuIcon from '@/public/assets/images/windows-7-start-hover.png';
import soundIcon from '@/public/assets/images/sound-icon.png';
import Image from 'next/image';
import TaskBar from './TaskBar';

const HomeScreen = () => {
  const [hover, setHover] = useState(false);
  const [isShowStartMenu, setShowStartMenu] = useState(false);
  return (
    <div className={styles.windowsBackground}>
      <TaskBar isShowStartMenu={isShowStartMenu} setShowStartMenu={setShowStartMenu} />
    </div>
  )
}

export default HomeScreen
