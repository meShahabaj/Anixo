import React from "react";
import { GlobeAltIcon, DevicePhoneMobileIcon, CpuChipIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const benefits = [
    {
        title: "Boost Online Visibility",
        description:
            "A modern website ensures your business is found online and builds trust with potential clients.",
        icon: <GlobeAltIcon className="w-10 h-10 text-blue-600" />,
    },
    {
        title: "Engage Customers Everywhere",
        description:
            "Mobile and web apps provide seamless user experiences that increase engagement and retention.",
        icon: <DevicePhoneMobileIcon className="w-10 h-10 text-green-500" />,
    },
    {
        title: "Make Smarter Decisions with AI",
        description:
            "AI solutions automate tasks and analyze data, helping your business make faster, smarter decisions.",
        icon: <CpuChipIcon className="w-10 h-10 text-pink-500" />,
    },
];

const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.3,
        },
    },
};

const item = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const WhyServices: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
                        Why These Services Matter
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
                        In today’s digital world, businesses need more than just a website. Here’s why investing in websites, apps, and AI solutions can transform your growth.
                    </p>
                </div>

                {/* Vertical Timeline */}
                <motion.div
                    className="relative max-w-3xl mx-auto"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Vertical Line */}
                    <div className="absolute top-0 left-5 h-full border-l-2 border-blue-200 hidden md:block"></div>

                    <div className="space-y-12">
                        {benefits.map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-start space-x-6 group"
                                variants={item}
                            >
                                <div className="flex-shrink-0 relative z-10">
                                    <div className="bg-white p-5 rounded-full shadow-lg group-hover:shadow-2xl transition-shadow">
                                        {benefit.icon}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600">{benefit.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyServices;
