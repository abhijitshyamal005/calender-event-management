/* eslint-disable react/prop-types */
import  { useState } from 'react';

const EventForm = ({ onSubmit, event }) => {
  const [title, setTitle] = useState(event?.title || '');
  const [description, setDescription] = useState(event?.description || '');
  const [date, setDate] = useState(event?.date || '');
  const [time, setTime] = useState(event?.time || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, date, time });
  };

  return (
    <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
      <form onSubmit={handleSubmit}>
        <h2 className="mb-5 text-2xl font-bold">{event ? 'Edit Event' : 'Create Event'}</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Time</label>
          <input
            type="time"
            className="w-full p-2 mt-1 border border-gray-300 rounded"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full p-2 text-white bg-green-500 rounded hover:bg-green-600">
          {event ? 'Update Event' : 'Create Event'}
        </button>
      </form>
    </div>
  );
};

export default EventForm;
