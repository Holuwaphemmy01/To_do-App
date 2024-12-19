import React from 'react';
import './calendar.css';

const Calendar = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString('default', { month: 'long' });
  const year = today.getFullYear();
  const weekday = today.toLocaleString('default', { weekday: 'long' });

  return (
    <div className="calendar">
      <div className="calendar-header">
        <h3>{weekday}</h3>
        <p>{day}, {month} {year}</p>
      </div>
      <div className="calendar-grid">
        <div className="grid-item active">{day}</div>
      </div>
    </div>
  );
};

export default Calendar;
