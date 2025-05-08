import { Link } from "@heroui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Navbar() {
  return (
    <nav className="top-0 left-0 right-0 bg-white/80 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl text-default-800">
              PM for Tech
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/antonioscapellato/product-management-guide"
              isExternal
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaGithub size={24} className="inline" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/antonio-scapellato/"
              isExternal
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <FaLinkedin size={24} className="inline" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
