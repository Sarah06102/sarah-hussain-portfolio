import { Background } from "../components/background"
import { Footer } from "../components/footer"
import { NavBar } from "../components/navbar"
import { About } from "./about"
import { Projects } from "./projects"
import { Skills } from "./skills"
import { Mail, Github, Linkedin } from 'lucide-react';
import { useEffect, useRef } from 'react'
import Chatbot from "../components/Chatbot"
import Experience from "./experience"

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
            <main id="Home" className="min-h-screen flex flex-col items-center justify-center px-4 pt-24 md:pt-24 transition-all">
                
                <div className="container max-w-4xl mx-auto text-center">
                    <div className="space-y-6 px-2 sm:px-6">
                        <h1 className="text-4xl md:text-5xl sm:text-4xl font-bold fade-in-start">
                            <span >Hi, I'm </span>
                            <span className="text-indigo-500">Sarah Hussain</span>
                        </h1>
                        <div className="container space-y-5 text-lg fade-in-start sm:text-lg">
                            <p>Engineering Student @ the University of Waterloo</p>
                            <p>I'm passionate about developing practical and tech-powered solutions, from data-driven tools to full-stack applications, to solve complex business problems. </p>
                        </div>
                    </div>
                </div>
            </main>
            {/* Social Icons */}
            <div className="flex gap-6 md:-mt-55 justify-center fade-in-start">
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

            {/* Chatbot */}
            <Chatbot />
            
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

            {/* Experience */}
            <div className="fade-in-start">
                <Experience />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )

}