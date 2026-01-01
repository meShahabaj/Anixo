import React from "react";
import {
    CodeBracketIcon,
    DevicePhoneMobileIcon,
    CpuChipIcon,
} from "@heroicons/react/24/outline";

const services = [
    {
        title: "Enterprise Web Platforms",
        description:
            "Robust, secure, and scalable web platforms designed to support complex business operations and growth.",
        points: ["Custom Architecture", "High Performance", "Security First"],
        icon: CodeBracketIcon,
    },
    {
        title: "Custom Applications",
        description:
            "Web and mobile applications built for reliability, scalability, and seamless user experience.",
        points: ["iOS & Android", "Cloud-Native", "API Integrations"],
        icon: DevicePhoneMobileIcon,
    },
    {
        title: "AI & Intelligent Automation",
        description:
            "Data-driven AI solutions that optimize processes, reduce costs, and unlock actionable insights.",
        points: ["Machine Learning", "Process Automation", "Advanced Analytics"],
        icon: CpuChipIcon,
    },
];

const Services: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Technology Solutions for Modern Businesses
                    </h2>
                    <p className="text-lg text-gray-600">
                        We partner with organizations to design, build, and scale digital
                        solutions that deliver long-term business value.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid gap-8 md:grid-cols-3">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={idx}
                                className="
                  bg-white rounded-2xl p-8
                  border border-gray-100
                  shadow-sm hover:shadow-lg
                  transition-all
                "
                            >
                                {/* Icon */}
                                <div className="mb-6">
                                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
                                        <Icon className="w-7 h-7 text-blue-600" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Capability Points */}
                                <ul className="space-y-2">
                                    {service.points.map((point, i) => (
                                        <li
                                            key={i}
                                            className="flex items-center text-sm text-gray-500"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mr-3" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
