import React from "react";
import { motion } from "framer-motion";

const Section = ({ id, children, className = "" }) => {
    return (
        <section id={id} className={`py-4 md:py-10 lg:min-h-screen lg:flex lg:items-center px-6 ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-7xl mx-auto w-full"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
