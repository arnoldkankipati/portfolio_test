import React from "react";
import Section from "../Layout/Section";
import { portfolioData } from "../../data/portfolio";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
    const { social } = portfolioData;

    return (
        <Section id="contact" className="bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="h-0.5 w-8 bg-primary"></span>
                    <span className="text-primary font-medium uppercase tracking-wider text-sm">Get In Touch</span>
                    <span className="h-0.5 w-8 bg-primary"></span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                    Lorem Ipsum
                </h2>

                <p className="text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor!
                </p>

                {/* Contact Methods */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {social.filter(s => s.name !== "Email").map(s => {
                        const Icon = s.icon;
                        return (
                            <a
                                key={s.name}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-3 px-6 py-4 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-600 rounded-xl transition-all"
                            >
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                    <Icon size={20} className="text-slate-600 group-hover:text-white transition-colors" />
                                </div>
                                <div className="text-left">
                                    <p className="text-sm text-slate-500 font-medium">{s.name}</p>
                                    <p className="text-slate-900 font-medium group-hover:text-blue-600 transition-colors">
                                        @{s.name}
                                    </p>
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* Simple CTA */}
                <div className="pt-8 border-t border-slate-200">
                    <p className="text-slate-500 mb-6">Lorem ipsum dolor sit</p>
                    <a
                        href="mailto:k.arnoldraj@gmail.com"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30 transition-all"
                    >
                        <Mail size={20} />
                        k.arnoldraj@gmail.com
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
