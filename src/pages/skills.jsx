import { SiPython, SiJavascript, SiHtml5, SiCss3, SiSqlite, SiTypescript, SiReact, SiTailwindcss, SiDjango, SiGit, SiGithub, SiFigma, SiFirebase, SiPytorch, SiVercel, SiRender } from 'react-icons/si'
import { FaJava } from 'react-icons/fa';
import { BiLogoVisualStudio } from 'react-icons/bi';
import useLocalStorage from 'use-local-storage';


const SkillCard = ({icon, title, color}) => {
    const [isDarkTheme] = useLocalStorage("isDarkTheme", false);
    return (
        <div className={`w-28 h-28 md:w-32 md:h-32 rounded-xl p-4 flex flex-col justify-center items-center text-center scale-transition ${isDarkTheme ? 'dark-card' : 'light-card'}`}>
            <div className={`text-3xl md:text-4xl mb-2`} style={{ color }}>{icon}</div>
            <h3 className="font-semibold text-sm text-center w-full mt-2">{title}</h3>
        </div>
    )
}

export const Skills = () => {
    return (
        <section id="Skills" className="py-24 px-4">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-primary">
                        Skills
                    </span>
                </h2>
                <div className="flex flex-col md:grid-cols-2 text-lg font-medium text-center gap-y-16">
                    
                    <div className="flex flex-col md:flex-row justify-center gap-12 w-full mx-auto">
                        {/* Languages */}
                        <div className="flex flex-col items-center">
                            <h4 className="mb-6 text-xl font-semibold text-center w-full">Languages</h4>
                            <div className="grid grid-cols-3 gap-x-5 gap-y-3 place-items-center w-full mx-auto justify-center">
                                <SkillCard icon={<SiJavascript />} title="Javascript" color="#f7df1e"/>
                                <SkillCard icon={<SiPython />} title="Python" color="#306998"/>
                                <SkillCard icon={<SiHtml5 />} title="HTML" color="#e34c26"/>
                                <SkillCard icon={<SiCss3 />} title="CSS" color="#264de4"/>
                                <SkillCard icon={<SiSqlite />} title="SQL" color="#003b57"/>
                                <SkillCard icon={<SiTypescript />} title="TypeScript" color="#3178c6"/>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            {/* Frameworks & Libraries */}    
                            <h4 className="mb-6 text-xl font-semibold text-center w-full">Frameworks & Libraries</h4>
                            <div className="grid grid-cols-2 gap-x-5 gap-y-3 place-items-center w-full mx-auto justify-center">
                                <SkillCard icon={<SiReact />} title="React" color="#61dafb"/>
                                <SkillCard icon={<SiTailwindcss />} title="Tailwind CSS" color="#38bdf8"/>
                                <SkillCard icon={<SiDjango />} title="Django" color="#092e20"/>
                                <SkillCard icon={<SiFirebase />} title="Firebase" color="#ffcb2b"/>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            {/* Tools */} 
                            <h4 className="mb-6 text-xl font-semibold text-center w-full">Tools</h4>
                            <div className="grid grid-cols-3 gap-x-5 gap-y-3 place-items-center w-full mx-auto justify-center">
                                <SkillCard icon={<SiGit />} title="Git" color="#f05032"/>
                                <SkillCard icon={<SiGithub />} title="GitHub" color="#ffffff"/>
                                <SkillCard icon={<BiLogoVisualStudio />} title="VS Code" color="#007acc"/>
                                <SkillCard icon={<SiFigma />} title="Figma" color="#f24e1e"/>
                                <SkillCard icon={<SiVercel />} title="Vercel" color="#000000"/>
                                <SkillCard icon={<SiRender />} title="Render" color="#000000"/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row justify-center gap-16 w-full max-w-7xl mx-auto">
                        <div className="flex flex-col items-center">
                            {/* Currently Learning */}
                            <h4 className="mb-6 text-xl font-semibold text-center w-full">Currently Learning</h4>
                            <div className="grid grid-cols-2 gap-x-4.5 gap-y-3 place-items-center w-ful mx-auto justify-center">
                                <SkillCard icon={<FaJava />} title="Java" color="#007396"/>
                                <SkillCard icon={<SiPytorch />} title="PyTorch" color="#ee4c2c" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    )
}