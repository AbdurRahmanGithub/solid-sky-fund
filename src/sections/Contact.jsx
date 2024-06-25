import { Mail, PhoneCall, MapPin } from "lucide-react";
import contact_img from "../assets/contact.jpg";

function Contact() {
  return (
    <div className="container mx-auto px-4 pt-20 pb-32">
      <div>
        <span className="block mb-4 text-lg font-semibold text-cream text-center">
          lorem ipsum
        </span>
        <h2 className="font-serif mb-16 text-4xl font-bold text-white sm:text-[40px]/[48px] text-center">
          Get in Touch
        </h2>
        <div className="lg:flex gap-8 bg-[#686d7624] border border-gray px-8 py-20 rounded-lg">
          <div className="w-full px-3 sm:px-4 lg:w-1/2 mb-6 lg:mb-0">
            <img
              className="lg:h-[375px] rounded-lg"
              src={contact_img}
              alt="contact us image"
            />
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <p className="text-white text-lg mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              porro enim reprehenderit voluptatum deleniti corporis sed aperiam
              saepe quidem. Nihil nisi voluptatum debitis beatae veritatis
              accusantium dolores ea, ullam culpa?
            </p>
            <div>
              <div className="mb-2 text-indigo-500">
                <Mail size={30} />
              </div>
              <p className="text-white font-thin text-lg mb-4 font-sans">
                Email:{" "}
                <a
                  href="mailto:dummymailaddress@gmail.com"
                  className="underline hover:text-indigo-500 transition-all"
                >
                  dummymailaddress@gmail.com
                </a>
              </p>
            </div>
            <div>
              <div className="mb-2 text-indigo-500">
                <PhoneCall size={30} />
              </div>
              <p className="text-white font-thin text-lg mb-4 font-sans">
                Phone Number: 000 0000 0000
              </p>
            </div>
            <div>
              <div className="mb-2 text-indigo-500">
                <MapPin size={30} />
              </div>
              <p className="text-white font-thin text-lg mb-4 font-sans">
                Office location: lorem, ipsum-2240, loremIpsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
