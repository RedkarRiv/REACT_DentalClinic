
import axios from 'axios';

const root = "http://localhost:3000/"

export const bringAllUsers = async () => {

    return await axios.get(`users/all`);
};



export const bringAppointment = async () => {

    return await axios.get(`users/appointment/all`);
};  

// ASI ENVIAMOS UN BODY POR AXIOS EN UN PROTOCOLO POST

export const loginMe = async (credentials) => {

    return await axios.post(`${root}auth/login`, credentials);
};