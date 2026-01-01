import { Link } from "react-router-dom";

export interface Project {
    title: string;
    pic: string;
    address: string;
}

interface Props {
    refProp: React.RefObject<HTMLElement | null>;
}
const projects: Project[] = [
    {
        title: "Techis Talk: ",
        pic: "Techis_talk.png",
        address: "https://techistalk.onrender.com/",
    },
    {
        title: "Image Editor",
        pic: "Image_editor.jpg",
        address: "https://shahabaj.onrender.com/#/projects/image_editor",
    },
    {
        title: "Face Extractor From Image",
        pic: "Face_locator.jpg",
        address: "https://shahabaj.onrender.com/#/projects/face_extractor",
    },
    {
        title: "AI (RAG) Chat Bot: About Me",
        pic: "pexels-thirdman-5592313.jpg",
        address: "https://shahabaj.onrender.com/#/projects/assistant",
    }, {
        title: "Resume Scorer",
        pic: "resume_scorer.png",
        address: "https://shahabaj.onrender.com/#/projects/resume_scorer",
    },
    {
        title: "Stone Paper Scissor Game with Live Gesture",
        pic: "Stone_paper_scissor.jpg",
        address: "https://shahabaj.onrender.com/#/projects/stone_paper_scissor",
    },
    {
        title: "Salary Predictor",
        pic: "Salary_prediction_img.jpeg",
        address: "https://shahabaj.onrender.com/#/projects/salary_predictor",
    },
    {
        title: "Anixo: IT Solutions",
        pic: "anixo.png",
        address: "https://anixo.onrender.com/",
    }

];
export default function ProjectsSection() {
    return (
        <section
            className="bg-gradient-to-br from-slate-50 via-sky-50 to-white px-[6%] py-16"
        >
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-sky-600">
                    Products
                </h2>

            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-[1400px] mx-auto">
                {projects.map((p) => (
                    <div
                    >
                        <Link
                            to={p.address}
                            className="
        group block h-full
        rounded-2xl overflow-hidden
        bg-white/70 backdrop-blur
        shadow-md hover:shadow-xl
        transition-all duration-500

        hover:bg-sky-50/80
    "
                        >
                            {/* Image */}
                            <div className="overflow-hidden">
                                <img
                                    src={`/Project_pic/${p.pic}`}
                                    alt={p.title}
                                    className="
                                        w-full h-56 object-cover
                                        transition-transform duration-700
                                        group-hover:scale-[1.03]
                                    "
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <div className="h-[2px] w-0 bg-sky-500 transition-all duration-500 group-hover:w-full" />

                                <h3
                                    className="
        text-lg font-semibold mb-1
        text-slate-800
        transition-colors duration-300
        group-hover:text-sky-600
    "
                                >
                                    {p.title}
                                </h3>

                                <p
                                    className="
        text-sm text-slate-500
        transition-colors duration-300
        group-hover:text-sky-500
    "
                                >
                                    View project details →
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section >
    );
}
