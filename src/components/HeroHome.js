import React from "react";
import Feature from "./Feature";
import Photo from "./Photo";
import Presentation from "./Presentation";

const HeroHome = () => {
	return (
		<section className="container grid grid-cols-2 grid-rows-2 gap-2 items-start justify-center justify-items-center content-center mt-5  xl:w-4/5">
			<div className="col-start-1 row-start-1 sm:row-start-1 sm:row-end-3s max-h-fit w-full flex justify-center sm:justify-end">
				<Photo />
			</div>
			<div className="sm:col-start-2 sm:row-start-2 flex flex-wrap gap-1 sm:h-10 max-h-fit">
				<Feature text="HTML" />
				<Feature text="CSS" />
				<Feature text="Responsive Websites" />
				<Feature text="Bootstrap CSS" />
				<Feature text="Tailwind CSS" />
				<Feature text="ReactJS" />
				<Feature text="NodeJS" />
				<Feature text="NextJS" />
				<Feature text="TypeScript" />
				<Feature text="Firebase" />
				<Feature text="Parcel" />
				<Feature text="Webpack" />
			</div>
			<div className="col-start-1 col-end-3 sm:col-start-2 sm:row-start-1 max-h-fit">
				<Presentation />
			</div>
		</section>
	);
};

export default HeroHome;
