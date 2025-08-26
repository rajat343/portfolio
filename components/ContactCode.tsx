import styles from "@/styles/ContactCode.module.css";

const contactItems = [
	{
		social: "email",
		link: "rajatmishra343@gmail.com",
		href: "mailto:rajatmishra343@gmail.com",
	},
	{
		social: "github",
		link: "rajat343",
		href: "https://github.com/rajat343",
	},
	{
		social: "linkedin",
		link: "rajatmishra343",
		href: "http://linkedin.com/in/rajatmishra343",
	},
	{
		social: "medium",
		link: "@rajatmishra343",
		href: "https://medium.com/@rajatmishra343",
	},
];

const ContactCode = () => {
	return (
		<div className={styles.code}>
			<p className={styles.line}>
				<span className={styles.className}>.contact_info</span> &#123;
			</p>
			{contactItems.map((item, index) => (
				<p className={styles.line} key={index}>
					&nbsp;&nbsp;&nbsp;{item.social}:{" "}
					<a href={item.href} target="_blank" rel="noopener">
						{item.link}
					</a>
					;
				</p>
			))}
			<p className={styles.line}>&#125;</p>
		</div>
	);
};

export default ContactCode;
