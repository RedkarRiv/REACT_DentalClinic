import React from 'react';
import ("./AppointmentsCard.css")
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

export const AppointmentsCard = () => {
  return (
   

      <MDBTableBody>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://www.shareicon.net/data/512x512/2016/08/18/813847_people_512x512.png'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
                <p className='text-muted mb-0'>john.doe@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Consulta básica</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              Concertada
            </MDBBadge>
          </td>
          <td>29/12/2023</td>
          <td>
            <div className="viewButtonDesign">
              Ver
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://www.shareicon.net/data/512x512/2016/08/18/813847_people_512x512.png'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Alex Ray</p>
                <p className='text-muted mb-0'>alex.ray@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Sesion ortodoncía</p>
          </td>
          <td>
            <MDBBadge color='primary' pill>
              Realizada
            </MDBBadge>
          </td>
          <td>21/04/2023</td>
          <td>
            <div className="viewButtonDesign">
              Ver
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://www.shareicon.net/data/512x512/2016/08/18/813847_people_512x512.png'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
                <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Extracción de muela</p>
          </td>
          <td>
            <MDBBadge color='danger' pill>
              Cancelada
            </MDBBadge>
          </td>
          <td>25/03/2023</td>
          <td>
            <div className="viewButtonDesign">
              Ver
            </div>
          </td>
        </tr>
      </MDBTableBody>
  
  );
}