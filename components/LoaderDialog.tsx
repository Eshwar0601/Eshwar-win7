import React from 'react'

const LoaderDialog = ({setShowLoader} : any) => {
    return (
        <div>
            {/* <a href="#dialog-demo">Open Dialog</a> */}
            <div
                className="window active is-bright w-[40vw]"
                aria-labelledby="dialog-title"
                style={{
                    position: 'fixed',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1000,
                }}
            >
                <div className="title-bar">
                    <div className="title-bar-text" id="dialog-title">Welcome</div>
                    <div className="title-bar-controls">
                        <button aria-label="Close" onClick={() => setShowLoader(false)}></button>
                    </div>
                </div>
                <div className="window-body has-space">
                    <h2 className="instruction instruction-primary mb-0">This portfolio is a work in progress</h2>
                    <p className="instruction-primary mb-5">Hang around, enjoy the preview—big updates coming soon 🚀</p>
                    <div role="progressbar" className="marquee"></div>
                </div>
                <footer style={{textAlign : "right"}}>
                    <button onClick={() => setShowLoader(false)}>close</button>
                </footer>
            </div>
        </div>
    )
}

export default LoaderDialog
