import { BadgeHelp, BadgeCheck, BadgeDollarSign } from "lucide-react";

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
    <div className="container mx-auto px-4 py-20">
      <span className="block mb-4 text-lg font-semibold text-cream text-center">
        Things we keep in mind
      </span>
      <h2 className="font-serif mb-16 text-4xl font-bold text-white sm:text-[40px]/[48px] text-center">
        Our Investment Philosophy
      </h2>
      <div className="flex flex-wrap gap-10 -m-4 px-4">
        {philosophyItems.map((philosophyItem) => {
          return (
            <>
              <div
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
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Philosophy;
