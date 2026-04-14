import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="flex flex-col items-center text-center space-y-4 px-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-primary">KeenKeeper</h2>

        {/* Description */}
        <p className="text-sm text-gray-500 max-w-md">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a href="#" className="hover:text-blue-600 transition">
            <FaFacebook />
          </a>

          <a href="#" className="hover:text-sky-500 transition">
            <FaTwitter />
          </a>

          <a href="#" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>
        </div>

        {/* Bottom text */}
        <p className="text-xs text-gray-400 pt-4">
          © {new Date().getFullYear()} KeenKeeper. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
