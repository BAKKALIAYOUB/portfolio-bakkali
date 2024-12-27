import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiScikitlearn,
  SiGit,
  SiDocker,
  SiBootstrap,
  SiTailwindcss,
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiApachehadoop,
  SiApachekafka,
  SiLinux,
  SiCplusplus,
  SiLaravel
} from "react-icons/si";

export const skills = [

  {
    icon: SiNumpy,
    text: "Numpy",
  },
  {
    icon: SiApachekafka,
    text: "Apache Kafka",
  },
  {
    icon: SiScikitlearn,
    text: "Scikit Learn",
  },
  {
    icon: SiApachehadoop,
    text: "Apache Hadoop",
  },
  {
    icon: SiPandas,
    text: "Pandas",
  },
  {
    icon: SiPytorch,
    text: "Torch",
  },
  {
    icon: SiTensorflow,
    text: "TensorFlow",
  },
  {
    icon: SiJavascript,
    text: "JavaScript",
  },
  {
    icon: SiReact,
    text: "React",
  },
  {
    icon: SiNextdotjs,
    text: "Next",
  },
  {
    icon: SiTailwindcss,
    text: "Tailwind",
  },
  {
    icon: SiHtml5,
    text: "HTML5",
  },
  {
    icon: SiCss3,
    text: "CSS3",
  },

  {
    icon: SiPython,
    text: "Python",
  },

  {
    icon: SiMongodb,
    text: "MongoDB",
  },

  {
    icon: SiGit,
    text: "Git",
  },
  {
    icon: SiDocker,
    text: "Docker",
  },

  {
    icon: SiBootstrap,
    text: "Bootstrap",
  },

  {
    icon: SiLinux,
    text: "Linux",
  },
  {
    icon: SiCplusplus,
    text: "C++",
  },
  {
    icon: SiLaravel,
    text: "Laravel",
  },
];

export interface Project {
  title: string;
  description: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Real-Time Tweet Sentiment Analysis for Streaming Data Classification",
    description: "Developing a comprehensive data processing pipeline utilizing Apache Kafka and Apache Spark for real-time analysis and prediction. By leveraging Apache Kafka, I efficiently streamed data to Apache Spark for immediate classification. Within Spark, I implemented a predictive model using Support Vector Machine (SVM) to analyze the incoming data streams and generate real-time insights. Additionally, I designed and integrated a user-friendly dashboard interface for monitoring predictions in real time, providing users with valuable insights into trends and patterns. The project involved the use of technologies such as Apache Kafka, Apache Spark, Docker, MongoDB, Zookeeper, and a machine learning pipeline.",
    link: "https://github.com/BAKKALIAYOUB/Sentiment_Analysis",
  },
  {
    title: "Custome ChatBot with RAG and Fine-tuning",
    description: "I implemented a custom chatbot using a Retrieval-Augmented Generation (RAG) system, designed to provide context-based answers to user questions. This system combines retrieval, reading, and generation capabilities to offer accurate responses. The chatbot features a user-friendly interface where users can input their questions and receive answers generated based on the retrieved context from a vector database. This project leveraged advanced technologies including Langchain, Large Language Models (LLMs), chromadb, Docker, Next.js, RAG, Natural Language Processing (NLP), and Ollama.",
    link: "https://github.com/BAKKALIAYOUB/CHATBOT-RAG",
  },
  {
    title: "Blockchain-Based Secure Medical Record Managment System",
    description: "The \"Blockchain-Based Secure Medical Record Management System\" utilizes blockchain technology to securely manage and store patient medical records, ensuring data integrity, confidentiality, and transparency. By integrating Ethereum smart contracts with IPFS for decentralized storage, the system ensures the immutability of records while allowing secure sharing of data among authorized healthcare professionals. Developed using Next.js for the frontend and Ethers.js for Ethereum interaction, the application provides a user-friendly interface for managing patient information. The system also employs encryption and decentralized authentication to guarantee the highest level of security, offering a transparent and tamper-proof solution to traditional healthcare data management systems.",
    link: "https://github.com/amine-sabbahi/ChainCare-Web3-MedicalRecords-Dapp",
  },
];

export interface WorkExperience {
  company: string;
  logo: string;
  position: string;
  description: string;
  years: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company : "Development of Multi Modal Q&A Chatbot - Vector Analytics",
    logo : "/vector_analystic.png",
    position: "Intern",
    description: "The ChatBot, powered by OpenAI's Language Learning Model (LLM), efficiently handles user queries across various document types. An intelligent LLMRouter directs queries to the appropriate agent based on document format, such as PDF, CSV, DOCX, or Excel files. For tabular data, the Pandas LLM Agent provides robust statistical analysis and calculations. Additionally, Multi-Modal Retrieval-Augmented Generation (RAG) enhances the chatbot’s capabilities, supporting both text and image data to offer a comprehensive, multimodal query-handling experience.",
    years: "Jul, 2024 - Aug, 2024",

  },
  {
    company: "Web Application for Car Rental Management - D3SOFT",
    logo: "/img.png",
    position: "Intern",
    description: "Manage rental agreements seamlessly with options to create, update, or remove contracts as needed. Efficiently administer user accounts, including controlling access levels within the application for enhanced security. The system provides real-time notifications, ensuring timely alerts for contract deadlines and scheduled car repair times. Track and oversee the availability and condition of rental vehicles, and handle reservations and scheduling for customer bookings, keeping every aspect of rental management streamlined and accessible.",
    years: "May, 2023 - Juin, 2023",
  },
];

export const aboutYou = {
  name: "Bakkali Ayoub",
  description:
    "👋 Hi, I am Ayoub Bakkali Machine Learning and AI enthusiast with a deep-rooted passion for solving complex, data-driven challenges, currently\n" +
      "advancing my skills through a Master’s in Artificial Intelligence and Data Science. With hands-on experience deploying\n" +
      "scalable ML models and creating real-time data processing solutions, I bring a blend of technical expertise and strategic\n" +
      "insight to every project. My recent work includes developing an advanced, multi-lingual Chatbot leveraging Retrieval-\n" +
      "Augmented Generation (RAG) and deploying a Real-Time Tweet Sentiment Analysis pipeline, showcasing a strong grasp of\n" +
      "end-to-end machine learning pipelines and natural language processing.",
  yearsOfExperience: ">1 years",
  location: "Morroco, Tangier",
  email: "ayoubbakkali484@gmail.com",
};

export const logoText = "Bakkali Ayoub";

export const marketingHeadlines = {
  mainHeadline: "Master Student in Artificiel Intelligence and Data Sciences",
  subHeadline: "Looking for PFE Internship  in AI/Data Science",
};

export const websiteMetadata = {
  title: "BAKKALI AYOUB",
  description: "👋 Hey, Bakkali Ayoub here. Welcome to my portflio",
};
