import React from "react";
import { CodeBracketIcon, DevicePhoneMobileIcon, CpuChipIcon } from "@heroicons/react/24/solid";

const services = [
    {
        title: "Web Development",
        description: "Build responsive, modern, and high-performing websites tailored to your business needs.",
        icon: <CodeBracketIcon className="w-12 h-12 text-blue-600" />,
    },
    {
        title: "App Development",
        description: "Custom mobile and web applications designed to scale and delight your users.",
        icon: <DevicePhoneMobileIcon className="w-12 h-12 text-green-500" />,
    },
    {
        title: "AI Solutions",
        description: "Implement AI-powered solutions to automate, analyze, and optimize your business processes.",
        icon: <CpuChipIcon className="w-12 h-12 text-pink-500" />,
    },
];

const Services: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
                    Our Services
                </h2>
                <p className="text-gray-600 mb-12 text-lg">
                    We offer a wide range of technology solutions to help your business grow and succeed.
                </p>

                <div className="grid md:grid-cols-3 gap-10">
                    {services.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
                        >
                            <div className="mb-6 flex justify-center">
                                <div className="p-4 bg-gray-100 rounded-full group-hover:bg-gradient-to-r from-blue-500 to-indigo-500 transition-all">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
