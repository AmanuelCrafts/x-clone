import { FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral mt-4 p-4 md:px-8 flex justify-between items-center">
      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      <nav className="flex items-center justify-between gap-4">
        <a href="https://www.instagram.com/aman_z445/">
          <FaInstagram className="text-2xl" />
        </a>
        <a href="https://github.com/AmanuelCrafts/">
          <FaGithub className="text-2xl" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
