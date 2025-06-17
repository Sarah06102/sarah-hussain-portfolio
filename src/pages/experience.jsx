import React from 'react';
import { Briefcase } from "lucide-react";
import useLocalStorage from 'use-local-storage';

const experienceData = [
  {
    title: "Product Manager Intern",
    company: "Shomigo",
    location: "Remote",
    term: "Fall 2024",
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
    points: [
        "Increased reporting efficiency by 35% by using SQL & Tableau to create data visualizations on key performance metrics and performance measures for Ambitious Lab’s core education product, LabDash.",
    ],
    skills: ["SQL", "Tableau", "Data Visualization", "Performance Metrics Analysis", "Data Analysis", "KPI Dashboarding"],
  },
];


const ExperienceCard = ({ title, company, location, term, points, skills }) => {
    const [isDarkTheme] = useLocalStorage("isDarkTheme", false);

    return (
        <div className={`relative pl-6 border-l-2 border-indigo-500 ml-4 mb-12 ${isDarkTheme === true ? "dark-card-experience" : "light-card-experience"}`}>
            
            {/* Icon circle */}
            <div className="absolute -left-5  w-9 h-9 bg-indigo-500 rounded-full flex items-center justify-center text-white">
                <Briefcase className="w-4 h-4" />
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
        <section id="Experience" className="py-10 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-indigo-500">Experience</h2>
            {experienceData.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
            ))}
        </section>
    );
};

export default Experience;
