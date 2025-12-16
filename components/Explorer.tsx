import React from 'react'

const Explorer = ({setIsShowFileExplorer} : any) => {
    return (
        <div>
            <div className="window active">
                <div className="title-bar">
                    <div className="title-bar-text">A window with contents</div>
                    <div className="title-bar-controls">
                        <button aria-label="Minimize"></button>
                        <button aria-label="Maximize"></button>
                        <button aria-label="Close" onClick={() => setIsShowFileExplorer(false)}></button>
                    </div>
                </div>
                <div className="window-body has-space" style={{ height: 'calc(100vh - 80px)'}}>
                    <p>There's so much room for activities!</p>
                </div>
            </div>
        </div>
    )
}

export default Explorer
