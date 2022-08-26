import React from "react";
import Cards from "./Cards";

const Proyects = () => {
	return (
		<section className="mt-20 sm:mt-10 md:mt-0 flex flex-col items-center">
			<h2 className=" bg-white  rounded p-5 text-xl h-6 w-80  flex items-center justify-center  shadow-2xl ">
				Proyectos Desarrollados
			</h2>
			<Cards />
		</section>
	);
};

export default Proyects;
