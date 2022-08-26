import React from "react";

const Presentation = () => {
	return (
		<div className="text-black bg-gray-200 rounded p-5 shadow-2xl mx-1 h-40  sm:h-48  md:h-48    overflow-y-scroll md:overflow-y-hidden">
			<h2 className="text-2xl">Hola, soy Jose!</h2>
			<p className="text-sm">
				Soy desarrollador Frontend {"(JavaScript <3)"}, estudiante autodidacta y
				proximamente técnico en programación.
			</p>
			<p className="text-sm">
				Actualmente me encuentro buscando una oportunidad laboral en el sector,
				en donde pueda desarrollar proyectos y crecer como programador.
			</p>
			<p className="text-sm">
				Mi objetivo es aprender y mejorar cada día y aportar el mayor valor
				posible, con humildad y trabajo mejorar en el arte de escribir codigo y
				crear soluciones.
			</p>
		</div>
	);
};

export default Presentation;
