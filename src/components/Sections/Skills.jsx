import React from "react";
import Section from "../Layout/Section";
import { portfolioData } from "../../data/portfolio";

const Skills = () => {
    const { skills } = portfolioData;

    // Define SDE-focused category order
    const categoryOrder = ["CS Fundamentals", "Programming", "Software Development", "Tools"];

    // Group skills by category and sort by defined order
    const categories = categoryOrder.filter(cat =>
        skills.some(skill => skill.category === cat)
    );

    return (
        <Section id="skills" className="bg-slate-50">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-2 mb-4 justify-center">
                    <span className="h-0.5 w-8 bg-primary"></span>
                    <span className="text-primary font-medium uppercase tracking-wider text-sm">Skills & Expertise</span>
                    <span className="h-0.5 w-8 bg-primary"></span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
                    Lorem Ipsum Dolor Sit
                </h2>

                <p className="text-center text-slate-600 mb-6 max-w-2xl mx-auto text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {categories.map((category, idx) => (
                        <div
                            key={category}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <h3 className="text-lg font-semibold text-slate-800 mb-4 pb-2 border-b border-slate-50">
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills
                                    .filter(skill => skill.category === category)
                                    .map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="px-4 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-primary hover:scale-105 transition-all cursor-default"
                                        >
                                            {skill.name}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Skills;
