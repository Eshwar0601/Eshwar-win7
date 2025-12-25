import React, { useState, useRef, useEffect } from 'react'
import styles from './HomeScreen.module.css';
import startMenuIcon from '@/public/assets/images/windows-7-start.png'
import hoverStartMenuIcon from '@/public/assets/images/windows-7-start-hover.png';
import soundIcon from '@/public/assets/images/sound-icon.png';
import Image from 'next/image';
import TaskBar from './TaskBar';
import PDFIcon from '@/public/assets/images/pdf.png';
import MailIcon from '@/public/assets/images/email-icon.png';
import intnetExplorerImage from '@/public/assets/images/internet-explorer.png';
import myComputerIcon from '@/public/assets/images/my-computer.png';
import Explorer from './Explorer';
import LoaderDialog from './LoaderDialog';

const HomeScreen = () => {
  const [hover, setHover] = useState(false);
  const [isShowStartMenu, setShowStartMenu] = useState(false);
  const [isShowFileExplorer, setIsShowFileExplorer] = useState(false);
  const [isShowLoader, setShowLoader] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const taskbarRef = useRef<HTMLDivElement>(null);
  const [dialogConfig, setDialogConfig] : any= useState({
    type: "",
    content: ""
  })

  useEffect(() => {
    setShowLoader(true);
  }, [])

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

  const desktopIcons = [
    {
      name: "About Me",
      src: myComputerIcon,
    },
    {
      name: "Resume",
      src: PDFIcon,
    },
    {
      name: "Contact Me",
      src: MailIcon,
    },
    {
      name: "My Projects",
      src: intnetExplorerImage,
    },
  ];


  const openFileExplorer = (icon : any) : any  => {
    if(icon.name === 'Resume') {
      setDialogConfig({
        type : "PDF",
        content: ""
      })
    }
    setIsShowFileExplorer(true);
  }

  return (
    <div className={styles.windowsBackground} ref={containerRef}>
      <div ref={taskbarRef}>
        <div className="absolute top-4 left-4 flex flex-col gap-4 select-none">
          {desktopIcons.map((icon : any, index : any) => (
            <div
              key={index}
              // className={!hover ? "group flex flex-col items-center cursor-pointer w-20" : "group flex flex-col items-center cursor-pointer w-20 desktop-icon rounded-md group-hover:opacity-100 transition-opacity bg-gradient-to-b from-[#7eb6f6cc] to-[#4a84dacc] border border-[#9fc3f7]/40 "}
              className={`group flex flex-col items-center cursor-pointer w-25 h-25 ${styles.desktopIcon}`}
              onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
              onDoubleClick={() => openFileExplorer(icon)}
            >
              <Image width={52} height={52} src={icon.src} alt={icon.name} />
                <span
                  className="text-white text-sm text-center mt-1 px-1"
                >
                  {icon.name}
                </span>
            </div>
          ))}

        </div>
        <TaskBar isShowStartMenu={isShowStartMenu} setShowStartMenu={setShowStartMenu} />
      </div>
      {isShowFileExplorer && <Explorer setIsShowFileExplorer={setIsShowFileExplorer} dialogConfig={dialogConfig} setDialogConfig={setDialogConfig} />}
      {isShowLoader && <LoaderDialog setShowLoader={setShowLoader} />}
    </div>
  )
}

export default HomeScreen
