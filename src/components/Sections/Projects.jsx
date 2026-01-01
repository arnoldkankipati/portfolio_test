import React from "react";
import Section from "../Layout/Section";
import { portfolioData } from "../../data/portfolio";
import { Github } from "lucide-react";

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <Section id="projects" className="bg-white">
            <div className="flex items-center gap-2 mb-4 justify-center">
                <span className="h-0.5 w-8 bg-primary"></span>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Portfolio</span>
                <span className="h-0.5 w-8 bg-primary"></span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                    <div
                        key={project.id}
                        className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
                        style={{ animationDelay: `${idx * 100}ms` }}
                    >
                        <div className="h-40 bg-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-slate-300 transition-colors">
                            <span className="font-medium">Project Preview</span>
                            {/* <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> */}
                        </div>

                        <div className="p-5">
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-slate-600 mb-2 text-sm leading-relaxed">
                                {project.description}
                            </p>

                            {project.focus && (
                                <p className="text-xs text-slate-500 mb-4">
                                    <span className="font-semibold">Focus:</span> {project.focus}
                                </p>
                            )}

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="text-xs font-semibold px-2 py-1 bg-white border border-slate-200 rounded text-slate-600">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center gap-4">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-primary transition-colors"
                                >
                                    <Github size={16} />
                                    View Code
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
