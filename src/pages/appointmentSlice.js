
import { createSlice } from '@reduxjs/toolkit';

export const appointmentSlice = createSlice({
    name: 'appointment',
    initialState: {
      appointmentData: {}
    },

    reducers: {
      setAppointmentRdx: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      
    }
    
});

//exporto las ACCIONES.....
export const { setAppointmentRdx } = appointmentSlice.actions;

export const appointmentDataCheck = (state) => state.appointment;

export default appointmentSlice.reducer;