import { BriefcaseBusiness } from "lucide-react";
import TitleSlider from "../Components/Slider";

const services = [
  {
    icon: <BriefcaseBusiness size={50} />,
    title: "service title",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias quaerat ratione repellendus, quisquam inventore
                assumenda animi.`,
  },
  {
    icon: <BriefcaseBusiness size={50} />,

    title: "service title",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias quaerat ratione repellendus, quisquam inventore
                assumenda animi.`,
  },
  {
    icon: <BriefcaseBusiness size={50} />,

    title: "service title",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias quaerat ratione repellendus, quisquam inventore
                assumenda animi.`,
  },
  {
    icon: <BriefcaseBusiness size={50} />,

    title: "service title",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias quaerat ratione repellendus, quisquam inventore
                assumenda animi.`,
  },
  {
    icon: <BriefcaseBusiness size={50} />,

    title: "service title",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias quaerat ratione repellendus, quisquam inventore
                assumenda animi.`,
  },
  {
    icon: <BriefcaseBusiness size={50} />,

    title: "service title",
    description: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias quaerat ratione repellendus, quisquam inventore
                assumenda animi.`,
  },
];

function Services() {
  return (
    <div className="text-center px-4 py-20">
      <h2 className="font-serif mb-20 text-3xl font-bold text-white sm:text-[40px]/[48px]">
        Our services
      </h2>

      <TitleSlider text="What We Offer" />
      <ul className="container mx-auto grid lg:grid-cols-3 gap-8 -m-4 px-4">
        {services.map((service) => {
          return (
            <>
              <li
                data-aos="flip-up"
                data-aos-duration="1200"
                key={Math.random()}
                className=" text-indigo-500 text-lg font-medium p-10 bg-[#686d7624] border border-gray rounded-lg"
              >
                <div className="mb-2">{service.icon}</div>

                <h3 className="uppercase font-thin text-lg mb-4 font-sans">
                  {service.title}
                </h3>
                <p className="text-white text-base">{service.description}</p>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default Services;
