import ActionButton from "@/components/action-button";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProjectShowcase from "@/components/project-showcase";
import SkillOutline from "@/components/skill-outline";
import {Separator} from "@/components/ui/separator";
import WorkShowcase from "@/components/work-showcase";
import {FaPhoneAlt, FaLinkedin, FaMapMarkerAlt, FaClock} from "react-icons/fa";

import {
    Project,
    WorkExperience,
    aboutYou,
    marketingHeadlines,
    projects,
    skills,
    workExperiences,
    academicExperience, AcademicExperience
} from "@/lib/data";
import {MdEmail} from "react-icons/md";
import {SiGithub} from "react-icons/si";
import AcademicShowcase from "@/components/academix-showcase";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/30">
            <Navbar/>

            <main className="flex-1">
                <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">

                    {/* Hero Section - Full Width with Split Layout */}
                    <section id="home" className="mb-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                            {/* Left Side - Content */}
                            <div className="space-y-8">
                                <div className="space-y-6">
                                    <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                        👋 Welcome to my portfolio
                                    </div>

                                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                                        <span className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent">
                                            {marketingHeadlines.mainHeadline}
                                        </span>
                                    </h1>

                                    <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                                        {marketingHeadlines.subHeadline}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-4">
                                    <ActionButton actionText="Hire me"/>
                                    <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-colors">
                                        Download CV
                                    </button>
                                </div>

                                {/* Stats Cards */}
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-4 border border-white/20 dark:border-slate-700/30">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                                <FaClock className="text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">{aboutYou.yearsOfExperience}</h3>
                                                <p className="text-sm text-muted-foreground">Experience</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl p-4 border border-white/20 dark:border-slate-700/30">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                                                <FaMapMarkerAlt className="text-green-500" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">{aboutYou.location}</h3>
                                                <p className="text-sm text-muted-foreground">Location</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Profile Card */}
                            <div className="lg:flex justify-center">
                                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/30 max-w-md w-full">
                                    <div className="text-center space-y-6">
                                        <div className="w-32 h-32 bg-gradient-to-br from-primary to-purple-600 rounded-full mx-auto flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                                            {aboutYou.name.split(' ').map(n => n[0]).join('')}
                                        </div>

                                        <div>
                                            <h2 className="text-2xl font-bold mb-2">{aboutYou.name}</h2>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {aboutYou.description}
                                            </p>
                                        </div>

                                        {/* Skills Preview */}
                                        <div className="space-y-3">
                                            <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                                                Core Skills
                                            </h3>
                                            <div className="flex flex-wrap gap-2 justify-center">
                                                {skills.slice(0, 6).map((skill) => (
                                                    <span key={skill.text} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                                                        {skill.text}
                                                    </span>
                                                ))}
                                                {skills.length > 6 && (
                                                    <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                                                        +{skills.length - 6} more
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Skills Section - Full Width Grid */}
                    <section className="mb-16">
                        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/30">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
                                <p className="text-muted-foreground max-w-2xl mx-auto">
                                    A comprehensive overview of the technologies and tools I work with
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {skills.map((skill) => (
                                    <div key={skill.text} className="group">
                                        <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-700 dark:to-slate-800 rounded-xl p-4 border border-slate-200/50 dark:border-slate-600/30 hover:shadow-lg hover:scale-105 transition-all">
                                            <SkillOutline Icon={skill.icon} text={skill.text}/>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Two Column Layout for Experience & Projects */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">

                        {/* Work Experience */}
                        <section id="work">
                            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-slate-700/30 overflow-hidden">
                                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                                    <h2 className="text-2xl font-bold mb-2">Professional Experience</h2>
                                    <p className="text-blue-100">My career journey and achievements</p>
                                </div>

                                <div className="p-6 space-y-6">
                                    {workExperiences.map((experience: WorkExperience, index: number) => (
                                        <div key={experience.company} className="relative">
                                            {index > 0 && <div className="absolute -top-3 left-4 w-0.5 h-3 bg-gradient-to-b from-primary/20 to-transparent"></div>}
                                            <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-700/50 dark:to-slate-800/50 rounded-xl p-4 border border-slate-200/50 dark:border-slate-600/30">
                                                <WorkShowcase
                                                    experience={experience}
                                                    whetherlast={workExperiences.length === index + 1}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Academic Background */}
                        <section id="academic">
                            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-slate-700/30 overflow-hidden">
                                <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 text-white">
                                    <h2 className="text-2xl font-bold mb-2">Academic Background</h2>
                                    <p className="text-green-100">Education and learning journey</p>
                                </div>

                                <div className="p-6 space-y-6">
                                    {academicExperience.map((experience: AcademicExperience, index: number) => (
                                        <div key={experience.title} className="relative">
                                            {index > 0 && <div className="absolute -top-3 left-4 w-0.5 h-3 bg-gradient-to-b from-green-500/20 to-transparent"></div>}
                                            <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-700/50 dark:to-slate-800/50 rounded-xl p-4 border border-slate-200/50 dark:border-slate-600/30">
                                                <AcademicShowcase
                                                    experience={experience}
                                                    whetherlast={academicExperience.length === index + 1}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Projects Section - Full Width */}
                    <section id="projects" className="mb-16">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                A showcase of my academic and personal projects demonstrating my skills and creativity
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {projects.map((project: Project, index: number) => (
                                <div key={project.title} className={`${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} lg:flex items-center gap-8`}>
                                    <div className="lg:flex-1">
                                        <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 dark:border-slate-700/30 shadow-lg hover:shadow-xl transition-shadow">
                                            <ProjectShowcase project={project}/>
                                        </div>
                                    </div>
                                    <div className="lg:w-2 flex justify-center">
                                        <div className="w-4 h-4 bg-gradient-to-br from-primary to-purple-600 rounded-full shadow-lg"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Contact Section - Centered Card */}
                    <section id="contact" className="mb-16">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-gradient-to-br from-slate-900 to-blue-900 dark:from-slate-800 dark:to-blue-800 rounded-3xl p-8 text-white shadow-2xl">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
                                    <p className="text-slate-300 max-w-2xl mx-auto">
                                        Ready to bring your ideas to life? Get in touch and let's discuss your next project.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <a href={`mailto:${aboutYou.email}`}
                                       className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors group">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                                <MdEmail className="text-white group-hover:scale-110 transition-transform"/>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">Email</h3>
                                                <p className="text-sm text-slate-300 break-all">{aboutYou.email}</p>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="https://github.com/BAKKALIAYOUB"
                                       className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors group">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                                <SiGithub className="text-white group-hover:scale-110 transition-transform"/>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">GitHub</h3>
                                                <p className="text-sm text-slate-300">BAKKALIAYOUB</p>
                                            </div>
                                        </div>
                                    </a>

                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 group">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                                <FaPhoneAlt className="text-white group-hover:scale-110 transition-transform"/>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">Phone</h3>
                                                <p className="text-sm text-slate-300">+212694961984</p>
                                            </div>
                                        </div>
                                    </div>

                                    <a href="https://www.linkedin.com/in/ayoub-bakkali-874534241/"
                                       className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors group">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                                                <FaLinkedin className="text-white group-hover:scale-110 transition-transform"/>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">LinkedIn</h3>
                                                <p className="text-sm text-slate-300">BAKKALI AYOUB</p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer/>
        </div>
    );
}