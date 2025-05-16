import { NavBar } from "../components/navbar"


export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Navigation Bar & Toggle */}
            <NavBar />

            {/* Background */}


            {/* Main */}
            <main id="Home" className="min-h-screen flex flex-col items-center justify-center px-4">
                
            <div className="container max-w-4xl mx-auto text-center">
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            <span >Hi, I'm </span>
                            <span>Sarah Hussain</span>
                        </h1>
                        <p>Engineering Student @ the University of Waterloo</p>
                        <p>With a passion for developing practical and tech-powered solutions, from data-driven tools to full-stack applications, to solve complex business problems. </p>
                    </div>
                </div>
            </main>
            

            {/* Footer */}


        </div>
    )

}