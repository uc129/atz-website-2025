'use client'


import { useEffect, createContext, useContext, useState } from 'react'


const WindowSizeContext = createContext({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: true,
    isExtraLargeDesktop: false
})


export const useWindowSize = () => {
    return useContext(WindowSizeContext)
}


export const WindowSizeProvider = ({ children }: { children: React.ReactNode }) => {


    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    })

    const handleResize = () => {
        console.log('resizing');
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return (
        <WindowSizeContext.Provider value={{
            isMobile: windowSize.width < 768,
            isTablet: windowSize.width >= 768 && windowSize.width < 1024,
            isDesktop: windowSize.width >= 1024 && windowSize.width < 1280,
            isLargeDesktop: windowSize.width >= 1280 && windowSize.width < 1536,
            isExtraLargeDesktop: windowSize.width >= 1536
        }}>
            {children}
        </WindowSizeContext.Provider>
    )
}
