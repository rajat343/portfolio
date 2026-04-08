export interface Project {
	title: string;
	description: string;
	logo: string;
	link: string;
	slug: string;
}

export const projects: Project[] = [
	{
		title: "Portfolio",
		description:
			"A Visual Studio Code themed developer portfolio built with Next.js and CSS Modules.",
		logo: "/logos/vsc.svg",
		link: "https://github.com/rajat343/portfolio",
		slug: "portfolio",
	},
	{
		title: "RecruiTech",
		description:
			"End to end AI recruiting platform with distributed AI agents using CrewAI, orchestrated via Kafka and Airflow, enabling RAG job matching, WebRTC video interviews, gRPC and GraphQL APIs, and Elasticsearch for full-text search.",
		logo: "/logos/recruitech_logo.svg",
		link: "https://github.com/rajat343/RecruiTech",
		slug: "RecruiTech",
	},
	{
		title: "JIRA Automation Using Open AI",
		description:
			"An AI-driven meeting summarization platform using Python and Node.js microservices, leveraging LLMs for transcription and summarization, with SQS for async processing and Jira API integration, deployed on AWS ECS.",
		logo: "/logos/jira.svg",
		link: "https://github.com/rajat343/Jira-Automation",
		slug: "Jira-Automation",
	},
	{
		title: "HLS Video Transcoder",
		description:
			"A video transcoding web app built with FFmpeg and Node.js, implementing HLS with multi-bitrate encoding, segment-based streaming, and manifest generation for adaptive playback.",
		logo: "/logos/ffmpeg.svg",
		link: "https://github.com/rajat343/ffmpeg_hls_video_player",
		slug: "ffmpeg_hls_video_player",
	},
	{
		title: "Restaurant Finding Web App",
		description:
			"A platform using Node.js, MongoDB, React, and Google Maps API for restaurant search, ratings, and reviews, with GCP deployment, load balancing, and auto-scaling.",
		logo: "/logos/restaurant.svg",
		link: "https://github.com/rajat343/restaurant-finder-app",
		slug: "restaurant-finder-app",
	},
	{
		title: "Augmented Reality Business Card App",
		description:
			"A Unity/Vuforia based Augmented and Virtual Reality mobile application in Kotlin and C# that transforms business cards into interactive 3D experiences, delivering detailed, profession-specific information.",
		logo: "/logos/ar.svg",
		link: "https://github.com/rajat343/ar_business_card",
		slug: "ar_business_card",
	},
	{
		title: "Sketch-to-Website Conversion with Deep Learning",
		description:
			"A CNN-LSTM deep learning model using TensorFlow/Keras to transform hand-drawn UI sketches into responsive HTML/CSS websites, achieving 85.6% accuracy in automated code generation.",
		logo: "/logos/tensorflow.svg",
		link: "https://github.com/rajat343/sketch-to-html",
		slug: "sketch-to-html",
	},
	{
		title: "Multi PDF Query Assistant",
		description:
			"Python app using LangChain, OpenAI GPT-4, FAISS, and Streamlit for natural language queries on PDFs, with conversation memory and response caching.",
		logo: "/logos/pdf.svg",
		link: "https://github.com/rajat343/multiple_pdf_qa",
		slug: "multiple_pdf_qa",
	},
	{
		title: "Housing Price Predictor",
		description:
			"A Python machine learning model with NumPy, Pandas, and Scikit-Learn for housing price prediction, leveraging EDA and advanced regression techniques evaluated with MSE/R².",
		logo: "/logos/house.svg",
		link: "https://github.com/rajat343/housing-price-prediction",
		slug: "housing-price-prediction",
	},
];
