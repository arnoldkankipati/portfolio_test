import React from "react";
import Section from "../Layout/Section"; // Assuming Section wrapper is in Layout
import { portfolioData } from "../../data/portfolio";

const About = () => {
    const { projects, certifications } = portfolioData;

    const stats = [
        { label: "Background", value: "CS Student" },
        { label: "Projects Built", value: `${projects.length}+` },
        { label: "Certifications", value: `${certifications.length}+` },
    ];

    return (
        <Section id="about" className="bg-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Side - Image Placeholder or Illustration */}
                <div className="relative group max-w-lg mx-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative aspect-square rounded-2xl bg-slate-100 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                        <img
                            src="/profile.jpg"
                            alt="Arnold Kankipati - Software Developer"
                            width="500"
                            height="500"
                            loading="lazy"
                            decoding="async"
                            className="object-cover object-top w-full h-full"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentNode.children[1].style.display = 'block';
                            }}
                        />
                        <span className="text-slate-400 font-medium hidden">Profile Image</span>
                    </div>
                </div>

                {/* Right Side - Content */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="h-0.5 w-8 bg-primary"></span>
                        <span className="text-primary font-medium uppercase tracking-wider text-sm">About Me</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                        Engineering Mindset <br /> <span className="text-slate-400">& Continuous Growth</span>
                    </h2>

                    <div className="space-y-4 text-slate-600 text-base leading-relaxed mb-8">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="border-l-2 border-slate-200 pl-4">
                                <h4 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h4>
                                <p className="text-sm text-slate-600 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
