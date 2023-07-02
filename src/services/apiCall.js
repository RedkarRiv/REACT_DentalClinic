import axios from "axios";

const root = "http://localhost:3000/";

export const bringAllUsers = async () => {
  return await axios.get(`${root}users/all`);
};

console.log(bringAllUsers());

// ASI ENVIAMOS UN BODY POR AXIOS EN UN PROTOCOLO POST

export const loginMe = async (credentials) => {
  return await axios.post(`${root}auth/login`, credentials);
};

export const registerMe = async (newCredentials) => {
  return await axios.post(`${root}auth/register`, newCredentials);
};

export const getOneUser = async (credentialCheck) => {
  return await axios.get(`${root}users/myprofile`, {
    headers: {
      authorization: "Bearer " + credentialCheck,
    },
  });
};

export const getAllAppointmentsByUser = async (credentialCheck) => {
  return await axios.get(`${root}appointment/all`, {
    headers: {
      authorization: "Bearer " + credentialCheck,
    },
  });
};

export const getAllAppointments = async (credentialCheck) => {
    return await axios.get(`${root}appointment/list`, {
      headers: {
        authorization: "Bearer " + credentialCheck,
      },
    });
  };


export const appointMe = async (credentialCheck, newAppointment) => {
    return await axios.post(`${root}appointment/new`, newAppointment, {
        headers: {
            authorization: "Bearer " + credentialCheck,
        }
    })
}



export const editMyAppoint = async (credentialCheck, newEditAppointment, id) => {
  return await axios.put(`${root}appointment/update/${id}`, newEditAppointment, {
      headers: {
          authorization: "Bearer " + credentialCheck,
      }
  })
}



export const editMe = async (credentialCheck, newUserData) => {
  return await axios.put(`${root}users/update`, newUserData, {
      headers: {
          authorization: "Bearer " + credentialCheck,
      }
  })
}
