import React from "react";

const Feature = (props) => {
	const text = props.text;

	return (
		<span className="text-black bg-white hover:bg-gray-300 rounded p-1 text-xs h-6 shadow-2xl">
			{text}
		</span>
	);
};

export default Feature;
