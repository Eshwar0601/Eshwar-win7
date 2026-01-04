import React, { useState } from 'react'
import startMenuIcon from '@/public/assets/images/windows-7-start.png'
import hoverStartMenuIcon from '@/public/assets/images/windows-7-start-hover.png';
import soundIcon from '@/public/assets/images/sound-icon.png';
import Image from 'next/image';
import intnetExplorerImage from '@/public/assets/images/internet-explorer.png';
import emailIcon from '@/public/assets/images/email-icon.png';
import myComputerIcon from '@/public/assets/images/my-computer.png';
import gitHubIcon from '@/public/assets/images/github.png';
import linkedIn from '@/public/assets/images/linkedin.png';
import styles from './TaskBar.module.css';

const TaskBar = ({isShowStartMenu, setShowStartMenu, listOfWindowsOpened, setListOfWindowsOpened, setDesktopIcons}: any) => {
    const [hover, setHover] = useState(false);
    const leftSidePrograms : any = [
        { name: "My Projects", icon: intnetExplorerImage },
        { name: "Contact Me", icon: emailIcon },
        { name: "About Me", icon: myComputerIcon },
        { name: "GitHub", icon: gitHubIcon },
        { name: "LinkedIn", icon: linkedIn }
    ]
    const rightSideMenu : any = [
        { name: "My Projects", icon: intnetExplorerImage }
    ]


    const minimizeOrMaximizeWindow : any = (icon :any) =>{
        setListOfWindowsOpened((prevData : any) => prevData.map((singleIcon : any) => singleIcon['name'] === icon['name'] ? {...singleIcon, isShowExplorer : !icon['isShowExplorer']}: singleIcon));
        setDesktopIcons((prevData : any) => prevData.map((singleIcon : any) => singleIcon['name'] === icon['name'] ? {...singleIcon, isShowExplorer : !icon['isShowExplorer']}: singleIcon));
    }
    return (
        <div>
            {isShowStartMenu &&(<div className="
                absolute bottom-10 left-0
                w-[340px] h-[400px]
                bg-gradient-to-b from-[#fdfdfd] to-[#dbe8f3]
                rounded-xl shadow-2xl border border-[#a8c2d6]
                flex overflow-hidden
                animate-fade-in
            ">
                {/* LEFT SECTION */}
                <div className="w-[55%] bg-white/70 px-3 py-2 flex flex-col">

                    {/* <div className="text-gray-700 text-sm mb-2">Programs</div> */}

                    <div className="flex flex-col gap-1 overflow-auto pr-1">
                    {leftSidePrograms.map((item : any, i : any) => (
                        <div
                        key={i}
                        className="flex items-center gap-3 p-1.5 rounded hover:bg-blue-100 cursor-pointer"
                        >
                        <Image src={item.icon} alt="" width={22} height={22} />
                        <span className="text-sm text-gray-800">{item.name}</span>
                        </div>
                    ))}
                    </div>

                
                </div>
                {/* RIGHT SECTION */}
                <div
                    className="w-[45%] bg-gradient-to-b from-[#5fa5d7] to-[#276c9a] 
                    shadow-[0_-2px_6px_rgba(0,0,0,0.4)] 
                    border-t border-[#0f4f73]
                    px-4 py-4 text-sm text-white border-l border-white/40 flex flex-col"
                >
                    <div className="flex flex-col gap-2 mb-3">
                    {[
                        "Documents",
                        "Pictures",
                        "Music",
                        "Computer",
                        "Control Panel",
                        "Default Programs",
                        "Help and Support",
                    ].map((item, i) => (
                        <div
                        key={i}
                        className="hover:bg-white/20 px-2 py-1 rounded cursor-pointer"
                        >
                        {item}
                        </div>
                    ))}
                    </div>

                    {/* Shutdown Button */}
                    <div className="mt-auto">
                    <button
                        className="ms-0 w-[100%]"
                    >
                        Shut down ▼
                    </button>
                    </div>
                </div>
            </div>)}
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
                        <Image onClick={() => setShowStartMenu(!isShowStartMenu)} src={hover ? hoverStartMenuIcon : startMenuIcon} alt="start" className="h-10 w-10 cursor-pointer" onMouseEnter={(() => setHover(true))} onMouseLeave={(() => setHover(false))}/>
                        {/* </button> */}
                    </div>

                    {/* MIDDLE: Taskbar Items */}
                    <div className="flex-1 h-full flex items-center gap-2 px-2 overflow-x-auto">
                        {/* Example task item */}
                        {/* middle section */}
                        <div className="flex flex-row gap-1">
                            {
                                listOfWindowsOpened.map((icon :any, index : any) => (
                                    // <div className='bg-black text-white'>{index}</div>
                                    <div
                                        className={`items-center cursor-pointer px-4 py-1 ${styles.desktopIcon}`}
                                        onClick={() => minimizeOrMaximizeWindow(icon)}
                                        key={index}
                                        >
                                        <Image width={23} height={25} src={icon.src} alt={icon.name} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* RIGHT: System Tray */}
                    <div className="flex items-center gap-4 text-white px-4 text-sm">

                        {/* icons */}
                        {/* <div className="flex items-center gap-3">
              <img src="/icons/network.png" className="h-4" alt="" />
              <Image src={soundIcon} className="h-3 w-3" alt="sound" />
            </div> */}

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

export default TaskBar
