import React from "react";
import Feature from "./Feature";
import Image from "next/image";

const Card = (props) => {
	const img = props.img;
	const url = props.url;
	const title = props.title;
	const technologies = props.technologies;
	const code = props.code;
	return (
		<article className="bg-white rounded p-5  flex flex-col justify-center items-center  shadow-2xl w-80 min-h-fit">
			<div className=" flex justify-centers items-center">
				<Image src={img} objectFit="contain" width={200} height={200} />
			</div>
			<h3 className="text-xl">{title}</h3>
			<div className="flex justify-center items-center gap-2">
				<a
					href={url}
					target="_blank"
					className="flex justify-center items-center gap-2"
				>
					<span>Ver Proyecto</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-box-arrow-up-right"
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
						/>
						<path
							fillRule="evenodd"
							d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
						/>
					</svg>
				</a>
				<a
					href={code}
					target="_blank"
					className="flex justify-center items-center gap-2"
				>
					<span>Ver Codigo</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						className="bi bi-code-slash"
						viewBox="0 0 16 16"
					>
						<path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
					</svg>
				</a>
			</div>
			<div>
				{technologies.map((t) => {
					return <Feature key={t} text={t} />;
				})}
			</div>
		</article>
	);
};

export default Card;
