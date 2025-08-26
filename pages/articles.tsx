import ArticleCard from "@/components/ArticleCard";
import { Article } from "@/types";
import styles from "@/styles/ArticlesPage.module.css";

interface ArticlesPageProps {
	articles: Article[];
}

const ArticlesPage = ({ articles }: ArticlesPageProps) => {
	return (
		<div className={styles.layout}>
			<h1 className={styles.pageTitle}>My Articles</h1>
			<p className={styles.pageSubtitle}>
				Recent posts from{" "}
				<a
					href="https://medium.com/@rajatmishra343"
					target="_blank"
					rel="noopener"
					className={styles.highlight}
				>
					Medium
				</a>{" "}
				where I share insights and tutorials about web development.
			</p>
			<div className={styles.container}>
				{articles.map((article) => (
					<ArticleCard key={article.id} article={article} />
				))}
			</div>
		</div>
	);
};

export async function getStaticProps() {
	const articles: Article[] = [
		{
			id: "1",
			title: "Function Composition and Currying in JavaScript",
			description:
				"Explore the powerful concepts of function composition and currying in JavaScript. Learn how these functional programming techniques can make your code more modular, reusable, and easier to understand.",
			cover_image: "/screenshot/currying.png",
			url: "https://medium.com/@rajatmishra343/function-composition-and-currying-in-javascript-a8a6934e5548",
			page_views_count: 940,
			public_reactions_count: 1,
			comments_count: 1,
		},
		{
			id: "2",
			title: "Optimize Docker Builds for Node and React Environments",
			description:
				"Learn advanced Docker optimization techniques for Node.js and React applications. Discover how to reduce build times, minimize image sizes, and improve deployment efficiency.",
			cover_image: "/screenshot/docker.jpg",
			url: "https://medium.com/@rajatmishra343/optimize-docker-builds-for-node-and-react-environments-5ab5de90ce06",
			page_views_count: 1480,
			public_reactions_count: 31,
			comments_count: 0,
		},
	];

	return {
		props: { title: "Articles", articles },
		revalidate: 86400, // Update once per day
	};
}

export default ArticlesPage;
