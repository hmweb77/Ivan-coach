import React from "react";



const HeadingText = ({ children, extraStyle }) => {
	return (
		<h1
			className={`text-3xl sm:text-4xl md:text-5xl text-PrimaryTextColor font-semibold leading-tight sm:leading-tight md:leading-tight xl:leading-tight ${extraStyle}`}>
			{children}
		</h1>
	);
};

export default HeadingText;
