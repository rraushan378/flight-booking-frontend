
// Base URL of your backend API
const BASE_URL = 'https://api.example.com';

// Fetch all flights
export async function getFlights() {
  const response = await fetch(`${BASE_URL}/flights`);
  if (!response.ok) {
    throw new Error('Failed to fetch flights');
  }
  return response.json();
}

// Book a flight
export async function bookFlight(flightId, userData) {
  const response = await fetch(`${BASE_URL}/flights/${flightId}/book`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error('Failed to book flight');
  }
  return response.json();
}

// Example: Cancel a booking
export async function cancelBooking(bookingId) {
  const response = await fetch(`${BASE_URL}/bookings/${bookingId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to cancel booking');
  }
  return response.json();
}
