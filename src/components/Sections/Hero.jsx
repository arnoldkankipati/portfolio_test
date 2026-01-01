import React from "react";
import { ArrowRight, Download, ExternalLink } from "lucide-react";

const Hero = () => {
    return (
        <section id="hero" className="py-20 lg:min-h-screen flex items-center justify-center relative bg-slate-50 overflow-hidden px-6">

            {/* Dynamic Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-6xl w-full relative z-10 grid md:grid-cols-2 gap-8 items-center">

                {/* Text Content */}
                <div className="text-left animate-fade-in">
                    <div className="inline-block mb-3 px-2.5 py-1 bg-indigo-50/80 border border-indigo-100 rounded-full text-primary text-xs font-medium">
                        👨‍💻 Open to SDE Opportunities
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-3 leading-tight">
                        Hi, I'm <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-tertiary">
                            Arnold.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl font-semibold text-slate-700 mb-3">
                        Lorem Ipsum Dolor Sit
                    </p>

                    <p className="text-base text-slate-600 mb-4 max-w-lg leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    {/* Skills Pills */}
                    <div className="flex flex-wrap gap-2 mb-5">
                        {["DSA", "Java", "Python", "OOPS", "SQL"].map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:border-indigo-300 hover:text-primary transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 mb-2">
                        <a
                            href="#contact"
                            className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 hover:scale-105 transition-all flex items-center gap-2"
                        >
                            Contact Me
                            <ArrowRight size={16} />
                        </a>
                        <a
                            href="/resume.pdf"
                            className="px-6 py-2.5 rounded-full bg-white text-slate-900 border border-slate-200 text-sm font-medium hover:border-blue-200 hover:bg-blue-50 hover:-translate-y-1 hover:scale-105 transition-all flex items-center gap-2"
                        >
                            Download CV
                            <Download size={16} />
                        </a>
                    </div>

                    {/* Optional DSA Profiles Link */}
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 text-xs text-primary hover:text-indigo-700 font-medium group"
                    >
                        View DSA Profiles
                        <ExternalLink size={12} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Code Card - Right Side */}
                <div className="relative hidden md:block animate-fade-in" style={{ animationDelay: '200ms' }}>
                    <div className="relative w-full max-w-md mx-auto">
                        {/* Abstract shape composition */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 rounded-2xl rotate-3 opacity-10 animate-float"></div>
                        <div className="absolute inset-0 bg-white border border-slate-100 rounded-2xl shadow-2xl flex items-center justify-center p-6 z-10">
                            <div className="w-full">
                                {/* SDE-Focused Code Snippet */}
                                <div className="bg-slate-900 rounded-xl p-4 font-mono text-xs overflow-hidden">
                                    <p className="text-slate-400">// Lorem Ipsum Dolor Sit</p>
                                    <p className="mt-1">
                                        <span className="text-purple-400">const</span>{" "}
                                        <span className="text-blue-300">Arnold</span>{" "}
                                        <span className="text-slate-300">=</span>{" "}
                                        <span className="text-yellow-300">{"{"}</span>
                                    </p>
                                    <p className="pl-3 text-slate-300">
                                        role: <span className="text-green-300">"Lorem Ipsum"</span>,
                                    </p>
                                    <p className="pl-3 text-slate-300">
                                        skills: <span className="text-yellow-300">[</span>
                                    </p>
                                    <p className="pl-6 text-green-300">
                                        "DSA", "Java",
                                    </p>
                                    <p className="pl-6 text-green-300">
                                        "Python", "Problem Solving"
                                    </p>
                                    <p className="pl-3 text-yellow-300">],</p>
                                    <p className="pl-3 text-slate-300">
                                        focus: <span className="text-green-300">"Dolor Sit Amet"</span>,
                                    </p>
                                    <p className="pl-3 text-slate-300">
                                        <span className="text-blue-300">solve</span>
                                        <span className="text-slate-400">(</span>
                                        <span className="text-orange-300">problem</span>
                                        <span className="text-slate-400">)</span>{" "}
                                        <span className="text-purple-400">=&gt;</span>{" "}
                                        <span className="text-yellow-300">{"{"}</span>
                                    </p>
                                    <p className="pl-6 text-purple-400">
                                        return <span className="text-blue-300">optimize</span><span className="text-slate-400">(</span><span className="text-orange-300">problem</span><span className="text-slate-400">)</span>;
                                    </p>
                                    <p className="pl-3 text-yellow-300">{"}"}</p>
                                    <p className="text-yellow-300">{"};"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg animate-fade-in"
                style={{ animationDelay: '1s' }}
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); } }}
                role="button"
                aria-label="Scroll to About section"
                tabIndex={0}
            >
                <div className="flex flex-col items-center gap-2 text-slate-600 hover:text-primary transition-colors">
                    <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
                    <div className="w-0.5 h-10 bg-slate-200 relative overflow-hidden">
                        <div
                            className="absolute top-0 left-0 w-full h-1/2 bg-primary animate-pulse"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
