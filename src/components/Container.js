import Header from "./Header";
import Head from "next/head";

const Container = (props) => {
	return (
		<div>
			<Head>
				<title>Jose Rotchen - Porfolio</title>
				<link rel="shortcut icon" href="/logoj.png" />
				<script src="https://cdn.tailwindcss.com"></script>
			</Head>
			<Header />
			<div className="container  mx-auto flex flex-col items-center justify-center ">
				{props.children}
			</div>
		</div>
	);
};

export default Container;
