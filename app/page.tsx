import ActionButton from "@/components/action-button";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProjectShowcase from "@/components/project-showcase";
import SkillOutline from "@/components/skill-outline";
import {Separator} from "@/components/ui/separator";
import WorkShowcase from "@/components/work-showcase";
import {FaPhoneAlt, FaLinkedin} from "react-icons/fa";

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
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <main className="flex-1 px-4 md:px-8 lg:px-16 py-8">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <section id="home" className="space-y-6 mb-12">
                        <div className="space-y-4">
                            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
                                {marketingHeadlines.mainHeadline}
                            </h1>
                            <p className="text-muted-foreground">{marketingHeadlines.subHeadline}</p>
                        </div>

                        <div className="rounded-xl border shadow p-4 md:p-6">
                            <h2 className="font-semibold tracking-tight mb-2">{aboutYou.name}</h2>
                            <p className="text-sm md:text-md text-muted-foreground text-justify">
                                {aboutYou.description}
                            </p>
                        </div>

                        <Separator/>

                        <div className="grid grid-cols-2 md:flex md:justify-between gap-4 items-center">
                            <ActionButton actionText="Hire me"/>
                            <div className="text-center">
                                <h3 className="font-medium">{aboutYou.yearsOfExperience}</h3>
                                <p className="text-xs text-muted-foreground">Experience</p>
                            </div>
                            <div className="text-center">
                                <h3 className="font-medium">{aboutYou.location}</h3>
                                <p className="text-xs text-muted-foreground">Location</p>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                                {skills.map((skill) => (
                                    <SkillOutline key={skill.text} Icon={skill.icon} text={skill.text}/>
                                ))}
                            </div>
                            <p className="text-xs text-muted-foreground">Tech stack</p>
                        </div>
                    </section>

                    {/* Work Section */}
                    <section id="work" className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-6">Professional Experience</h2>
                        <div className="rounded-xl border bg-card shadow">
                            <div className="p-4 md:p-6 space-y-6">
                                {workExperiences.map((experience: WorkExperience, index: number) => (
                                    <WorkShowcase
                                        key={experience.company}
                                        experience={experience}
                                        whetherlast={workExperiences.length === index + 1}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Projects Section */}
                    <section id="projects" className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-6">Academic Projects</h2>
                        <div className="grid gap-5">
                            {projects.map((project: Project) => (
                                <ProjectShowcase key={project.title} project={project}/>
                            ))}
                        </div>
                    </section>



                    {/* Academic Section */}
                    <section id="academic" className="mb-12">
                        <h2 className="text-2xl font-semibold tracking-tight mb-6">
                            Academic Background
                        </h2>
                        <div className="rounded-xl border bg-card shadow">
                            <div className="p-4 md:p-6 space-y-6">
                                {academicExperience.map((experience: AcademicExperience, index: number) => (
                                    <AcademicShowcase
                                        key={experience.title}
                                        experience={experience}
                                        whetherlast={academicExperience.length === index + 1}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact">
                        <h2 className="text-2xl font-semibold tracking-tight mb-6">Contact</h2>
                        <div className="rounded-xl border bg-card shadow p-4 md:p-6">
                            <div className="space-y-4">
                                <a href={`mailto:${aboutYou.email}`}
                                   className="flex items-center text-sm text-muted-foreground hover:text-primary">
                                    <MdEmail className="mr-2"/> {aboutYou.email}
                                </a>
                                <a href="https://github.com/BAKKALIAYOUB"
                                   className="flex items-center text-sm text-muted-foreground hover:text-primary">
                                    <SiGithub className="mr-2"/> BAKKALIAYOUB
                                </a>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <FaPhoneAlt className="mr-2"/> +212694961984
                                </div>
                                <a href="https://www.linkedin.com/in/ayoub-bakkali-874534241/"
                                   className="flex items-center text-sm text-muted-foreground hover:text-primary">
                                    <FaLinkedin className="mr-2"/> BAKKALI AYOUB
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </div>
    );
}