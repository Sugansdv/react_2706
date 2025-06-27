const appointments = [
  { id: 1, time: '10:00 AM', date: '2025-06-27' },
  { id: 2, time: '11:30 AM', date: '2025-06-27' },
  { id: 3, time: '02:00 PM', date: '2025-06-28' },
];

const AppointmentList = () => (
  <div>
    <h2>📅 Available Appointments</h2>
    <ul className="list-group">
      {appointments.map((apt) => (
        <li className="list-group-item d-flex justify-content-between" key={apt.id}>
          <span>{apt.date} - {apt.time}</span>
          <span className="badge bg-primary">Available</span>
        </li>
      ))}
    </ul>
  </div>
);

export default AppointmentList;
