import React from "react";
import Card from "./Card";
import wiede from "../public/logo.png";
import tijeras from "../public/tijeras.png";
import tateti from "../public/tateti.png";

const Cards = () => {
	return (
		<section className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-3 items-start justify-center justify-items-center content-center mt-5 mb-5">
			<Card
				img={wiede}
				url="https://wiedeasociados.com/"
				title="Wiede y Asociados"
				code="https://github.com/joserot/wiedeasociados"
				technologies={["React", "Bootstrap", "NextJS"]}
			/>
			<Card
				img={tateti}
				url="https://joserot.github.io/tateti/"
				title="TATETI"
				code="https://github.com/joserot/tateti"
				technologies={["TypeScript", "HTML", "CSS", "Parcel"]}
			/>
			<Card
				img={tijeras}
				url="https://joserot.github.io/piedra-papel-tijera/"
				title="Piedra papel o tijeras"
				code="https://github.com/joserot/piedra-papel-tijera/tree/master"
				technologies={["TypeScript", "HTML", "CSS", "Parcel"]}
			/>
		</section>
	);
};

export default Cards;
