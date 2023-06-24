
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      credentials: {}
    },
    reducers: {
      login: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
      userout: (state, action) => {
        return {
          ...state,
          credentials: {}
        }
      }
      
    }
    
});

//exporto las ACCIONES.....
export const { login, userout } = userSlice.actions;

export const userDataCheck = (state) => state.user;

export default userSlice.reducer;