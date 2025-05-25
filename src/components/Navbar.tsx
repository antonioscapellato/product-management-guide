import { Avatar, Button, Link } from "@heroui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <nav className="top-0 left-0 right-0 bg-white/80 dark:bg-black/80 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Button 
              as={Link} 
              href="/" 
              className="bg-transparent py-4 text-xl text-default-800"
              startContent={
                <Avatar
                  src={"/product.png"}
                  size={"sm"}
                  radius={"sm"}
                />
              }
            >
              Product Mastery
            </Button>
          </div>
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
        </div>
      </div>
    </nav>
  );
}
