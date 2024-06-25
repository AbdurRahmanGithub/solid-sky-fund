import Button from "../Components/Button";
function About() {
  return (
    <div className="py-24">
      <div className=" p-8 rounded-lg bg-[#686d7624] border border-gray container m-auto lg:flex gap-8 items-center">
        <div className="w-full px-3 sm:px-4 lg:w-1/3">
          <div className=" my-4">
            <img
              src="https://i.ibb.co/9y7nYCD/image-3.jpg"
              alt=""
              className="w-full rounded-2xl"
            />
          </div>
        </div>

        <div className="w-full px-4 lg:w-2/3">
          <div className="mt-10 lg:mt-0">
            <span className="block mb-4 text-lg font-semibold text-cream">
              Why Choose Us
            </span>
            <h2 className="font-serif mb-5 text-3xl font-bold text-white sm:text-[40px]/[48px]">
              Lorem ipsum dolor sit amet....
            </h2>
            <p className="mb-5 text-base text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less.
            </p>
            <p className="mb-8 text-base text-white">
              A domain name is one of the first steps to establishing your
              brand. Secure a consistent brand image with a domain name that
              matches your business.
            </p>
            <p className="mb-8 text-base text-white">
              A domain name is one of the first steps to establishing your
              brand. Secure a consistent brand image with a domain name that
              matches your business.
            </p>
            <p className="mb-12 text-base text-white">
              A domain name is one of the first steps to establishing your
              brand. Secure a consistent brand image with a domain name that
              matches your business.
            </p>
            <Button text="Contact Us" link="#" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
