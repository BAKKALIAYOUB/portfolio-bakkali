import {AcademicExperience} from "@/lib/data";
import {Separator} from "./ui/separator";
import DateRange from "./date-range";
import {Avatar, AvatarImage, AvatarFallback} from "./ui/avatar";

interface AcademicShowcaseProps {
    experience: AcademicExperience;
    whetherlast: boolean;
}

export default function AcademicShowcase({
                                             experience,
                                             whetherlast,
                                         }: AcademicShowcaseProps) {
    return (
        <div className="group">
            <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10 shrink-0">
                            <AvatarImage src={experience.logo} alt={experience.faculty}/>
                            <AvatarFallback>
                                {experience.faculty.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                        <div className="space-y-0.5">
                            <h3 className="font-semibold tracking-tight line-clamp-1">
                                {experience.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-1">
                                {experience.faculty} • {experience.location}
                            </p>
                        </div>
                    </div>
                    <DateRange date={experience.years}/>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {experience.description}
                </p>
                {!whetherlast && <Separator className="mt-4"/>}
            </div>
        </div>
    );
}
