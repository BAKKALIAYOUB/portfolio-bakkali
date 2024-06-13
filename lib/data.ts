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
    title: "Implementation of XGBoost for Cancer Classification",
    description: "I implemented XGBoost from scratch using Python and NumPy arrays to classify cancer types. This project involved preprocessing and classifying the Arcene cancer dataset, enhancing my proficiency in the functionalities of XGBoost and the machine learning pipeline. Technologies used for this project included scikit-learn, Python, NumPy, and pandas.",
    link: "https://github.com/",
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
    company: "D3SOFT",
    logo: "/company-logo.png",
    position: "Company 3 Position",
    description: "Web Application for Car Rental Management",
    years: "May, 2023 - Juin, 2023",
  },
];

export const aboutYou = {
  name: "Bakkali Ayoub",
  description:
    "👋 Hi, I am AYoub Bakkali Enthusiastic and motivated first-year Master's student in Intelligence Artificielle and Data Science with a\n" +
      "fervent passion for machine learning. Equipped with a solid foundation in development, backed by 2 months of\n" +
      "professional experience in Web development, I am dedicated to advancing my expertise in the realms of\n" +
      "artificial intelligence and data science. Known for my strong work ethic, I thrive on challenges and am adept at\n" +
      "problem-solving. Additionally, I excel in collaborative environments, leveraging my effective communication\n" +
      "and teamwork skills to achieve shared objectives.",
  yearsOfExperience: ">1 years",
  location: "Morroco, Tangier",
  email: "ayoubbakkali484@gmail.com",
};

export const logoText = "Bakkali AYoub";

export const marketingHeadlines = {
  mainHeadline: "Master Student in Artificiel Intelligence and Data Sciences",
  subHeadline: "Machine Learning Enthusiastic",
};

export const websiteMetadata = {
  title: "BAKKALI AYOUB",
  description: "👋 Hey, Bakkali Ayoub here. Welcome to my portflio",
};
