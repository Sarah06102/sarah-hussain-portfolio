import { useEffect, useRef } from 'react'
import useLocalStorage from 'use-local-storage';

export const Background = () => {
    const homeRef = useRef(null);
    const [isDarkTheme] = useLocalStorage("isDarkTheme", false);
    useEffect(() => {

        {/* Save mouse movement and link to gradient */}
        const updateMousePosition = (ev) => {
            if (!homeRef.current) return;
            const {clientX, clientY} = ev;
            console.log(clientX, clientY);
            homeRef.current.style.setProperty('--x', `${clientX}px`);
            homeRef.current.style.setProperty('--y', `${clientY}px`);
        } 
        window.addEventListener('mousemove', updateMousePosition)
        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, []);
    
    const spotlight = {
        backgroundImage: isDarkTheme ? 'radial-gradient(circle 700px at var(--x, 100px) var(--y, 100px), rgba(129, 140, 248, 0.06) 0%, transparent 100%)': 'radial-gradient(circle 700px at var(--x, 100px) var(--y, 100px), rgba(129, 140, 248, 0.25) 0%, transparent 100%)',
        backgroundColor: isDarkTheme ? '#121212': '#ffffff',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', 
    }

    return (
        <>
            <div ref={homeRef} className="fixed top-0 left-0 w-screen h-screen pointer-events-none -z-10" style={spotlight}>
            </div>
        </>
    )
}

