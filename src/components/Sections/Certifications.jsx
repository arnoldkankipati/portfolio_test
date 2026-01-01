import React from "react";
import Section from "../Layout/Section";
import { portfolioData } from "../../data/portfolio";
import { Award } from "lucide-react";
import { motion } from "framer-motion";

const Certifications = () => {
    const { certifications } = portfolioData;

    return (
        <Section id="certifications" className="bg-slate-50">
            <div className="flex items-center gap-2 mb-4 justify-center">
                <span className="h-0.5 w-8 bg-primary"></span>
                <span className="text-primary font-medium uppercase tracking-wider text-sm">Continuous Learning</span>
                <span className="h-0.5 w-8 bg-primary"></span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
                Learning & Coursework
            </h2>

            <p className="text-center text-slate-600 mb-6 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, idx) => (
                    <motion.div
                        key={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-indigo-50 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                                <Award size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-600 mb-1 group-hover:text-primary transition-colors">
                                    {cert.name}
                                </h3>
                                <p className="text-slate-600 text-sm mb-1">{cert.platform}</p>
                                <p className="text-slate-600 text-xs">{cert.year}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Certifications;
