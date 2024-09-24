import HeadingText from "../components/HeadingText";
import ParagraphText from "../components/ParagraphText";
import fourNHalfStar  from "../assets/four-half-star.png";
import TestimonialCard from "../components/TestimonialCard";
import Image from "next/image";


const Testimonials = () => {
	const testimonialData = [
		{
			
			name: "Frederico Fonseca",
			jobTitle: "CEO, Outsafe IT",
			comment:
				"Working with Ivan in my past roll was a very rewarding experience, as Ivan is a very good professional and has excellent focus on the projects he leads, and he is also an excellent partner to work with.",
		},
		{
			name: "Abílio Guimarães",
			jobTitle: "Business Manager, Movelpartes",
			comment:
				"I worked with Ivan approximately 2 years in several projects. I must recognised to him the availability to work as a team member, the fantastic relationship with co-workers and clients, the technical acknowledgment, the loyalty, his work availability, etc. In summary, Ivan is a benefit to any team in which he works.",
		},
	
		{
			name: "Luíz Filho",
			jobTitle: "Tech Support Analyst, Mosyle Corporation",
			comment:
				"Ivan Moreira is a great person and an excellent professional. Working with him in class assignments and projects for school was always a great experience because he knows how to be part of a team. He learns very fast and he is extremely dedicated.",
		},
	];
	return (
		<section className="">
			<div className="flex gap-10 lg:flex-row flex-col px-10 lg:w-11/12 mx-auto py-24">
				<div className="lg:w-1/2 ">
					<HeadingText extraStyle="pr-12">See What Our Clients Have Achieved and Get Inspired to Reach Your Own Goals</HeadingText>

					<Image
						src={fourNHalfStar}
						alt="4.5 star rating"
						className="mt-20 mb-2"
					/>
					<ParagraphText>
						4.5 out of 5 stars <span>from over 100 reviews</span>
					</ParagraphText>
				</div>
				<div className="lg:w-1/2  grid gap-10">
					{testimonialData.map((item, index) => (
						<TestimonialCard
							key={index}
							{...item}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
