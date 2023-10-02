import React, { useState, useEffect, useMemo } from 'react';

function Form({ addAppointment, selectedAppointment, updateAppointment, isUpdateMode, setIsUpdateMode }) {
  const initialAppointment = useMemo(
    () => ({
      name: '',
      gender: 'Gender',
      age: '',
      phoneNumber: '',
      date: '',
      time: '',
      doctorName: '',
      status: 'Consult',
    }),
    []
  );

  const [appointment, setAppointment] = useState(initialAppointment);

  useEffect(() => {
    if (selectedAppointment && isUpdateMode) {
      setAppointment(selectedAppointment);
    } else {
      setAppointment(initialAppointment);
    }
  }, [selectedAppointment,initialAppointment, isUpdateMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isUpdateMode) {
      updateAppointment(appointment);
      setIsUpdateMode(false);
    } else {
      addAppointment({ ...appointment, id: Date.now().toString() });
    }
    setAppointment(initialAppointment);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  return (
    
    <form onSubmit={handleSubmit} className="form-content">
      <div className="note">
          <p>Welcome to Gradious Doctor Appointment Booking</p>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Patient Name*"
            name="name"
            value={appointment.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group col-md-4">
          <select
            className="form-control"
            name="gender"
            value={appointment.gender}
            onChange={handleInputChange}
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <input
            type="number"
            className="form-control"
            placeholder="Age*"
            name="age"
            value={appointment.age}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number*"
            name="phoneNumber"
            value={appointment.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="date"
            className="form-control"
            placeholder="Date*"
            name="date"
            value={appointment.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group col-md-4">
        <input
            type="time"
            className="form-control"
            placeholder="Time*"
            name="time"
            value={appointment.time}
            onChange={handleInputChange}
            required
        />

        </div>
      </div><div className="form-row">
        <div className="form-group col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Doctor Name"
            name="doctorName"
            value={appointment.doctorName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group col-md-4">
          <select
            className="form-control"
            name="status"
            value={appointment.status}
            onChange={handleInputChange}
          >
            <option value="Consult">Consult</option>
            <option value="Revisit">Revisit</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btnSubmit">
        {isUpdateMode ? 'Update Appointment' : 'Book Appointment'}
      </button>
    </form>
  );
}

export default Form;
