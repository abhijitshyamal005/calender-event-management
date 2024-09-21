/* eslint-disable react/prop-types */

const EventList = ({ events, onEdit, onDelete }) => {
  return (
    <div className="w-full max-w-2xl p-6 bg-gray-100 rounded shadow-md">
      <h2 className="mb-4 text-2xl font-bold">Your Events</h2>
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event.id} className="p-4 mb-4 bg-white rounded shadow-md">
            <h3 className="text-xl font-semibold">{event.title}</h3>
            <p className="text-gray-600">{event.description}</p>
            <p className="text-gray-500">
              {event.date} at {event.time}
            </p>
            <div className="flex justify-end mt-3">
              <button
                className="p-2 mr-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                onClick={() => onEdit(event)}
              >
                Edit
              </button>
              <button
                className="p-2 text-white bg-red-500 rounded hover:bg-red-600"
                onClick={() => onDelete(event.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No events found.</p>
      )}
    </div>
  );
};

export default EventList;
