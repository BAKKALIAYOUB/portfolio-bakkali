import { aboutYou } from "@/lib/data";

export default function Sidebar() {
    return (
        <div className="rounded-xl border shadow p-4 w-1/2 h-1/2 text-">
            {/* Title/Name */}
            <p className="font-semibold leading-none tracking-tight mb-2">
                {aboutYou.name}
            </p>
            {/* Description */}
            <p className="text-md text-muted-foreground tracking-tight">
                {aboutYou.description}
            </p>
        </div>
    );
}
