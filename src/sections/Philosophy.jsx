import { BadgeHelp, BadgeCheck, BadgeDollarSign } from "lucide-react";
import TitleSlider from "../Components/Slider";

const philosophyItems = [
  {
    icon: <BadgeHelp size={60} />,
    title: "Lorem Ipsum Dolor",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    icon: <BadgeCheck size={60} />,
    title: "Lorem Ipsum Dolor",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  {
    icon: <BadgeDollarSign size={60} />,
    title: "Lorem Ipsum Dolor",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
];

function Philosophy() {
  return (
    <div className=" text-center px-4 py-20">
      <h2 className="font-serif mb-20 text-3xl font-bold text-white sm:text-[40px]/[48px]">
        Things we keep in mind
      </h2>

      <TitleSlider text="Our Investment Philosophy" />

      <div className="container mx-auto flex flex-wrap gap-10 -m-4 px-4">
        {philosophyItems.map((philosophyItem) => {
          return (
            <div
              data-aos="zoom-in"
              data-aos-duration="1200"
              key={Math.random()}
              className="flex flex-col items-center lg:w-[30.5%] lg:mb-0 mb-6 p-8 border border-secondary bg-[#095a6224] rounded-lg"
            >
              <div className="mb-6 font-semibold tracking-wider text-sm text-secondary">
                {philosophyItem.icon}
              </div>
              <h2 className="text-xl text-indigo-500 font-thin mb-3">
                {philosophyItem.title}
              </h2>
              <p className="leading-relaxed text-white font-thin text-center">
                {philosophyItem.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Philosophy;
