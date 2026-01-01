import React from "react";
import { portfolioData } from "../../data/portfolio";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
                </div>

                <div className="flex space-x-6">
                    {portfolioData.social.map((social) => {
                        const Icon = social.icon;
                        return (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                aria-label={social.name}
                            >
                                <Icon size={20} />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
