import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center">
        <div className="flex space-x-4">
            <Link
              href="https://github.com/antonioscapellato/product-management-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900"
            >
              <FaGithub size={24} className="inline" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/antonio-scapellato/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900"
            >
              <FaLinkedin size={24} className="inline" />
            </Link>
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            Made with ❤️ by tech product people
          </p>
        </div>
      </div>
    </footer>
  );
}
