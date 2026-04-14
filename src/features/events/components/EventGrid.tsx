import EventCard from './EventCard';
import EmptyState from '@/shared/components/EmptyState';
import type { Event } from '../types';

interface EventGridProps {
  events: Event[];
  onClearFilters: () => void;
}

const EventGrid = ({ events, onClearFilters }: EventGridProps) => {
  if (events.length === 0) {
    return <EmptyState onClearFilters={onClearFilters} message="No events found" />;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event, index) => (
        <div
          key={`${event.name}-${index}`}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <EventCard event={event} />
        </div>
      ))}
    </div>
  );
};

export default EventGrid;

