import { WorkExperience } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import DateRange from "./date-range";

interface WorkShowcaseProps {
  experience: WorkExperience;
  whetherlast: boolean;
}

export default function WorkShowcase({
  experience,
  whetherlast,
}: WorkShowcaseProps) {
  return (
    <div className="group">
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10 shrink-0">
              <AvatarImage src={experience.logo} alt={experience.company} />
              <AvatarFallback>
                {experience.company.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <h3 className="font-semibold tracking-tight line-clamp-1">
              {experience.company}
            </h3>
          </div>
          <DateRange date={experience.years} />
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {experience.description}
        </p>
        {!whetherlast && <Separator className="mt-4" />}
      </div>
    </div>
  );
}
