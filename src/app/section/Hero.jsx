import HeadingText from "../components/HeadingText";
import ParagraphText from "../components/ParagraphText";
import Image from "next/image";
import Button from "../components/Button";
import her from "../assets/ivan-conf-2-res.jpg";


const Hero = () => {
  return (
    <section className="bg-neutral">
      <div className="flex flex-col lg:h-screen gap-10 lg:gap-0  lg:flex-row  ">
        <div className="md:px-20 px-10 py-24  flex justify-center items-center   flex-col gap-10  lg:bg-center lg:basis-8/12 relative bg-transparent">
          <HeadingText extraStyle="z-10 bg-transparent w-full xl:text-6xl">
          Unlock Your Potential and Lead with Confidence
          </HeadingText>
          <ParagraphText extraStyle="lg:pr-24 bg-transparent">
          Join us on a transformational journey to sharpen your leadership, conquer career challenges, and master communication for a life of success and fulfillment.
          </ParagraphText>
          <p className="flex gap-4 items-center w-full font-inter text-lg font-medium bg-transparent z-10">
            <Button>Contact Us</Button>
          </p>
        </div>
        <Image
          src={her}
          alt="image"
          className="lg:basis-4/12  md:h-[705px] md:w-[650px] lg:w-[850px] lg:h-auto mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
