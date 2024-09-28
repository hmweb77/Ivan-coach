import ParagraphText from "./ParagraphText";
import  quote  from "../assets/quote.svg";
import Image from "next/image";



const TestimonialCard = ({ name, jobTitle, comment }) => {
	return (
		<section className="flex md:flex-row flex-col shadow-md rounded-md">
			
			<div className="px-10 py-8 ">
				{/* <Image
					src={quote}
					alt="image"
					className="h-12 w-12 mb-5"
				/> */}
				<ParagraphText extraStyle="text-base mb-5">{comment}</ParagraphText>
				<h2 className="font-semibold text-Tertiary text-lg">{name}</h2>
				<ParagraphText extraStyle="text-sm">{jobTitle}</ParagraphText>
			</div>
		</section>
	);
};

export default TestimonialCard;
