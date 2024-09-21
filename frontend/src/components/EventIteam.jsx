/* eslint-disable react/prop-types */

const EventItem = ({ event, onEdit, onDelete }) => {
  return (
    <div className="p-4 mb-3 border rounded shadow">
      <h3 className="text-xl font-semibold">{event.title}</h3>
      <p>{event.description}</p>
      <p>{event.date} at {event.time}</p>
      <div className="flex justify-between mt-3">
        <button className="px-4 py-1 text-white bg-blue-500 rounded" onClick={onEdit}>Edit</button>
        <button className="px-4 py-1 text-white bg-red-500 rounded" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default EventItem;
