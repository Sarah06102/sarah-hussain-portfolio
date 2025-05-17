import { useState, useEffect } from 'react'
import { ToggleBtn } from './togglebtn';
import { Menu, X } from 'lucide-react'; 

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMainOpen, setMainOpen] = useState(false);
    const navItems = [
        {name: "Home", href: "#Home"},
        {name: "About", href: "#About"},
        {name: "Skills", href: "#Skills"},
        {name: "Projects", href: "#Projects"},
    ];
    const resumeLink = { name: "Resume", href: "/sarah-hussain-resume.pdf", download: true };


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => { window.removeEventListener('scroll', handleScroll); 
        };
    }, []);
    
    return (
        <nav className={`fixed pr-10 w-full transition-all duration-300 border-b border-neutral-700/30 ${ isScrolled ? 'py-3 bg-background/80 backdrop-blur-lg shadow-xs' : 'py-5'}`}>
            <div className = "flex justify-between items-center px-6 pr-22 pt-1">
                {/* Logo */}
                <a className="font-bold text-2xl flex text-primary items-center gap-1 animate-fade-in" href="#Home">
                    <span className="text-glow text-foreground"> Sarah Hussain </span>
                    <span className="text-indigo-400">Portfolio</span>
                </a>
                {/* Nav Links + Toggle */}
                <div className="flex items-center gap-6">
                    <div className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className="text-foreground/80 hover:text-indigo-400 transition-colors duration-50" >
                                {item.name}
                            </a>
                        ))}
                            <a href={resumeLink.href} download={resumeLink.download} className="bg-indigo-300 text-black text-sm px-4 py-2 rounded hover:bg-indigo-400 transition">
                                {resumeLink.name}
                            </a>
                    </div> 
                    <div className="flex items-center gap-2 ml-4"> 
                        <ToggleBtn />
                    </div>

                    {/* Menu Toggle on Mobile */} 
                    <a href={resumeLink.href} download={resumeLink.download} className="absolute top-5.5 right-20 bg-indigo-300 text-black text-sm px-4 py-2 rounded hover:bg-indigo-400 transition md:hidden" onClick={() => setMainOpen(false)}>
                        {resumeLink.name}
                    </a>
                    <button id="menu" className="md:hidden p-1 text-foreground z-50" onClick={() => setMainOpen((prev) => !prev)} aria-label={isMainOpen ? "Close Menu" : "Open Menu"}>
                        {isMainOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
                    
                {/* Mobile overlay menu */}
                <div className={`fixed inset-0 bg-background/80 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 ${isMainOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <div className="flex flex-col space-y-8 items-center text-xl">
                        {navItems.map((item, key) => (
                            <a key={key} href={item.href} className="text-foreground/80 hover:text-indigo-400 transition-colors duration-50" onClick={() => setMainOpen(false)}>
                                {item.name}
                            </a>
                        ))}
                        <ToggleBtn />
                    </div>
                </div>
    </nav>
  );
};