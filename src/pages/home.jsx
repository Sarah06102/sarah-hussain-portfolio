import { Background } from "../components/background"
import { NavBar } from "../components/navbar"


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
            

            {/* Footer */}


        </div>
    )

}