import { Background } from "../components/background"
import { NavBar } from "../components/navbar"
import { About } from "./about"
import { Projects } from "./projects"
import { Skills } from "./skills"
import { Mail, Github, Linkedin } from 'lucide-react';
import { useEffect, useRef } from 'react'

export const ScrollFade = () => {
    const lastScrollY = useRef(window.scrollY);
    useEffect(() => {
        const elements = document.querySelectorAll('.fade-in-start');

        const observer = new IntersectionObserver((entries) => {
            const direction = window.scrollY > lastScrollY.current ? 'down' : 'up';
            lastScrollY.current = window.scrollY;

            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(direction ? 'fade-in-up' : 'fade-in-down');
                    entry.target.classList.remove(direction ? 'fade-in-down' : 'fade-in-up');
                } else {
                    entry.target.classList.remove('fade-in-up', 'fade-in-down');
                }
            });
          }, {
            threshold: 0.1
    });
        elements.forEach(el => observer.observe(el));   
        return () => observer.disconnect();
    }, [])
    return null; 
};

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Navigation Bar & Toggle */}
            <NavBar />

            {/* Background */}
            <Background />

            <ScrollFade />
            {/* Main */}
            <main id="Home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 transition-all">
                
            <div className="container max-w-4xl mx-auto text-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold fade-in-start">
                            <span >Hi, I'm </span>
                            <span>Sarah Hussain</span>
                        </h1>
                        <div className="container space-y-5 text-lg fade-in-start">
                            <p>Engineering Student @ the University of Waterloo</p>
                            <p>I'm passionate about developing practical and tech-powered solutions, from data-driven tools to full-stack applications, to solve complex business problems. </p>
                        </div>
                    </div>
                </div>
            </main>
            {/* Social Icons */}
            <div className="flex gap-6 -mt-60 justify-center fade-in-start">
                <a href="https://www.linkedin.com/in/sarah-hussain01/" target="_blank" className="p-2 rounded-full transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(129,140,248,1)]" rel="noopener noreferrer">
                    <Linkedin size={24}/>
                </a>
                <a href="https://github.com/Sarah06102" target="_blank" className="p-2 rounded-full transition-all duration-300 hover:bg-gray-500 hover:shadow-[0_0_20px_rgba(129,140,248,1)]" rel="noopener noreferrer">
                    <Github size={24}/>
                </a>
                <a href="mailto:sarah.hra06@gmail.com" target="_blank" className="p-2 rounded-full transition-all duration-300 hover:bg-green-500 hover:shadow-[0_0_20px_rgba(129,140,248,1)]" rel="noopener noreferrer">
                    <Mail size={24}/>
                </a>
            </div>

            {/* About */}
            <div className="fade-in-start">
                <About />
            </div>
            {/* Skills */}
            <div className="fade-in-start">
            <Skills />
            </div>
            {/* Projects */}
            <div className="fade-in-start">
                <Projects />  
            </div>
            {/* Footer */}
        </div>
    )

}