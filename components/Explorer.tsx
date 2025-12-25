import React from 'react'
import dynamic from 'next/dynamic'
import { PDFViewer } from './PDFViewer'



const Explorer = ({setIsShowFileExplorer, dialogConfig, setDialogConfig} : any) => {
    const pdfPath : any = "public/assets/pdf/Eshwar_Esarapu.pdf"

    const closeExplorer = () => {
        setDialogConfig({
            type : "",
            content: ""
        });
        setIsShowFileExplorer(false)
    }
    return (
        <div>
            <div className="window active">
                <div className="title-bar">
                    <div className="title-bar-text">A window with contents</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close" onClick={() => closeExplorer()}></button>
                    </div>
                </div>
                <div className="window-body has-space" style={{ height: 'calc(100vh - 80px)'}}>
                    {dialogConfig.type === "PDF" &&(<PDFViewer />)}
                </div>
            </div>
        </div>
    )
}

export default Explorer
