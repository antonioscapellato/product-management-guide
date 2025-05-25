// Icons
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

// ThemeSwitcher
import { ThemeSwitcher } from './ThemeSwitcher';

// HeroUI
import { Button, Link } from '@heroui/react';

export default function Footer() {
  return (
    <footer className="mb-8">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center">
        <div className="flex items-center">
            <Button
              as={Link}
              href="https://github.com/antonioscapellato/product-management-guide"
              isExternal
              rel="noopener noreferrer"
              isIconOnly
              className="bg-transparent text-default-500"
              startContent={
                <FaGithub size={24} className="inline" />
              }
            />
            <Button
              as={Link}
              href="https://www.linkedin.com/in/antonio-scapellato/"
              isExternal
              rel="noopener noreferrer"
              isIconOnly
              className="bg-transparent text-default-500"
              startContent={
                <FaLinkedin size={24} className="inline" />
              }
            />
            <ThemeSwitcher />
          </div>
          <p className="mt-4 text-sm text-default-500">
            Made with ❤️ by{' '}
            <Link
              href="https://scapellato.dev"
              isExternal
              rel="noopener noreferrer"
              className="text-default-500 hover:text-default-700"
            >
              Antonio Scapellato
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
