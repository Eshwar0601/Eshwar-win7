import React from 'react'
import dynamic from 'next/dynamic'
import { PDFViewer } from './PDFViewer'



const Explorer = ({setIsShowFileExplorer, dialogConfig, setDialogConfig, listOfWindowsOpened, setListOfWindowsOpened} : any) => {
    const pdfPath : any = "public/assets/pdf/Eshwar_Esarapu.pdf"

    const closeExplorer = () => {
        setDialogConfig({
            name : "",
            src: ""
        });
        setListOfWindowsOpened((data : any) => data.filter((item : any) => String(item['name']) !== String(dialogConfig['name'])))
        setIsShowFileExplorer(false);
    }

    const minimizeWindow = () => {
        setIsShowFileExplorer(false);
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
                    {dialogConfig.name === "Resume" &&(<PDFViewer />)}
                </div>
            </div>
        </div>
    )
}

export default Explorer
