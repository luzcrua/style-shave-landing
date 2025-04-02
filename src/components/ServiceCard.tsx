
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  price: string;
  description?: string;
  className?: string;
  featured?: boolean;
}

export function ServiceCard({ title, price, description, className, featured = false }: ServiceCardProps) {
  return (
    <div 
      className={cn(
        "service-card", 
        featured && "border-barber-gold bg-primary/10 dark:bg-primary/5",
        className
      )}
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold playfair">{title}</h3>
        <span className={cn(
          "font-bold text-primary",
          featured && "text-barber-gold"
        )}>{price}</span>
      </div>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
