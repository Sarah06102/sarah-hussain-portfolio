import useLocalStorage from 'use-local-storage';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ProjectData = [
    {
        name: `TrackMyApps`,
        description: `A Chrome extension that allows users to save job postings from platforms like LinkedIn directly to a personalized dashboard. With one click, users can capture job details and sync them to a real-time web app powered by Firebase. Built to simplify job tracking, reduce tab clutter, and help users stay organized throughout their job search.`,
        skills: ["React", "Firebase", "Chrome API", "Tailwind CSS"],
        github: `https://github.com/Sarah06102/TrackMyApps`,
        img: '/TrackMyApps.png'
    },
    {
        name: `AutoTrack`,
        status: `(in progress)`,
        description: `A web-based expense tracker that helps users automate their spending logs, set budgets, and visualize financial habits. AutoTrack syncs in real time and offers personalized alerts, budget insights, and a clean, user-friendly interface to simplify money management and encourage smarter financial decisions.`,
        skills: ["HTML", "CSS", "Django", "React"],
        // github:
    },
    {
        name: `MyPassVault`,
        description: `A web-based password manager that simplifies secure credential storage, strong password generation, and password strength validation. MyPassVault offers customizable password rules and a user-friendly interface to help users manage their online accounts confidently and securely.`,
        skills: ["React", "Django", "Tailwind CSS", "RESTful API", "PostgreSQL"],
        github: `https://github.com/Sarah06102/MyPassVault`,
        img: '/MyPassVault.png'
    },
]

export const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
        ]
    };
    const [isDarkTheme] = useLocalStorage("isDarkTheme", false);
    return (
        <section id="Projects" className="py-24 px-4">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    <span className="text-primary">
                        Projects I've Worked On
                    </span>
                </h2>
            </div>

            <div className="w-full px-4 md:px-8">
                <div className={`relative w-full max-w-7xl mx-auto mt-10 ${isDarkTheme ? 'dark-slider' : 'light-slider'}`}>
                    <Slider {...settings}>
                    {ProjectData.map((p, i) => (
                        <div key={i} className="h-[600px] flex flex-col">
                            <div className={`flex min-w-[280px] flex-1 h-full max-w-[90vw] flex-grow justify-between rounded-xl p-5 m-2 card-transform hover:shadow-lg ${isDarkTheme ? 'dark-card' : 'light-card'}`}>
                                <div className="flex-shrink flex flex-col overflow-visible justify-between items-center h-full gap-4 p-3">
                                    <p className="text-xl font-bold underline text-center">{p.name}</p>
                                    {p.img && <img src={p.img} alt={p.name} className="w-full h-[200px] object-cover rounded-lg" />}
                                    <p className="text-sm text-center break-words max-w-[260px]">{p.status}</p>
                                    <p className="text-sm text-center break-words max-w-[500px]">{p.description}</p>
                                    
                                    {/* Skills */}
                                    <div className="flex flex-col flex-grow gap-2">
                                        <div className="flex flex-wrap justify-center gap-2">
                                        {p.skills?.map((skill, index) => (
                                            <span key={index} className="px-2.5 py-1 text-sm rounded-full bg-transparent border font-medium hover:text-indigo-300">
                                                {skill}
                                            </span>
                                        ))}
                                        {/* Github Link */}
                                        </div>
                                        <a className="format hover:text-indigo-400 text-center hover:underline text-primary mt-3" href={p.github || '#'} target="_blank" rel="noopener noreferrer">GitHub</a>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                </div>
            </div>
        </section>  
    );
};
