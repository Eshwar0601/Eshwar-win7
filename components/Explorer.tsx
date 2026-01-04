import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { PDFViewer } from './PDFViewer'

// Module-level z-index counter so windows can be brought to front
let topZ = 1000;



const Explorer = ({desktopIcons, windowConfig, setDesktopIcons, setListOfWindowsOpened} : any) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const closeExplorer = () => {
        setDesktopIcons((prevData : any) => prevData.map((singleIcon : any) => singleIcon['name'] === windowConfig['name'] ? {...singleIcon, isShowExplorer: false} : singleIcon));
        setListOfWindowsOpened((prevData :any) => prevData.filter((singleIcon : any) => singleIcon['name'] !== windowConfig['name']));
    }

    const minimizeWindow = () => {
        setDesktopIcons((prevData : any) => prevData.map((singleIcon : any) => singleIcon['name'] === windowConfig['name'] ? {...singleIcon, isShowExplorer: false} : singleIcon))
    }

    // position & size state
    const [pos, setPos] = useState({ x: 100 + Math.floor(Math.random() * 120), y: 80 + Math.floor(Math.random() * 80) });
    const [size, setSize] = useState({ width: 800, height: 560 });
    const [zIndex, setZIndex] = useState<number>(() => ++topZ);
    const [isMaximized, setIsMaximized] = useState(false);
    const prevBounds = useRef({ x: 0, y: 0, width: 0, height: 0 });

    // dragging state
    const dragging = useRef(false);
    const dragStart = useRef({ mouseX: 0, mouseY: 0, startX: 0, startY: 0 });

    // resizing state
    const resizing = useRef(false);
    const resizeStart = useRef({ mouseX: 0, mouseY: 0, startW: 0, startH: 0 });

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            if (dragging.current) {
                const dx = e.clientX - dragStart.current.mouseX;
                const dy = e.clientY - dragStart.current.mouseY;
                setPos({ x: dragStart.current.startX + dx, y: dragStart.current.startY + dy });
            } else if (resizing.current) {
                const dx = e.clientX - resizeStart.current.mouseX;
                const dy = e.clientY - resizeStart.current.mouseY;
                setSize({ width: Math.max(240, resizeStart.current.startW + dx), height: Math.max(120, resizeStart.current.startH + dy) });
            }
        };

        const onMouseUp = () => {
            dragging.current = false;
            resizing.current = false;
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
        };
    }, []);

    const startDrag = (e: React.MouseEvent) => {
        e.stopPropagation();
        // prevent dragging when maximized
        if (isMaximized) return;
        dragging.current = true;
        dragStart.current = { mouseX: e.clientX, mouseY: e.clientY, startX: pos.x, startY: pos.y };
        // bring to front
        const newZ = ++topZ;
        setZIndex(newZ);
    };

    const startResize = (e: React.MouseEvent) => {
        e.stopPropagation();
        resizing.current = true;
        resizeStart.current = { mouseX: e.clientX, mouseY: e.clientY, startW: size.width, startH: size.height };
        const newZ = ++topZ;
        setZIndex(newZ);
    };

    const onFocus = () => {
        const newZ = ++topZ;
        setZIndex(newZ);
    };

    const toggleMaximize = () => {
        if (!isMaximized) {
            // store previous bounds
            prevBounds.current = { x: pos.x, y: pos.y, width: size.width, height: size.height };
            const topOffset = 2; // leave some room for top UI if needed
            setPos({ x: 8, y: topOffset });
            setSize({ width: Math.max(300, window.innerWidth - 10), height: Math.max(200, window.innerHeight - topOffset - 40) });
            setIsMaximized(true);
        } else {
            // restore
            setPos({ x: prevBounds.current.x, y: prevBounds.current.y });
            setSize({ width: prevBounds.current.width, height: prevBounds.current.height });
            setIsMaximized(false);
        }
        const newZ = ++topZ;
        setZIndex(newZ);
    };

    const Content = windowConfig.component;

    return (
        <div
            ref={containerRef}
            className="window active"
            onMouseDown={onFocus}
            style={{
                position: 'absolute',
                left: pos.x,
                top: pos.y,
                width: size.width,
                height: size.height,
                zIndex,
                boxShadow: '0 8px 24px rgba(0,0,0,0.35)'
            }}
        >
            <div className="title-bar" onMouseDown={startDrag} onDoubleClick={toggleMaximize} style={{ cursor: isMaximized ? 'default' : 'move', userSelect: 'none' }}>
                <div className="title-bar-text">{windowConfig?.title || windowConfig?.name || 'Explorer'}</div>
                <div className="title-bar-controls">
                    <button aria-label="Minimize" onClick={() => minimizeWindow()}></button>
                    <button aria-label="Maximize" onClick={toggleMaximize}></button>
                    <button aria-label="Close" onClick={() => closeExplorer()}></button>
                </div>
            </div>

            <div className="window-body has-space" style={{ height: `calc(100% - 32px)`, overflow: 'auto' }}>
                {Content ? <Content /> : <div>Missing component</div>}
            </div>

            {/* resize handle */}
            <div
                onMouseDown={startResize}
                style={{
                    position: 'absolute',
                    width: 18,
                    height: 18,
                    right: 4,
                    bottom: 4,
                    cursor: 'se-resize',
                    background: 'transparent'
                }}
                aria-hidden
            />
        </div>
    )
}

export default Explorer
