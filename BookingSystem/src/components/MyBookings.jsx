const MyBookings = () => {
  const bookings = JSON.parse(localStorage.getItem('myBookings') || '[]');

  return (
    <div>
      <h2>📋 My Appointments</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul className="list-group">
          {bookings.map((b, index) => (
            <li className="list-group-item" key={index}>
              {b.name} - {b.date} at {b.time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;
