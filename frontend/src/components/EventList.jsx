/* eslint-disable react/prop-types */
import EventItem from './EventIteam';

const EventList = ({ events, onEdit, onDelete }) => {
  return (
    <div>
      {events.length > 0 ? (
        events.map((event) => (
          <EventItem key={event._id} event={event} onEdit={() => onEdit(event)} onDelete={() => onDelete(event._id)} />
        ))
      ) : (
        <p>No events available</p>
      )}
    </div>
  );
};

export default EventList;
