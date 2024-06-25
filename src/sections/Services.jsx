import { BriefcaseBusiness } from "lucide-react";

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
    <div className="container mx-auto px-4 py-20">
      <span className="block mb-4 text-lg font-semibold text-cream text-center">
        Our services
      </span>
      <h2 className="font-serif mb-16 text-4xl font-bold text-white sm:text-[40px]/[48px] text-center">
        What We Offer
      </h2>
      <ul className="grid lg:grid-cols-3 gap-8 -m-4 px-4">
        {services.map((service) => {
          return (
            <>
              <li
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
