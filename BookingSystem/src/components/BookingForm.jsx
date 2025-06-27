import React, { useState } from 'react';

const BookingForm = () => {
  const [form, setForm] = useState({ name: '', date: '', time: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let bookings = JSON.parse(localStorage.getItem('myBookings') || '[]');
    bookings.push(form);
    localStorage.setItem('myBookings', JSON.stringify(bookings));
    setSuccess(true);
  };

  return (
    <div>
      <h2>📝 Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input name="name" className="form-control" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Date</label>
          <input type="date" name="date" className="form-control" required onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Time</label>
          <input type="time" name="time" className="form-control" required onChange={handleChange} />
        </div>
        <button className="btn btn-success">Book</button>
      </form>
      {success && <div className="alert alert-success mt-3">Booking Successful!</div>}
    </div>
  );
};

export default BookingForm;
