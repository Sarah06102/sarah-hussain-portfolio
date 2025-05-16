import { useEffect, useRef } from 'react'

export const Background = () => {
    const homeRef = useRef(null);
    useEffect(() => {
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
    
    return (
        <>
            <div ref={homeRef} className="fixed top-0 left-0 w-screen h-screen pointer-events-none -z-10" style={{
                backgroundImage: 'radial-gradient(circle 700px at var(--x, 100px) var(--y, 100px), rgba(129, 140, 248, 0.06) 0%, transparent 100%)',
                backgroundColor: '#121212',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
            </div>
        </>
    )
}