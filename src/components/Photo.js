import React from "react";
import Image from "next/image";
import photo from "../public/photo.jpeg";

const Photo = () => {
	return (
		<div className="bg-white h-36 w-36 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded shadow-2xl mx-1">
			<Image
				src={photo}
				objectFit="contain"
				layout="responsive"
				radioGroup="5"
				className="rounded"
			/>
		</div>
	);
};

export default Photo;
