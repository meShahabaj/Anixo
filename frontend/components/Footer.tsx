import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const technologies = [
  "React",
  "Node.js",
  "TailwindCSS",
  "TypeScript",
  "Python",
  "AI/ML",
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid gap-12 sm:grid-cols-2 md:grid-cols-4 text-center md:text-left">

        {/* Logo & Description */}
        <div className="hidden sm:block">
          <h2 className="text-2xl font-extrabold mb-4 bg-clip-text text-white bg-gradient-to-r from-blue-500 to-indigo-600">
            Anixo
          </h2>
          <p className="text-white">
            We create modern websites, apps, and AI solutions that help your
            business grow and stay ahead in the digital world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {["About", "Services", "Contact"].map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="hover:text-blue-500 transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="hidden sm:block ">
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
            Technologies
          </h3>
          <ul className="space-y-2">
            {technologies.map((tech) => (
              <li key={tech} className="hover:text-blue-500 transition-colors">
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
            Contact
          </h3>
          <p className="mb-1">
            Email:{" "}
            <a
              href="mailto:anixosolutions@gmail.com"
              className="hover:text-blue-500 transition-colors break-all"
            >
              anixosolutions@gmail.com
            </a>
          </p>
          <p className="mb-2">
            Phone:{" "}
            <a
              href="tel:+919336934551"
              className="hover:text-blue-500 transition-colors"
            >
              +91 9336934551
            </a>
          </p>
          <div className="mt-4 flex justify-center md:justify-start">
            <a
              href="https://www.linkedin.com/company/anixo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-500 transition-colors"
            >
              <FaLinkedinIn />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 sm:mt-12 pb-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Anixo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
