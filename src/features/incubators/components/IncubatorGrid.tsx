import IncubatorCard from './IncubatorCard';
import EmptyState from '@/shared/components/EmptyState';
import type { Incubator } from '../types';

interface IncubatorGridProps {
  incubators: Incubator[];
  onClearFilters: () => void;
}

const IncubatorGrid = ({ incubators, onClearFilters }: IncubatorGridProps) => {
  if (incubators.length === 0) {
    return <EmptyState onClearFilters={onClearFilters} message="No incubators found" />;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {incubators.map((incubator, index) => (
        <div
          key={incubator.name}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <IncubatorCard incubator={incubator} />
        </div>
      ))}
    </div>
  );
};

export default IncubatorGrid;

