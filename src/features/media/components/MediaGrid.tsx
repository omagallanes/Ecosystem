import MediaCard from './MediaCard';
import EmptyState from '@/shared/components/EmptyState';
import type { Media, MediaCategory } from '../types';

interface MediaGridProps {
  media: Media[];
  categories: MediaCategory[];
  onClearFilters: () => void;
}

const MediaGrid = ({ media, categories, onClearFilters }: MediaGridProps) => {
  const getCategoryById = (id: number) => categories.find((c) => c.id === id);

  if (media.length === 0) {
    return <EmptyState onClearFilters={onClearFilters} message="No media found" />;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {media.map((item, index) => (
        <div
          key={item.id ?? `${item.title}-${index}`}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <MediaCard
            media={item}
            category={getCategoryById(item.categoryId)}
          />
        </div>
      ))}
    </div>
  );
};

export default MediaGrid;

