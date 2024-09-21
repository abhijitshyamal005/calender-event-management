/* eslint-disable react/prop-types */
import  { useState } from 'react';

const EventForm = ({ onSubmit, initialData = {} }) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [description, setDescription] = useState(initialData.description || '');
  const [date, setDate] = useState(initialData.date || '');
  const [time, setTime] = useState(initialData.time || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, date, time });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        className="w-full p-2 mb-3 border rounded"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="w-full p-2 mb-3 border rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        className="w-full p-2 mb-3 border rounded"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        className="w-full p-2 mb-3 border rounded"
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button className="w-full p-2 text-white bg-green-500 rounded">
        Submit
      </button>
    </form>
  );
};

export default EventForm ;