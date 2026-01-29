import React from 'react';
import { Briefcase } from "lucide-react";
import useLocalStorage from 'use-local-storage';

const experienceData = [
    {
        title: "Software Engineer",
        company: "MissionPerform",
        location: "Mississauga, Ontario",
        term: "Winter 2026",
        logo: "/logos/missionperform_logo.jpeg",
        points: [
            "Drive development of high-impact features for a mobile-first React Native + MERN platform, collaborating with executive leadership.",
            "Enhance backend functionality by refining existing Node.js API endpoints to support new features.",
            "Influence product and technical decisions through close collaboration with the CTO in an early-stage startup setting.",
        ],
        skills: ["React/React Native", "JavaScript", "RESTful API Design", "Node.js (API Integration)", "Git & GitHub Workflows"],
    },
    {
        title: "Software Engineer, backend",
        company: "teaBOT (YC S15)",
        location: "Remote",
        term: "Fall 2025",
        logo: "/logos/myteabot_logo.jpeg",
        points: [
            "Migrate backend services from AWS Elastic Beanstalk to AWS Lambda and API Gateway to improve scalability and reduce infrastructure costs.",
            "Refactor code into modular, event-driven functions and design secure RESTful APIs for seamless client integrations.",
            "Automate deployments with CI/CD pipelines and enhance monitoring using CloudWatch for greater reliability.",
        ],
        skills: ["AWS", "Node.js/JavaScript", "RESTful API Design", "Event-Driven Architecture", "CI/CD"],
    },
    {
        title: "M&A Analyst",
        company: "Westonview Partners",
        location: "Remote",
        term: "Summer 2025",
        logo: "/logos/westonviewpartners_logo.jpeg",
        points: [
            "Conducted industry research and profiled acquisition targets using Excel and databases to support deal sourcing, outreach, and preliminary financial analysis.",
            "Analyzed key business metrics and market trends to assess attractiveness of targets and inform investment decisions.",
            "Supported due diligence by gathering and reviewing company information, analyzing performance data, and summarizing findings for advisory discussions.",
        ],
        skills: ["Financial Modeling & Valuation", "Industry & Market Research", "Excel", "M&A Deal Sourcing & Target Profiling"],
    },
    {
        title: "Product Manager Intern",
        company: "Shomigo",
        location: "Remote",
        term: "Fall 2024",
        logo: "/logos/shopshomigo_logo.jpeg",
        logoScale: "zoomed-out",
        points: [
            "Collaborated with an 8-person cross-functional team across engineering, design, and marketing to develop and launch a B2C mobile app and Chrome extension.",
            "Enabled shoppers to save products across their favorite online stores and share them for feedback.",
            "Worked under the mentorship of a Senior Product Manager to drive product development from 0 to 250 MAUs in 2 months.",
        ],
        skills: ["Product Management", "User Research & Feedback Loops", "Agile Methodology", "B2C Product Development", "Cross-functional Collaboration"],
    },
    {
        title: "Data Analytics Intern",
        company: "Ambitious Labs",
        location: "Remote",
        term: "Summer 2024",
        logo: "/logos/the_ambitious_app_logo.jpeg",
        logoScale: "zoomed-in",
        points: [
            "Increased reporting efficiency by 35% by using SQL & Tableau to create data visualizations on key performance metrics and performance measures for Ambitious Lab’s core education product, LabDash.",
        ],
        skills: ["SQL", "Tableau", "Data Visualization", "Performance Metrics Analysis", "Data Analysis", "KPI Dashboarding"],
    },
];


const ExperienceCard = ({ title, company, location, term, points, skills, logo, logoScale, }) => {
    const [isDarkTheme] = useLocalStorage("isDarkTheme", false);

    return (
        <div className={`relative pl-6 border-l-2 border-indigo-500 ml-4 mb-12 ${isDarkTheme === true ? "dark-card-experience" : "light-card-experience"}`}>
            
            {/* Icon circle */}
            <div className="absolute -left-5 flip-perspective">
                <button type="button" aria-label={company} className="flip-card-hover focus:outline-none">
                    <div className="relative w-9 h-9 rounded-full bg-indigo-500 flip-card">
        
                        {/* Front of circle */}
                        <div className="absolute inset-0 flex items-center justify-center flip-face">
                            <Briefcase className="w-4 h-4 text-white" />
                        </div>

                        {/* Back of circle */}
                        <div className="absolute inset-0 rounded-full flip-face flip-back overflow-hidden">
                            <img src={logo} alt={`${company} logo`} className={`w-full h-full object-cover ${logoScale === "zoomed-out" ? "scale-98" : logoScale === "zoomed-in" ? "scale-110" : "scale-100"}`} />
                        </div>
                    </div>
                </button>
            </div>
        
            {/* Header: Title + Term */}
            <div className="flex justify-between items-start pt-1">
                <div className="flex flex-col justify-between items-start">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p>{company}</p>
                <p className="text-sm">{location}</p>
                </div>
                <span className="bg-indigo-700 text-white text-xs px-3 py-1 rounded-full h-fit whitespace-nowrap">
                    {term}
                </span>
            </div>
        
            {/* Bullet Points */}
            <ul className="list-disc pl-3 mt-4 space-y-2 text-sm">
                {points.map((point, index) => (
                    <li
                    key={index}
                    className="marker:text-indigo-400 text-left"
                    >
                    {point}
                    </li>
                ))}
                </ul>
        
            {/* Skills */}
            <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                <span
                    key={i}
                    className={`text-xs bg-gray-700 dark:bg-gray-600 text-white px-3 py-1 rounded-full ${isDarkTheme === true ? "dark-projects-skills" : "light-projects-skills"}`}
                >
                    {skill}
                </span>
                ))}
            </div>
        </div>
    );
}

const Experience = () => {
    return (
        <section id="Experience" className="py-25 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-indigo-500">Experience</h2>
            {experienceData.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
            ))}
        </section>
    );
};

export default Experience;
