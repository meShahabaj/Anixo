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
    <footer className="bg-gray-900 text-gray-300 pt-24">
      {/* Footer Main */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
            Anixo
          </h2>
          <p className="text-gray-400">
            We create modern websites, apps, and AI solutions that help your
            business grow and stay ahead in the digital world.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="hover:text-blue-500 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-500 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Technologies
          </h3>
          <ul className="space-y-2">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="hover:text-blue-500 transition-colors"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Contact
          </h3>

          <p>
            Email:{" "}
            <a
              href="mailto:anixosolutions@gmail.com"
              className="hover:text-blue-500 transition-colors"
            >
              anixosolutions@gmail.com
            </a>
          </p>

          <p>
            Phone:{" "}
            <a
              href="tel:+919336934551"
              className="hover:text-blue-500 transition-colors"
            >
              +91 9336934551
            </a>
          </p>

          <div className="mt-4">
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
      <div className="mt-12 pb-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Anixo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
