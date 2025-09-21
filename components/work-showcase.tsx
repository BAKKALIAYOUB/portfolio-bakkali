// WorkShowcase.tsx
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
          <div className="flex items-start sm:items-center space-x-3">
            <Avatar className="h-10 w-10 shrink-0">
              {experience.logo ? (
                <AvatarImage src={experience.logo} alt={experience.company} />
              ) : (
                <AvatarFallback>
                  {experience.company.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>

            <div className="min-w-0">
              <h3 className="font-semibold tracking-tight text-sm sm:text-base line-clamp-1">
                {experience.company}
              </h3>

              {/* Position (job title) */}
              {experience.position && (
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 line-clamp-1">
                  {experience.position}
                </p>
              )}
            </div>
          </div>

          {/* Date range stays on the right for wide screens */}
          <DateRange date={experience.years} />
        </div>

        {/* Description (the part you pointed out I missed) */}
        {experience.description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {experience.description}
          </p>
        )}

        {!whetherlast && <Separator className="mt-4" />}
      </div>
    </div>
  );
}
