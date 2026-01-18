import Link from "next/link";
import Image from "next/image";

export interface Project {
  title: string;
  pic: string;
  address: string;
}

const projects: Project[] = [
  {
    title: "Techis Talk",
    pic: "Techis_talk.png",
    address: "https://techistalk.vercel.app/",
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
  },
  {
    title: "Resume Scorer",
    pic: "resume_scorer.png",
    address: "https://shahabaj.onrender.com/#/projects/resume_scorer",
  },
  {
    title: "Stone Paper Scissor (Live Gesture)",
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
    address: "https://anixo.vercel.app/",
  },
];
export default function ProjectsSection() {
  return (
    <section className="bg-black px-4 sm:px-[6%] py-12 sm:py-16">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Products
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 max-w-[1400px] mx-auto">
        {projects.map((p) => (
          <Link
            key={p.title}
            href={p.address}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group block h-full
              rounded-2xl overflow-hidden
              bg-white backdrop-blur
              shadow-md hover:shadow-xl
              transition-all duration-500
              hover:bg-sky-50/80
            "
          >
            {/* Image */}
            <div className="relative w-full h-44 sm:h-52 md:h-56 overflow-hidden">
              <Image
                src={`/ProjectImages/${p.pic}`}
                alt={p.title}
                fill
                className="
                  object-cover
                  transition-transform duration-700
                  group-hover:scale-[1.03]
                "
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5">
              <div className="h-[2px] w-0 bg-sky-500 transition-all duration-500 group-hover:w-full" />

              <h3
                className="
                  text-base sm:text-lg font-semibold mb-1
                  text-slate-800
                  transition-colors duration-300
                  group-hover:text-sky-600
                "
              >
                {p.title}
              </h3>

              <p
                className="
                  text-xs sm:text-sm text-slate-500
                  transition-colors duration-300
                  group-hover:text-sky-500
                "
              >
                View project details →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
