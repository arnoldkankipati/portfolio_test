import { Github, Linkedin, Mail } from "lucide-react";

export const portfolioData = {
    personalInfo: {
        name: "Arnold",
        role: "Aspiring Software Developer",
        tagline: "Building seamless digital experiences with code.",
        resumeUrl: "#",
    },
    about: {
        summary: "I am a Computer Science student with a strong foundation in software engineering principles. I love building web applications that solve real-world problems. Always eager to learn and adapt to new technologies.",
    },
    skills: [
        { name: "Lorem", category: "Programming" },
        { name: "Ipsum", category: "Programming" },
        { name: "Dolor", category: "Programming" },
        { name: "Sit Amet", category: "Programming" },
        { name: "Consectetur", category: "Software Development" },
        { name: "Adipiscing", category: "Software Development" },
        { name: "Elit", category: "Software Development" },
        { name: "Sed Do", category: "Software Development" },
        { name: "Eiusmod", category: "Software Development" },
        { name: "Tempor", category: "CS Fundamentals" },
        { name: "Incididunt", category: "CS Fundamentals" },
        { name: "Labore", category: "CS Fundamentals" },
        { name: "Dolore", category: "Tools" },
        { name: "Magna", category: "Tools" },
        { name: "Aliqua", category: "Tools" },
    ],
    projects: [
        {
            id: 1,
            title: "Task Manager App",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            focus: "Lorem, ipsum, dolor sit",
            stack: ["React", "LocalStorage", "JavaScript"],
            github: "https://github.com/arnold/task-manager",
        },
        {
            id: 2,
            title: "Weather Dashboard",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            focus: "Dolor, amet, consectetur",
            stack: ["JavaScript", "REST API", "HTML", "CSS"],
            github: "https://github.com/arnold/weather-dashboard",
        },
        {
            id: 3,
            title: "Personal Portfolio",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
            focus: "Sit, amet, adipiscing",
            stack: ["React", "Tailwind CSS", "Framer Motion"],
            github: "https://github.com/arnold/portfolio",
        },
    ],
    certifications: [
        {
            id: 1,
            name: "Lorem Ipsum Dolor",
            platform: "Lorem Platform",
            year: "2024",
        },
        {
            id: 2,
            name: "Consectetur Adipiscing",
            platform: "Ipsum Services",
            year: "2024",
        },
        {
            id: 3,
            name: "Sed Do Eiusmod",
            platform: "Dolor Institute",
            year: "2023",
        },
        {
            id: 4,
            name: "Tempor Incididunt",
            platform: "Amet Academy",
            year: "2023",
        },
    ],
    education: [
        {
            id: 1,
            degree: "B.Tech in Computer Science",
            institution: "University",
            year: "2023 - 2027",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            coursework: ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"],
        },
    ],
    social: [
        {
            name: "Email",
            icon: Mail,
            url: "mailto:arnold@gmail.com",
        },
        {
            name: "GitHub",
            icon: Github,
            url: "https://github.com",
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            url: "https://linkedin.com",
        },
    ],
};
