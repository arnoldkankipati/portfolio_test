import React from "react";
import Section from "../Layout/Section";
import { portfolioData } from "../../data/portfolio";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
    const { education } = portfolioData;

    return (
        <Section id="education" className="bg-slate-50 pb-48 md:pb-56">
            <div className="flex items-center gap-2 mb-4 justify-center">
                <span className="h-0.5 w-8 bg-primary"></span>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Background</span>
                <span className="h-0.5 w-8 bg-primary"></span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
                Education
            </h2>

            <div className="max-w-3xl">
                <div className="relative border-l-2 border-slate-200 ml-3 space-y-12">
                    {education.map((edu, idx) => (
                        <div
                            key={edu.id}
                            className="relative pl-8 md:pl-12 animate-fade-in-up"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-primary" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                                    <GraduationCap size={20} className="text-primary" />
                                    {edu.degree}
                                </h3>
                                <div className="flex items-center gap-1 text-slate-500 text-sm font-medium bg-slate-50 px-3 py-1 rounded-full w-fit">
                                    <Calendar size={14} />
                                    {edu.year}
                                </div>
                            </div>

                            <h4 className="text-lg font-medium text-slate-700 mb-3">
                                {edu.institution}
                            </h4>

                            {edu.description && (
                                <p className="text-slate-600 leading-relaxed mb-3">
                                    {edu.description}
                                </p>
                            )}

                            {edu.coursework && (
                                <div>
                                    <p className="text-sm font-semibold text-slate-700 mb-2">Key Coursework:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {edu.coursework.map((course) => (
                                            <span
                                                key={course}
                                                className="px-3 py-1 bg-indigo-50 text-primary rounded-lg text-xs font-medium border border-indigo-100"
                                            >
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Education;
