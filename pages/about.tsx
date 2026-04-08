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
							Software Engineer with 4+ years of experience
							architecting and shipping production systems at
							scale. M.S. in Software Engineering from San Jose
							State University. Deep expertise across the full
							stack — JavaScript/TypeScript, Java, Go, and Python
							— with a proven track record building
							high-availability services on AWS using Kubernetes,
							Docker, Node.js, Django, Spring Boot, and React.
							Thrives in fast-moving Agile teams and brings a
							strong engineering instinct for scalability,
							reliability, and clean system design.
						</p>
					</section>

					<section className={styles.section}>
						<h2 className={styles.sectionTitle}>Experience</h2>

						<div className={styles.experienceBlock}>
							<p className={styles.highlight}>Skydio</p>
							<p className={styles.roleLocation}>
								San Mateo, CA, USA — Software Engineer Intern
								(Jun 2025 – Dec 2025)
							</p>
							<ul className={styles.bulletList}>
								<li>
									Built a real-time subject tracking system
									for the Skydio X-10 autonomous drone using
									Go, Python, and GPT-4, achieving 95%
									accuracy at 60 FPS with multi-threaded
									processing and natural-language prompts.
								</li>
								<li>
									Designed and delivered an LLM-powered
									compensation tool in Python Streamlit using
									LangChain and FAISS to match job
									descriptions across 10K+ roles (200K+
									records), delivering salary insights with
									feedback-driven refinement.
								</li>
								<li>
									Shipped a production offboarding platform
									(Node.js, React, Typescript, PostgreSQL on
									Kubernetes) automating workflows via
									DocuSign and Workday API integrations,
									cutting document creation time by 90%.
								</li>
							</ul>
						</div>
						<br />

						<div className={styles.experienceBlock}>
							<p className={styles.highlight}>Rigi</p>
							<p className={styles.roleLocation}>
								Bengaluru, India — Software Engineer II (Feb
								2023 – Jun 2024)
							</p>
							<ul className={styles.bulletList}>
								<li>
									Led development of an in-house HLS
									transcoding pipeline with FFmpeg on AWS EC2,
									processing 10K+ videos monthly at 2x faster
									speeds while cutting costs by 40% and
									eliminating dual-format overhead.
								</li>
								<li>
									Architected and owned a Redis-based watch
									progress system handling 5M+ concurrent
									devices and 50M+ daily events, enabling
									seamless cross-device video resumption with
									sub-second latency while preventing database
									overload.
								</li>
								<li>
									Redesigned the invoicing system with AWS
									Lambda serverless architecture, cutting
									cloud costs by 80% while auto-scaling to 2M+
									weekly requests with zero infrastructure
									management.
								</li>
								<li>
									Built automated CI/CD pipelines with testing
									and deployment for containerized
									microservices using GitHub Actions, AWS
									CodeDeploy, Jest, and Kubernetes, reducing
									deployment time by 35%.
								</li>
							</ul>
						</div>
						<br />

						<div className={styles.experienceBlock}>
							<p className={styles.highlight}>Cutshort</p>
							<p className={styles.roleLocation}>
								Pune, India — Backend Developer (Aug 2022 – Jan
								2023)
							</p>
							<ul className={styles.bulletList}>
								<li>
									Transformed a legacy mailing system into
									Java Spring Boot microservices with
									independent scaling and deployment,
									achieving 99.9% uptime while processing 1M+
									weekly requests at sub-100ms latency.
								</li>
								<li>
									Implemented Terraform-based Infrastructure
									as Code for AWS (EC2, Lambda, RDS), enabling
									reproducible deployments across staging, and
									production environments and reducing
									provisioning errors by 80%.
								</li>
								<li>
									Optimized MongoDB query performance by 40%
									by consolidating multiple database calls
									into single aggregation pipelines with
									strategic indexing, dramatically reducing
									latency for complex queries.
								</li>
							</ul>
						</div>
						<br />

						<div className={styles.experienceBlock}>
							<p className={styles.highlight}>Mygate</p>
							<p className={styles.roleLocation}>
								Bengaluru, India — Software Developer (Jul 2020
								– Aug 2022)
							</p>
							<ul className={styles.bulletList}>
								<li>
									Developed scalable data pipelines using
									Node.js (Javascript), Kafka, AWS Kinesis,
									and Glue to process 30M+ daily events in
									real-time, enabling analytics dashboards and
									data-driven decision-making for 2M+
									residents.
								</li>
								<li>
									Reduced AWS S3 storage costs by 80% by
									converting JSON data to compressed Apache
									Parquet format, enhancing query performance
									with AWS Athena by 10%.
								</li>
								<li>
									Deployed monitoring tools like Prometheus
									and Grafana on AWS Linux using Docker,
									improving system observability and reducing
									incident resolution time by over 40%.
								</li>
							</ul>
						</div>
					</section>

					<section className={styles.section}>
						<h2 className={styles.sectionTitle}>Beyond Code</h2>
						<p className={styles.paragraph}>
							Outside of programming, I enjoy playing soccer and
							video games, watching basketball and Formula 1,
							listening to calm piano music, or simply relaxing.
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
