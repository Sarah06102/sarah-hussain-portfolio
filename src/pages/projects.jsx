import useLocalStorage from 'use-local-storage';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ProjectData = [
    {
        name: `TrackMyApps`,
        description: `A Chrome extension that allows users to save job postings from platforms like LinkedIn directly to a personalized dashboard. With one click, users can capture job details and sync them to a real-time web app powered by Firebase. Built to simplify job tracking, reduce tab clutter, and help users stay organized throughout their job search.`,
        skills: ["React", "Firebase", "Chrome API", "HTML", "Tailwind CSS"],
        github: `https://github.com/Sarah06102/TrackMyApps`,
    },
    {
        name: `AutoTrack`,
        status: `(in progress)`,
        description: `A web-based expense tracker that helps users automate their spending logs, set budgets, and visualize financial habits. AutoTrack syncs in real time and offers personalized alerts, budget insights, and a clean, user-friendly interface to simplify money management and encourage smarter financial decisions.`,
        skills: ["HTML", "CSS", "Django", "React"],
        // github:
    },
]

export const Projects = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
                <div className={`relative w-full max-w-6xl mx-auto mt-10 ${isDarkTheme ? 'dark-slider' : 'light-slider'}`}>
                    <Slider {...settings}>
                    {ProjectData.map((p, i) => (
                        <div key={i}>
                            <div className={`min-w-[280px] max-w-[90vw] h-[500px] rounded-xl p-10 m-2 card-transform hover:shadow-lg ${isDarkTheme ? 'dark-card' : 'light-card'}`}>
                                <div className="flex flex-col justify-between items-center h-full gap-4 p-3">
                                    <p className="text-xl font-bold mt-2 underline text-center">{p.name}</p>
                                    <p className="text-sm text-center break-words max-w-[260px]">{p.status}</p>
                                    <p className="text-sm text-center break-words max-w-[350px]">{p.description}</p>
                                    
                                   
                                    {/* Skills */}
                                <div className="flex flex-wrap justify-center gap-2 md:mb-6">
                                    {p.skills?.map((skill, index) => (
                                    <span key={index} className="px-3 py-1 text-sm rounded-full bg-transparent border font-medium hover:text-indigo-300">
                                        {skill}
                                    </span>
                                    ))}

                                    {/* Github Link */}
                                </div>
                                    <a className="format hover:text-indigo-400 text-center hover:underline text-primary md:mt-2 md:-mb-4" href={p.github || '#'} target="_blank" rel="noopener noreferrer">GitHub</a>
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
