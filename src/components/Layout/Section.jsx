import React from "react";

const Section = ({ id, children, className = "" }) => {
    return (
        <section id={id} className={`py-4 md:py-10 lg:min-h-screen lg:flex lg:items-center px-6 ${className}`}>
            <div className="max-w-7xl mx-auto w-full animate-fade-in-up">
                {children}
            </div>
        </section>
    );
};

export default Section;
