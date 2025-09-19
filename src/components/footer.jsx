import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return(
        <footer className="py-6 px-8 relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} sarah-hussain-portfolio.vercel.app All rights reserved.</p>
            <a href="#" className="rounded-full bg-indigo-100/30 hover:bg-primary/20 text-indigo-300 transition-colors mr-15"><ArrowUp /></a>
        </footer>
    )
}