import Image from "next/image";
import aboutImg1 from "../assets/Ivan.png";

import HeadingText from "../components/HeadingText";
import ParagraphText from "../components/ParagraphText";

const About = () => {
  return (
    <section id="about" className=" px-10  mx-auto  ">
      <div className="flex lg:flex-row flex-col justify-center  gap-20 items-center py-14">
        <Image src={aboutImg1} alt="coach image" />

        <div className="h-full  flex flex-col gap-10">
          <HeadingText>
            Aligning Your Career with Vision and Passion
          </HeadingText>
          <ParagraphText>
            With over 9 years of experience in managing large-scale projects
            across top industries like energy, healthcare, and finance, Ivan
            Moreira helps businesses transform complex challenges into strategic
            success. As a Senior Project Manager, his proven track record of
            delivering high-impact results sets him apart in the telecom and IT
            industries.
          </ParagraphText>
        </div>
      </div>
    </section>
  );
};

export default About;
