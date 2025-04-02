
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  text: string;
  image?: string;
  className?: string;
}

export function TestimonialCard({ name, text, image, className }: TestimonialCardProps) {
  return (
    <div className={cn(
      "bg-secondary border border-border p-6 rounded-lg shadow-sm",
      className
    )}>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex items-center justify-center">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-xl font-semibold playfair text-primary">{name.charAt(0)}</span>
          )}
        </div>
        <h4 className="font-semibold">{name}</h4>
      </div>
      <p className="text-muted-foreground italic text-sm">{text}</p>
    </div>
  );
}
