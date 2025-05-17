import { Background } from "../components/background"
import { NavBar } from "../components/navbar"
import { About } from "./about"
import { Projects } from "./projects"
import { Skills } from "./skills"
import { Mail, Github, Linkedin } from 'lucide-react';

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Navigation Bar & Toggle */}
            <NavBar />

            {/* Background */}
            <Background />


            {/* Main */}
            <main id="Home" className="min-h-screen flex flex-col items-center justify-center px-4">
                
            <div className="container max-w-4xl mx-auto text-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold fade-in">
                            <span >Hi, I'm </span>
                            <span>Sarah Hussain</span>
                        </h1>
                        <div className="container space-y-5 text-lg fade-in ">
                            <p>Engineering Student @ the University of Waterloo</p>
                            <p>I'm passionate about developing practical and tech-powered solutions, from data-driven tools to full-stack applications, to solve complex business problems. </p>
                        </div>
                    </div>
                </div>
            </main>
            {/* Social Icons */}
            <div className="flex gap-6 -mt-60 justify-center ">
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
            <About />
            {/* Skills */}
            <Skills />

            {/* Projects */}
            <Projects />

            {/* Footer */}


        </div>
    )

}