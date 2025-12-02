import React, { lazy, Suspense } from "react";
import { motion, Variants } from "framer-motion";

// Lazy load components
const Header = lazy(() => import("./HomeUtils/Header.tsx"));
const Banner = lazy(() => import("./HomeUtils/Banner.tsx"));
const Services = lazy(() => import("./HomeUtils/Services.tsx"));
const WhyServices = lazy(() => import("./HomeUtils/Reasons.tsx"));
const ContactForm = lazy(() => import("./HomeUtils/ContactForm.tsx"));
const TechnologiesSlider = lazy(() => import("./HomeUtils/TechnologiesSlider.tsx"));
const Footer = lazy(() => import("./HomeUtils/Footer.tsx"));

// Section animation variants
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: i * 0.05,
            ease: "easeInOut",
        },
    }),
};

// Loading spinner
const Loading = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
);

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
                        <Suspense fallback={<Loading />}>
                            <SectionComponent />
                        </Suspense>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default HomePage;
