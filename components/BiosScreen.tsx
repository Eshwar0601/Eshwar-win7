"use Client";

import React, { useState } from 'react'
import { useGlobal } from "@/app/context/GlobalContext";

const BiosScreen = () => {
    const { state, setState, getState } = useGlobal();
    const biosListOfText : any = [
        "BIOS Version 1.1.0",
        "Copyright (C) 2025",
        "",
        "System Memory:     16384 KB",
        "Extended Memory:   1048576 KB",
        "",
        "Checking IDE Bus...",
        "Primary IDE Channel  [DETECTED]",
        "",
        "Initializing CPU...",
        "Intel(R) Core(TM) i7-8700K CPU @ 3.70GHz",
        "",
        "Initializing Memory Controller...",
        "Memory Test: PASSED",
        "",
        "Initializing Keyboard...",
        "Keyboard Controller [DETECTED]",
        "",
        "Detecting USB Devices...",
        "USB Device #1: [DETECTED]",
        "USB Device #2: [DETECTED]",
        "Detecting SATA Devices...",
        "SATA Port 0: Samsung SSD 970 EVO [DETECTED]",
        "SATA Port 1: No Device",
        "SATA Port 2: No Device",
        "SATA Port 3: No Device",
        "Loading Chipset Drivers...",
        "Chipset Driver: Initialized",
        "Loading Network Controller...",
        "Network Controller: Intel I219-V [DETECTED]",
        "PXE Boot: Disabled",
        "Loading Audio Controller...",
        "Audio Controller: Realtek ALC892 [DETECTED]",
        "Loading Graphics Adapter...",
        "Graphics Adapter: NVIDIA GeForce GTX 1080 [DETECTED]",
        "Checking System Fan...",
        "System Fan: OK",
        "Checking CPU Fan...",
        "CPU Fan: OK",
        "Checking Power Supply...",
        "Power Supply: OK",
        "Checking CMOS Battery...",
        "CMOS Battery: OK",
        "Loading PCI Devices...",
        "PCI Device #1: [DETECTED]",
        "PCI Device #2: [DETECTED]",
        "Initializing USB Controllers...",
        "USB Controller #1: OK",
        "USB Controller #2: OK",
        "Loading Storage Controller...",
        "Storage Controller: AHCI Mode",
        "Detecting Bluetooth Module...",
        "Bluetooth Module: [NOT PRESENT]",
        "Detecting Wi-Fi Module...",
        "Wi-Fi Module: Intel Wireless-AC 9560 [DETECTED]",
        "Checking Real-Time Clock...",
        "Real-Time Clock: OK",
        "Loading System Configuration...",
        "System Configuration: Loaded",
        "Verifying DMI Pool Data...",
        "DMI Pool Data: Verified",
        "Boot Device Priority: Set",
        "POST Completed - No Errors Detected",
        "Loading Portfolio..."
    ]
    const [listOfBIOSTextToShow , setListOfBiosTextToShow] = useState<string[]>([]);
    const[setTimeOutTimer, SetSetTimeoutTimer] = useState(500);
    // Use useEffect for timer logic
    React.useEffect(() => {
        if(listOfBIOSTextToShow.length === biosListOfText.length) {   
            setState('isShowBiosScreen', false);
            setState('isLoading', true);
        } else {
            const timer = setTimeout(() => {
                setListOfBiosTextToShow(prev => [
                    ...prev,
                    biosListOfText[prev.length]
                ]);
                if (listOfBIOSTextToShow.length === 5) {
                    SetSetTimeoutTimer(250);
                } else if (listOfBIOSTextToShow.length === 18) {
                    SetSetTimeoutTimer(50);
                } else if(listOfBIOSTextToShow.length === biosListOfText.length - 2) {
                    SetSetTimeoutTimer(2000);
                }
            }, setTimeOutTimer);
            return () => clearTimeout(timer);
        } 
    }, [listOfBIOSTextToShow, setTimeOutTimer]);
    // Ref for auto-scroll
    const scrollRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [listOfBIOSTextToShow]);

    return (
        <div className="w-full h-screen bg-black text-white-500 font-mono text-sm p-4" style={{fontFamily: 'Courier New, monospace'}}>
            <div
                ref={scrollRef}
                className="space-y-1 leading-relaxed h-full overflow-hidden"
                style={{
                    maxHeight: '100%',
                    overflowY: 'scroll',
                    scrollbarWidth: 'none', // Firefox
                    msOverflowStyle: 'none', // IE 10+
                }}
            >
                <style>{`
                    .space-y-1::-webkit-scrollbar { display: none; }
                `}</style>
                {listOfBIOSTextToShow.map((item: any, index: any) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
        </div>
    );
}

export default BiosScreen
