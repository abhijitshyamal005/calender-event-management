import  { useState, useEffect } from 'react';
import Dashboard from '../components/DashBoard';
import api from '../services/api';

const DashboardPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await api.get('/events');
      setEvents(response.data);
    };

    fetchEvents();
  }, []);

  const handleAddEvent = async (eventData) => {
    const response = await api.post('/events', eventData);
    setEvents([...events, response.data]);
  };

  const handleEditEvent = async (updatedEvent) => {
    await api.put(`/events/${updatedEvent._id}`, updatedEvent);
    setEvents(events.map((event) => (event._id === updatedEvent._id ? updatedEvent : event)));
  };

  const handleDeleteEvent = async (id) => {
    await api.delete(`/events/${id}`);
    setEvents(events.filter((event) => event._id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Dashboard events={events} onAddEvent={handleAddEvent} onEditEvent={handleEditEvent} onDeleteEvent={handleDeleteEvent} />
    </div>
  );
};

export default DashboardPage;
