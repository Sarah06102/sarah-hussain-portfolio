{/* Carousel for projects */}

// import useLocalStorage from 'use-local-storage';
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// const ProjectData = [
//     {
//         name: `TrackMyApps`,
//         description: `A Chrome extension that allows users to save job postings from platforms like LinkedIn directly to a personalized dashboard. With one click, users can capture job details and sync them to a real-time web app powered by Firebase. Built to simplify job tracking, reduce tab clutter, and help users stay organized throughout their job search.`,
//         skills: ["React", "Firebase", "Chrome API", "Tailwind CSS"],
//         github: `https://github.com/Sarah06102/TrackMyApps`,
//         img: '/TrackMyApps.png'
//     },
//     {
//         name: `AutoTrack`,
//         status: `(in progress)`,
//         description: `A web-based expense tracker that helps users automate their spending logs, set budgets, and visualize financial habits. AutoTrack syncs in real time and offers personalized alerts, budget insights, and a clean, user-friendly interface to simplify money management and encourage smarter financial decisions.`,
//         skills: ["HTML", "CSS", "Django", "React"],
//         // github:
//     },
//     {
//         name: `MyPassVault`,
//         description: `A web-based password manager that simplifies secure credential storage, strong password generation, and password strength validation. MyPassVault offers customizable password rules and a user-friendly interface to help users manage their online accounts confidently and securely.`,
//         skills: ["React", "Django", "Tailwind CSS", "RESTful API", "PostgreSQL"],
//         github: `https://github.com/Sarah06102/MyPassVault`,
//         img: '/MyPassVault.png'
//     },
// ]

// export const Projects = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: [
//             {
//               breakpoint: 768,
//               settings: {
//                 slidesToShow: 1
//               }
//             }
//         ]
//     };
//     const [isDarkTheme] = useLocalStorage("isDarkTheme", false);
//     return (
//         <section id="Projects" className="py-24 px-4">
//             <div className="container mx-auto max-w-5xl">
//                 <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
//                     <span className="text-primary">
//                         Projects I've Worked On
//                     </span>
//                 </h2>
//             </div>

//             <div className="w-full px-4 md:px-8">
//                 <div className={`relative w-full max-w-7xl mx-auto mt-10 ${isDarkTheme ? 'dark-slider' : 'light-slider'}`}>
//                     <Slider {...settings}>
//                     {ProjectData.map((p, i) => (
//                         <div key={i} className="h-[600px] flex flex-col">
//                             <div className={`flex min-w-[280px] flex-1 h-full max-w-[90vw] flex-grow justify-between rounded-xl p-5 m-2 card-transform hover:shadow-lg ${isDarkTheme ? 'dark-card' : 'light-card'}`}>
//                                 <div className="flex-shrink flex flex-col justify-between items-center h-full gap-4 p-3">
//                                     <p className="text-xl font-bold underline text-center">{p.name}</p>
//                                     {p.img && <img src={p.img} alt={p.name} className="w-full h-[200px] object-cover rounded-lg" />}
//                                     <p className="text-sm text-center break-words max-w-[260px]">{p.status}</p>
//                                     <p className="text-sm text-center break-words max-w-[500px]">{p.description}</p>
                                    
//                                     {/* Skills */}
//                                     <div className="flex flex-col flex-grow gap-2">
//                                         <div className="flex flex-wrap justify-center gap-2">
//                                         {p.skills?.map((skill, index) => (
//                                             <span key={index} className="px-2.5 py-1 text-sm rounded-full bg-transparent border font-medium hover:text-indigo-300">
//                                                 {skill}
//                                             </span>
//                                         ))}
//                                         {/* Github Link */}
//                                         </div>
//                                         <a className="format hover:text-indigo-400 text-center hover:underline text-primary mt-3" href={p.github || '#'} target="_blank" rel="noopener noreferrer">GitHub</a>
//                                     </div>  
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//                 </div>
//             </div>
//         </section>  
//     );
// };


