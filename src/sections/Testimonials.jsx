const feedbacks = [
  {
    image: "https://i.ibb.co/9y7nYCD/image-3.jpg",
    review: `Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.`,
    clientName: "HOLDEN CAULFIELD",
    clientPosition: "Senior Product Designer",
  },
  {
    image: "https://i.ibb.co/9y7nYCD/image-3.jpg",
    review: `Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.`,
    clientName: "HOLDEN CAULFIELD",
    clientPosition: "Senior Product Designer",
  },
  {
    image: "https://i.ibb.co/9y7nYCD/image-3.jpg",
    review: `Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee
                ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut
                adaptogen squid fanny pack vaporware.`,
    clientName: "HOLDEN CAULFIELD",
    clientPosition: "Senior Product Designer",
  },
];

function Testimonials() {
  return (
    <div className="">
      <div className="container px-5 py-20 mx-auto">
        <span className="block mb-4 text-lg font-semibold text-cream text-center">
          Client Testimonials
        </span>
        <h2 className="font-serif mb-16 text-3xl font-bold text-white sm:text-[40px]/[48px] text-center">
          What Our Clients Say....
        </h2>
        <div className="flex flex-wrap gap-10 -m-4 px-4 mb-6">
          {feedbacks.map((feedback) => {
            return (
              <>
                <div
                  key={Math.random()}
                  className="lg:w-[30.5%] lg:mb-0 mb-6 p-8 border border-secondary bg-[#095a6224] rounded-lg"
                >
                  <div className="h-full text-center">
                    <img
                      src={feedback.image}
                      alt="testimonial-image"
                      className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block"
                    />
                    <p className="leading-relaxed text-white">
                      {feedback.review}
                    </p>
                    <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 className="text-gray-900 font-semibold tracking-wider text-sm text-secondary">
                      {feedback.clientName}
                    </h2>
                    <p className="text-white">{feedback.clientPosition}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
