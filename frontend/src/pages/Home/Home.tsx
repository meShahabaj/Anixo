import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

// // Lazy load components
const Header = lazy(() => import("./HomeUtils/Header.tsx"));
const Banner = lazy(() => import("./HomeUtils/Banner.tsx"));
const Services = lazy(() => import("./HomeUtils/Services.tsx"));
const WhyServices = lazy(() => import("./HomeUtils/Reasons.tsx"));
const ContactForm = lazy(() => import("./HomeUtils/ContactForm.tsx"));
const TechnologiesSlider = lazy(() => import("./HomeUtils/TechnologiesSlider.tsx"));
const Footer = lazy(() => import("./HomeUtils/Footer.tsx"));

// Custom section animation variants
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: i * 0.00005,
            ease: "easeInOut",
        },
    }),
};



const HomePage: React.FC = () => {
    const sections = [
        { Component: Header },
        { Component: Banner },
        { Component: Services },
        { Component: WhyServices },
        { Component: ContactForm },
        { Component: TechnologiesSlider },
        { Component: Footer },
    ];

    return (
        <div className="font-sans text-gray-800">
            <Suspense fallback={<div className="text-center py-24 text-gray-500">Loading...</div>}>
                {sections.map((section, idx) => {
                    const SectionComponent = section.Component;
                    return (
                        <motion.div
                            key={idx}
                            initial="hidden"
                            whileInView="visible"
                            custom={idx}
                            variants={sectionVariants}
                            viewport={{ amount: 0.2 }}
                        >
                            <SectionComponent />
                        </motion.div>


                    );
                })}
            </Suspense>
        </div>
    );
};

export default HomePage;