{/* Cards for projects */}
import { Code } from 'lucide-react';
import useLocalStorage from 'use-local-storage';

const ProjectData = [
  {
    name: "TrackMyApps",
    description: "A Chrome extension that allows users to save job postings from platforms like LinkedIn directly to a personalized dashboard. With one click, users can capture job details and sync them to a real-time web app powered by Firebase.",
    skills: ["React", "Firebase", "Chrome API", "Tailwind CSS"],
    github: "https://github.com/Sarah06102/TrackMyApps",
  },
  {
    name: "MyPassVault",
    description: "A web-based password manager that simplifies secure credential storage, strong password generation, and password strength validation. MyPassVault offers customizable password rules and a user-friendly interface.",
    skills: ["React", "Django", "Tailwind CSS", "RESTful API", "PostgreSQL"],
    github: "https://github.com/Sarah06102/MyPassVault",
  },
];

const InProgressProjectData = [
  {
    name: "AutoTrack",
    description: "A web-based expense tracker that helps users automate their spending logs, set budgets, and visualize financial habits. AutoTrack syncs in real time and offers personalized alerts, budget insights, and a clean, user-friendly interface.",
    skills: ["HTML", "CSS", "Django", "React"],
  },
  {
    name: "TravelBuddy",
    description: "A full-stack travel planner and expense tracker built with the MERN stack. It allows users to create detailed itineraries, set budgets, and visualize spending habits. TravelBuddy syncs in real time, provides personalized alerts, and features a clean, intuitive UI for efficient trip planning.",
    skills: ["React", "Node.js", "Express.js", "JavaScript", "RESTful API", "MongoDB"],
  },
  {
    name: "InvestSmart",
    description: "A stock prediction and investment advisory app that uses historical market data and sentiment analysis to forecast stock trends. It helps users make informed decisions with simple, personalized suggestions on when to buy, hold, or sell.",
    skills: ["React", "Flask", "PostgreSQL", "scikit-learn", "pandas"],
  },
];

export const Projects = () => {
  const [isDarkTheme] = useLocalStorage("isDarkTheme", false);

  return (
    <>
      <section id="Projects" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-500">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ProjectData.map((project, index) => (
              <div key={index} className={`rounded-xl p-6 border card-transform hover:shadow-lg ${isDarkTheme === true ? "dark-card-projects" : "light-card-projects"}`}>
                <div className="flex items-center gap-3 mb-4 font-semibold text-lg">
                  <Code size={20} className="text-indigo-300"/>
                  <h3 className="text-xl font-bold">
                    {project.name}
                    {project.status && (
                      <span className="ml-2 text-sm italic">
                        {project.status}
                      </span>
                    )}
                  </h3>
                </div>
                <p className="text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span key={i}className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${isDarkTheme === true ? "dark-projects-skills" : "light-projects-skills"}`}>
                      {skill}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="block mt-4 text-indigo-400 hover:underline text-sm">
                    GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-40 mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-500">Projects I'm Currently Working On</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {InProgressProjectData.map((project, index) => (
              <div key={index} className={`rounded-xl p-6 border card-transform hover:shadow-lg ${isDarkTheme === true ? "dark-card-projects" : "light-card-projects"}`}>
                <div className="flex items-center gap-3 mb-4 font-semibold text-lg">
                  <Code size={20} className="text-indigo-300"/>
                  <h3 className="text-xl font-bold">
                    {project.name}
                    {project.status && (
                      <span className="ml-2 text-sm italic">
                        {project.status}
                      </span>
                    )}
                  </h3>
                </div>
                <p className="text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, i) => (
                    <span key={i}className={`px-2.5 py-0.5 text-xs font-semibold rounded-full ${isDarkTheme === true ? "dark-projects-skills" : "light-projects-skills"}`}>
                      {skill}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="block mt-4 text-indigo-400 hover:underline text-sm">
                    GitHub
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
