'use client'
import { useContext, createContext, useState, useEffect } from "react"






const ColourModeContext = createContext({
    isDark: false,
    toggleColourMode: () => { }
})

export const useColourMode = () => useContext(ColourModeContext)


export const ColourModeProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDark, setIsDark] = useState(false)

    const toggleColourMode = () => {
        setIsDark(!isDark)
        document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark')
    }

    useEffect(() => {
        let match = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDark(match.matches);

        match.addEventListener('change', (e) => {
            setIsDark(e.matches)
        })

        return () => {
            match.removeEventListener('change', (e) => {
                setIsDark(e.matches)
            })
        }

    }, [])

    return (
        <ColourModeContext.Provider value={{ isDark, toggleColourMode }}>
            {children}
        </ColourModeContext.Provider>
    )
}






