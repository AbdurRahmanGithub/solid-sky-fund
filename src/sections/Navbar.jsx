import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  {
    link: "#",
    text: "About Us",
  },
  {
    link: "#",
    text: "Our Philosophy",
  },
  {
    link: "#",
    text: "Services",
  },
  {
    link: "#",
    text: "Testimonials",
  },
  {
    link: "#",
    text: "Contact Us",
  },
];

function Navbar() {
  const [isActive, setActive] = useState(true);
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className="py-6 shadow-sm shadow-gray">
      <div className="container px-4 m-auto flex justify-between items-center relative">
        <div>
          <p className="text-4xl font-bold text-white">SKF</p>
        </div>
        <button className="lg:hidden" onClick={handleClick}>
          <Menu size={30} color="#ffffff" />
        </button>
        <div
          className={`fixed top-0 ${
            isActive ? "right-[-400px]" : "right-0"
          } w-[300px] px-6 py-10 lg:p-0 lg:w-auto h-screen transition-all bg-[#111223e0] lg:static lg:bg-transparent lg:h-auto`}
        >
          <div className="flex-col flex gap-8 lg:flex-row">
            <button
              className="lg:hidden w-8 self-end mt-[-10px] mr-[-10px]"
              onClick={handleClick}
            >
              <X size={30} color="#ffffff" />
            </button>
            {navLinks.map((navLink) => (
              <a
                className="text-lg text-white"
                href={navLink.link}
                key={Math.random()}
              >
                {navLink.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
