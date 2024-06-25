import Button from "../Components/Button";
import hero_bg from "../assets/hero-bg.jpg";

function Hero() {
  return (
    <div
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${hero_bg})` }}
    >
      <div className="bg-[#01204e78]">
        <div className="flex flex-col items-center px-4 py-36 max-w-[1140px] m-auto">
          <h1
            data-aos="fade-up"
            className="font-serif text-center text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Solid Sky Fund
          </h1>
          <h2 className="text-center text-xl text-white mb-6">
            The Sky's The Limit
          </h2>
          <Button text="Contact Us" link="#" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
