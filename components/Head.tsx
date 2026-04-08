import Head from "next/head";

interface CustomHeadProps {
	title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
	return (
		<Head>
			<title>{title}</title>
			<meta
				name="description"
				content="Software Engineer with over 4 years of experience architecting and implementing scalable distributed systems. Demonstrated expertise in building resilient microservices using Node.js, Go, Python and Spring Boot while maintaining robust performance at scale. I focus on designing fault-tolerant architectures and optimizing systems for maximum performance."
			/>
			<meta
				name="keywords"
				content="rajat mishra, rajat, mishra, developer portfolio, rajat full stack developer, rajat developer, mern stack, rajat mishra portfolio, portfolio"
			/>
			<meta property="og:title" content="Rajat Mishra's Portfolio" />
			<meta
				property="og:description"
				content="Full-stack developer building scalable, high-performance web applications with intuitive user experiences."
			/>
			<meta property="og:image" content="/screenshot/preview_image.png" />
		</Head>
	);
};

export default CustomHead;

CustomHead.defaultProps = {
	title: "Rajat Mishra",
};
