import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appointments: [],
  selectedAppointment: null,
  isUpdateMode: false,
};

const appointmentSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      state.appointments.push(action.payload);
    },
    // updateAppointment: (state, action) => {
    //     state.appointments = state.appointments.map((appointment) =>
    //       appointment.id === action.payload.id ? action.payload : appointment
    //     );
    //   },
    updateAppointment: (state, action) => {
      const { index, updatedAppointment } = action.payload;
      state.appointments[index] = updatedAppointment;
    },
    // deleteAppointment: (state, action) => {
    //   const index = action.payload;
    // state.appointments.splice(index, 1);
    // console.log(state.appointments.splice(index, 1));
    // },
    deleteAppointment: (state, action) => {
      const appointmentId = action.payload;
      state.appointments = state.appointments.filter(
        (appointment) => appointment.id !== appointmentId
      );
    },
    setSelectedAppointment: (state, action) => {
      state.selectedAppointment = action.payload;
    },
    setIsUpdateMode: (state, action) => {
      state.isUpdateMode = action.payload;
    },
  },
});

export const {addAppointment,updateAppointment,deleteAppointment,setSelectedAppointment,setIsUpdateMode,} = appointmentSlice.actions;

export default appointmentSlice.reducer;
