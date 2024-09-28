import Image from "next/image";
import ctaImg  from "../assets/ctaBg.png";
import Button from "../components/Button";
import HeadingText from "../components/HeadingText";
import ParagraphText from "../components/ParagraphText";
import Link from "next/link";

const CTA = () => {
	return (
		<section>
			<div className=" flex-col justify-center items-center text-center py-16  relative lg:flex">
				<HeadingText extraStyle="mb-10 z-10">Book a Free 15-Minute Call</HeadingText>
				<ParagraphText extraStyle="mb-10 z-10">
				We are here to help you reach your goals. Book a free 15-minute call today <br /> to discover how we can support you on your journey.
				</ParagraphText>
				
				<Button zIndex="z-10">
				<Link href="https://calendly.com/ivanmoreira/30min">

					Book Now

				</Link>
					</Button>
				<Image
					src={ctaImg}
					alt="image"
					className="absolute inset-0 z-0 h-full w-full"
				/>
			</div>
		</section>
	);
};

export default CTA;
