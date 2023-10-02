import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAppointment, updateAppointment, deleteAppointment, setSelectedAppointment, setIsUpdateMode, } from './appointmentReducer';
import Form from './components/Form';
import AppointmentList from './components/AppointmentList';
import './App.css';

function App() {
  const appointments = useSelector((state) => state.appointments);
  const selectedAppointment = useSelector((state) => state.selectedAppointment);
  const isUpdateMode = useSelector((state) => state.isUpdateMode);
  const dispatch = useDispatch();

  const addAppointmentHandler = (newAppointment) => {
    dispatch(addAppointment(newAppointment));
  };

  const updateAppointmentHandler = (index, updatedAppointment) => {
    dispatch(updateAppointment({ index, updatedAppointment }));
    dispatch(setIsUpdateMode(false));
  };

  const deleteAppointmentHandler = (index) => {
    dispatch(deleteAppointment(index));
    setSelectedAppointment(null);
    setIsUpdateMode(false);
  };

  return (
    <div className="App">
      <Form
        addAppointment={addAppointmentHandler}
        selectedAppointment={selectedAppointment}
        updateAppointment={(updatedAppointment) =>
          updateAppointmentHandler(appointments.indexOf(selectedAppointment), updatedAppointment)
        }
        isUpdateMode={isUpdateMode}
        setIsUpdateMode={(mode) => dispatch(setIsUpdateMode(mode))}
      />
      <AppointmentList
        appointments={appointments}
        setSelectedAppointment={(appointment) => {
          dispatch(setSelectedAppointment(appointment));
          dispatch(setIsUpdateMode(true));
        }}
        deleteAppointment={deleteAppointmentHandler}
      />
    </div>
  );
}

export default App;


// import React, { useState } from 'react';
// import Form from './components/Form';
// import AppointmentList from './components/AppointmentList';
// import './App.css';

// function App() {
//   const [appointments, setAppointments] = useState([]);
//   const [selectedAppointment, setSelectedAppointment] = useState(null);

//   const addAppointmentHandler = (newAppointment) => {
//     setAppointments([...appointments, newAppointment]);
//   };

//   const updateAppointmentHandler = (updatedAppointment) => {
//     const updatedAppointments = appointments.map((appointment) =>
//       appointment.id === updatedAppointment.id ? updatedAppointment : appointment
//     );
//     setAppointments(updatedAppointments);
//     setSelectedAppointment(null);
//   };

//   const deleteAppointmentHandler = (appointmentId) => {
//     const updatedAppointments = appointments.filter(
//       (appointment) => appointment.id !== appointmentId
//     );
//     setAppointments(updatedAppointments);
//     setSelectedAppointment(null);
//   };

//   return (
//     <div className="App">
//       <Form
//         addAppointment={addAppointmentHandler}
//         selectedAppointment={selectedAppointment}
//         updateAppointment={updateAppointmentHandler}
//       />
//       <AppointmentList
//         appointments={appointments}
//         setSelectedAppointment={setSelectedAppointment}
//         deleteAppointment={deleteAppointmentHandler}
//       />
//     </div>
//   );
// }

// export default App;
