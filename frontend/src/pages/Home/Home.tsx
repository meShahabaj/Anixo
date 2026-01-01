import React, { lazy, Suspense } from "react";
import { motion, Variants } from "framer-motion";

// Eager load critical layout
import Header from "./HomeUtils/Header.tsx";
import Banner from "./HomeUtils/Banner.tsx";
import Footer from "./HomeUtils/Footer.tsx";
import ProjectsSection from "./HomeUtils/ProjectSection.tsx";

// Lazy load non-critical sections
const Services = lazy(() => import("./HomeUtils/Services.tsx"));
const WhyServices = lazy(() => import("./HomeUtils/Reasons.tsx"));
const TechnologiesSlider = lazy(() => import("./HomeUtils/TechnologiesSlider.tsx"));
const ContactForm = lazy(() => import("./HomeUtils/ContactForm.tsx"));

// Section animation (enterprise-friendly)
const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            delay: i * 0.08,
            ease: "easeOut",
        },
    }),
};

// Subtle skeleton loader
const SectionSkeleton = () => (
    <div className="h-64 bg-gray-100 animate-pulse rounded-xl my-16" />
);

const HomePage: React.FC = () => {
    const sections = [
        Services,
        WhyServices,
        ProjectsSection,
        TechnologiesSlider,
        ContactForm,
    ];

    return (
        <div className="font-sans text-gray-800 bg-white">
            {/* Critical content */}
            <Header />
            <Banner />

            {/* Lazy sections */}
            {sections.map((SectionComponent, idx) => (
                <motion.section
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    custom={idx}
                    variants={sectionVariants}
                >
                    <Suspense fallback={<SectionSkeleton />}>
                        <SectionComponent />
                    </Suspense>
                </motion.section>
            ))}

            {/* Footer without animation */}
            <Footer />
        </div>
    );
};

export default HomePage;
