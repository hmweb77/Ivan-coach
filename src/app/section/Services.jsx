
import ParagraphText from "../components/ParagraphText";
import serviceImg1 from "../assets/serviceImg1.png"
import serviceImg2 from "../assets/serviceImg2.png"
import serviceImg3 from "../assets/serviceImg3.png"
import Image from "next/image";

const Services = () => {
	const servicesData = [
		{
			title: "Leadership",
			description: "Enhance your skills in team management, project management, time management, and planning with our tailored coaching sessions designed to boost your efficiency and leadership abilities.",
			image: serviceImg1,
		},
		{
			title: "Career development",
			description: "Navigate career changes, boost your motivation, gain recognition, and handle difficult conversations with confidence through our focused and supportive coaching programs.",
			image: serviceImg2,
		},
		{
			title: "Communication",
			description: "Improve your presentation skills, master public speaking, navigate cultural differences, and give constructive feedback effectively with our expert coaching and training programs.",
			image: serviceImg3,
		},
	]
	return (
		<section id="services">
			<div className="grid  lg:grid-cols-3  shadow-sm border border-black/5 ">
				{servicesData.map((service, index) => (
					<div
						key={index}
						className="flex flex-col md:flex-row md:even:flex-row-reverse lg:flex-col  lg:even:flex-col-reverse">
						<div className="h-[400px] w-full md:w-1/2 lg:w-full bg-neutral flex gap-6 items-center justify-center flex-col px-5 sm:px-20 text-center">
							<h1 className="text-3xl text-Tertiary font-semibold bg-transparent">{service.title}</h1>
							<ParagraphText>{service.description}</ParagraphText>
						</div>
						<Image
							src={service.image}
							alt=""
							className="h-[400px] w-full md:w-1/2 lg:w-full"
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Services;
