import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <div className="shadow-lg shadow-white py-6 border-t border-[#686d763d]">
      <div className="container  px-4  m-auto lg:flex justify-between items-center">
        <div className="flex gap-3 items-center mb-6 lg:mb-0">
          <p className="text-2xl border-r-2 px-2 lg:px-3 border-gray lg:text-4xl font-bold text-white">
            SKF
          </p>
          <p className="font-medium text-base lg:text-lg text-white">
            © 2024 - Solid Sky Fund
          </p>
        </div>
        <div className="flex gap-4 items-center text-white">
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
        <div className="flex gap-3 ">
          <a
            href="#"
            className="bg-[#686d764d] p-2 lg:p-3 rounded-full text-white"
          >
            <Facebook />
          </a>
          <a
            href="#"
            className="bg-[#686d764d] p-2 lg:p-3 rounded-full text-white"
          >
            <Twitter />
          </a>
          <a
            href="#"
            className="bg-[#686d764d] p-2 lg:p-3 rounded-full text-white"
          >
            <Instagram />
          </a>
          <a
            href="#"
            className="bg-[#686d764d] p-2 lg:p-3 rounded-full text-white"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
