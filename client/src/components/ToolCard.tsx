import { Tool } from "@/data/tools";
import { useLanguage } from "@/contexts/LanguageContext";
import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const { t } = useLanguage();

  return (
    <div className="group relative overflow-hidden rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      {/* Badge */}
      {tool.badge && (
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            {tool.badge}
          </span>
        </div>
      )}

      {/* Image Container */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
        <img
          src={tool.image}
          alt={tool.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Header */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-foreground mb-1">{tool.name}</h3>
          <p className="text-xs font-medium text-primary uppercase tracking-wide">{tool.category}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {tool.description}
        </p>

        {/* Features */}
        <div className="mb-4 flex flex-wrap gap-1">
          {tool.features.slice(0, 2).map((feature, idx) => (
            <span key={idx} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
              {feature}
            </span>
          ))}
          {tool.features.length > 2 && (
            <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
              +{tool.features.length - 2}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(tool.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({tool.reviews})</span>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-foreground">{tool.price}</span>
          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-1"
          >
            <a href={tool.affiliateLink} target="_blank" rel="noopener noreferrer">
              {t("toolCard.access")}
              <ExternalLink size={14} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
