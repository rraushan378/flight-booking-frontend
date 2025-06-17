import React from 'react';

function FlightList() {
  // Placeholder data
  const flights = [
    { id: 1, from: 'NYC', to: 'LAX', time: '10:00 AM' },
    { id: 2, from: 'NYC', to: 'SFO', time: '2:00 PM' },
  ];

  return (
    <ul>
      {flights.map((flight) => (
        <li key={flight.id}>
          {flight.from} to {flight.to} at {flight.time}
        </li>
      ))}
    </ul>
  );
}

export default FlightList;
