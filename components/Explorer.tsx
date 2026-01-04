import React from 'react'
import dynamic from 'next/dynamic'
import { PDFViewer } from './PDFViewer'



const Explorer = ({desktopIcons, windowConfig, setDesktopIcons, setListOfWindowsOpened} : any) => {
    const pdfPath : any = "public/assets/pdf/Eshwar_Esarapu.pdf"

    const closeExplorer = () => {
        // setDialogConfig({
        //     name : "",
        //     src: ""
        // });
        // setListOfWindowsOpened((data : any) => data.filter((item : any) => String(item['name']) !== String(dialogConfig['name'])));
        setDesktopIcons((prevData : any) => prevData.map((singleIcon : any) => singleIcon['name'] === windowConfig['name'] ? {...singleIcon, isShowExplorer: false} : singleIcon));
        setListOfWindowsOpened((prevData :any) => prevData.filter((singleIcon : any) => singleIcon['name'] !== windowConfig['name']));
        // const curentWindowIndex : any = desktopIcons.findIndex((singleItem : any) => singleItem['name'] === windowConfig['name']);
        // if(curentWindowIndex !== -1) {
        //     desktopIcons[curentWindowIndex].isShowExplorer = false;
        // }
    }

    const minimizeWindow = () => {
        // const curentWindowIndex : any = desktopIcons.findIndex((singleItem : any) => singleItem['name'] === windowConfig['name']);
        // if(curentWindowIndex !== -1) {
        //     desktopIcons[curentWindowIndex].isShowExplorer = false;
        // }
        setDesktopIcons((prevData : any) => prevData.map((singleIcon : any) => singleIcon['name'] === windowConfig['name'] ? {...singleIcon, isShowExplorer: false} : singleIcon))

    }
    return (
        <div>
            <div className="window active">
                <div className="title-bar">
                    <div className="title-bar-text">A window with contents</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize" onClick={() => minimizeWindow()}></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close" onClick={() => closeExplorer()}></button>
                    </div>
                </div>
                <div className="window-body has-space" style={{ height: 'calc(100vh - 80px)'}}>
                    <windowConfig.component/>
                </div>
            </div>
        </div>
    )
}

export default Explorer
