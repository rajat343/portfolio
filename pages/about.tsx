import styles from "@/styles/AboutPage.module.css";

const AboutPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h1 className={styles.title}>Rajat Mishra</h1>
				<div className={styles.subtitle}>Software Engineer</div>

				<div className={styles.aboutContent}>
					<section className={styles.section}>
						<p className={styles.paragraph}>
							Hey! I&apos;m a software engineer from Bay Area,
							California.
						</p>
						<p className={styles.paragraph}>
							I&apos;m a Masters student in software engineering
							and seasoned software developer with 4+ years of
							experience in Agile and Scrum methodologies. Skilled
							in JavaScript / Typescript, Java, Go, and Python,
							with expertise in frameworks like Node.js, Spring
							Boot, and React. Proficient in AWS, Kubernetes,
							Docker, and database optimization, for both SQL and
							NoSQL databases. Having contributed to startups
							across various growth stages, I excel in fast-paced,
							high-expectation environments and enjoy exploring
							products end-to-end, enabling rapid issue
							identification and resolution.
						</p>
					</section>

					<section className={styles.section}>
						<h2 className={styles.sectionTitle}>Experience</h2>

						<div className={styles.experienceBlock}>
							<p className={styles.highlight}>Skydio</p>
							<p className={styles.roleLocation}>
								San Mateo, CA, USA — Software Developer Intern
								(Jun 2025 – Present)
							</p>
							<ul className={styles.bulletList}>
								<li>
									Built full-stack employee offboarding system
									with Node.js, React, and PostgreSQL on
									Kubernetes using Docker containers,
									integrating DocuSign/Workday APIs to cut
									document creation time by 90%.
								</li>
								<li>
									Developed Databricks dashboards with Python,
									SQL, and HTML/CSS to integrate compensation
									data with market benchmarks, delivering
									interactive visualizations across 15+ job
									families and 200K+ records.
								</li>
								<li>
									Engineered autonomous multi-threaded subject
									tracking system for Skydio X10 drone using
									Go, Python, and GPT-4, enabling real-time
									object identification and tracking via
									natural language prompts with parallel image
									processing and k-nearest neighbors matching.
								</li>
							</ul>
						</div>
						<br />

						<div className={styles.experienceBlock}>
							<p className={styles.highlight}>Rigi</p>
							<p className={styles.roleLocation}>
								India — Software Developer II (Feb 2023 – Jul
								2024)
							</p>
							<ul className={styles.bulletList}>
								<li>
									Reduced video processing costs by 40%+ by
									implementing an in-house HLS transcoder with
									FFmpeg on AWS EC2, eliminating dual-format
									processing overhead.
								</li>
								<li>
									Scaled video watch duration system with
									Redis events, handling data from 5M+ devices
									without overloading the database.
								</li>
								<li>
									Streamlined invoicing system with serverless
									Lambda functions in Go and Python, cutting
									cloud costs by 80% and scaling to 2M+
									requests per week.
								</li>
								<li>
									Devised CI/CD pipelines with GitHub
									Workflows and AWS CodeDeploy, enhancing
									deployment efficiency for containerized
									microservices in Kubernetes by 35%.
								</li>
							</ul>
						</div>
						<br />

						<div className={styles.experienceBlock}>
							<p className={styles.highlight}>Cutshort</p>
							<p className={styles.roleLocation}>
								India — Backend Developer (Aug 2022 – Jan 2023)
							</p>
							<ul className={styles.bulletList}>
								<li>
									Engineered a Java Spring Boot communication
									service with 99.9% uptime, handling 1M+ API
									calls weekly.
								</li>
								<li>
									Transformed legacy mailing system into
									microservices, improving reliability with
									independent scaling and deployment, and
									boosting speed by 60%.
								</li>
								<li>
									Optimized MongoDB queries with aggregation
									and indexing, cutting query time by 40%.
								</li>
							</ul>
						</div>
						<br />

						<div className={styles.experienceBlock}>
							<p className={styles.highlight}>Mygate</p>
							<p className={styles.roleLocation}>
								India — Software Developer (Jul 2020 – Aug 2022)
							</p>
							<ul className={styles.bulletList}>
								<li>
									Implemented data pipelines with Node.js,
									Kafka, AWS Kinesis, and Glue to process 30M+
									daily real-time events for analytics and
									decision-making.
								</li>
								<li>
									Converted AWS S3 data from JSON to Apache
									Parquet, lowering storage costs by 80%+ and
									improving query performance by 10% with AWS
									Athena.
								</li>
								<li>
									Built a CRM using NestJS (TypeScript) and
									BullMQ, boosting task efficiency and
									reducing inventory issues by 30%.
								</li>
							</ul>
						</div>
					</section>

					<section className={styles.section}>
						<h2 className={styles.sectionTitle}>Beyond Code</h2>
						<p className={styles.paragraph}>
							Aside from programming, I like to play soccer, video
							games, watch basketball, f1 etc and listen to calm
							piano music or just laze around.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
};

export async function getStaticProps() {
	return {
		props: { title: "About" },
	};
}

export default AboutPage;
