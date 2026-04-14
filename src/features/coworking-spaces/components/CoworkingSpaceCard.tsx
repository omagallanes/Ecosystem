import { useState } from 'react';
import { ExternalLink, Linkedin, Calendar, MapPin, Map } from 'lucide-react';
import type { CoworkingSpace } from '../types';

interface CoworkingSpaceCardProps {
  coworkingSpace: CoworkingSpace;
}

const CoworkingSpaceCard = ({ coworkingSpace }: CoworkingSpaceCardProps) => {
  const [imageError, setImageError] = useState(false);
  const domain = coworkingSpace.website?.replace(/^https?:\/\//, '').replace(/\/$/, '') || '';
  const faviconUrl = domain ? `https://fetchfavicon.com/i/${domain}?size=64` : '';
  
  return (
    <article className="group relative bg-card rounded-2xl border border-border/60 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
      <div className="flex items-start gap-4 mb-5">
        {imageError ? (
          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-secondary/40 flex items-center justify-center">
            <span className="text-xl font-bold text-primary">{coworkingSpace.name.charAt(0).toUpperCase()}</span>
          </div>
        ) : (
          <img
            src={faviconUrl}
            alt={`${coworkingSpace.name} logo`}
            className="flex-shrink-0 w-10 h-10 rounded-xl object-contain"
            onError={() => setImageError(true)}
          />
        )}

        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-card-foreground truncate mb-1 group-hover:text-primary transition-colors duration-300">
            {coworkingSpace.name}
          </h3>
          {coworkingSpace.city && (
            <p className="text-sm font-medium text-primary/80 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {coworkingSpace.city}
            </p>
          )}
        </div>

        {coworkingSpace.website && (
          <a
            href={coworkingSpace.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-9 h-9 rounded-xl border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 group-hover:scale-110"
            aria-label={`Visit ${coworkingSpace.name} website`}
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      <div className="flex items-center justify-between pt-5 border-t border-border/40">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <div>
            <p className="text-xs text-muted-foreground mb-0.5">Founded</p>
            <p className="text-sm font-semibold text-foreground">{coworkingSpace.foundedYear}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {coworkingSpace.mapLocation && (
            <a
              href={coworkingSpace.mapLocation}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all duration-300"
              aria-label={`View ${coworkingSpace.name} on map`}
            >
              <Map className="w-4 h-4" />
              <span>Map</span>
            </a>
          )}
          {coworkingSpace.linkedin && (
            <a
              href={coworkingSpace.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 border border-transparent hover:border-primary/20 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default CoworkingSpaceCard;

