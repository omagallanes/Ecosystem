import CoworkingSpaceCard from './CoworkingSpaceCard';
import EmptyState from '@/shared/components/EmptyState';
import type { CoworkingSpace } from '../types';

interface CoworkingSpaceGridProps {
  coworkingSpaces: CoworkingSpace[];
  onClearFilters: () => void;
}

const CoworkingSpaceGrid = ({ coworkingSpaces, onClearFilters }: CoworkingSpaceGridProps) => {
  if (coworkingSpaces.length === 0) {
    return <EmptyState onClearFilters={onClearFilters} message="No co-working spaces found" />;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {coworkingSpaces.map((coworkingSpace, index) => (
        <div
          key={coworkingSpace.name}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <CoworkingSpaceCard coworkingSpace={coworkingSpace} />
        </div>
      ))}
    </div>
  );
};

export default CoworkingSpaceGrid;

