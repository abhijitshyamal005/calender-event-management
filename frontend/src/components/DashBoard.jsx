/* eslint-disable react/prop-types */

import EventList from './EventList';
import EventForm from './EventForm';

const Dashboard = ({ events, onAddEvent, onEditEvent, onDeleteEvent }) => {
  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl">My Calendar</h1>
      <EventForm onSubmit={onAddEvent} />
      <EventList events={events} onEdit={onEditEvent} onDelete={onDeleteEvent} />
    </div>
  );
};

export default Dashboard;
