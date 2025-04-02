
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
  underlineWidth?: string;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  center = false, 
  className,
  underlineWidth = "w-1/2" 
}: SectionTitleProps) {
  return (
    <div className={cn(
      "mb-10", 
      center && "text-center", 
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
        {title}
        <span className={cn(`absolute -bottom-2 left-0 h-1 bg-barber-gold`, underlineWidth)}></span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
