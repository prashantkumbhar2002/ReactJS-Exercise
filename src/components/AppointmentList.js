import React from 'react';

function AppointmentList({ appointments, setSelectedAppointment, deleteAppointment }) {
 
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Status</th>
            <th>Appointment</th>
            <th>Phone</th>
            <th>Doctor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment,index) => (
            <tr key={appointment.id}>
              <td className="user-info">
                <div className="user-info__img">
                  <img src="./prof.png" alt="User Img" />
                </div>
                <div className="user-info__basic">
                  <h5 className="mb-0">{appointment.name}</h5>
                  <p className="text-muted mb-0">{appointment.age} yrs, {appointment.gender}</p>
                </div>
              </td>

              {/* <td>
                <h6 className="mb-0">{appointment.name}</h6>
                <small>Age: {appointment.age}</small>
              </td> */}
              <td>
                <span
                  className={`btn ${appointment.status === 'Consult' ? 'btn-success' : 'btn-primary'
                    }`}
                >
                  {appointment.status}
                </span>
              </td>
              <td>
                <h6 className="mb-0">{appointment.time}</h6>
                <small>{appointment.date}</small>
              </td>
              <td>
                <h6 className="mb-0">{appointment.phoneNumber}</h6>
                <a href="#!">
                  <small>Contact</small>
                </a>
              </td>
              <td>
                <h6 className="mb-0">{appointment.doctorName}</h6>
              </td>
              <td>
                <div className="d-flex flex-row justify-content-center align-items-center">
                  <button
                    className="btn btn-primary btn-sm d-flex align-items-center mr-3"
                    onClick={() => setSelectedAppointment(appointment)}
                    
                  >
                    <i className="fa fa-pencil mx-auto"></i>
                  </button>
                  <button
                    className="btn btn-danger btn-sm d-flex align-items-center"
                    onClick={() => deleteAppointment(appointment.id)}
                  >
                    <i className="fa fa-trash mx-auto"></i>
                  </button>
                </div>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentList;
