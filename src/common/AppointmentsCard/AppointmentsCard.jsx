import React from 'react';
import ("./AppointmentsCard.css")
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";

export const AppointmentsCard = () => {
    const navigate = useNavigate();

  return (
      <MDBTableBody className="w-100">
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://www.shareicon.net/data/512x512/2016/08/18/813847_people_512x512.png'
                alt=''
                style={{ width: '	2.75em', height: '2.75em' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
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
                style={{ width: '	2.75em', height: '2.75em' }}

                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Alex Ray</p>
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
                style={{ width: '	2.75em', height: '2.75em' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
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
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://www.shareicon.net/data/512x512/2016/08/18/813847_people_512x512.png'
                alt=''
                style={{ width: '	2.75em', height: '2.75em' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
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
                style={{ width: '	2.75em', height: '2.75em' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Alex Ray</p>
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
                style={{ width: '	2.75em', height: '2.75em' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
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
        <tr>
          <td>
            <div className='d-flex align-items-center'>
              <img
                src='https://www.shareicon.net/data/512x512/2016/08/18/813847_people_512x512.png'
                alt=''
                style={{ width: '	2.75em', height: '2.75em' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>John Doe</p>
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
                style={{ width: '	2.75em', height: '2.75em' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Alex Ray</p>
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
                style={{ width: '	2.75em', height: '2.75em' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>Kate Hunington</p>
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
            <div className="viewButtonDesign" onClick={() => navigate("/userdetail")}>
              Ver
            </div>
          </td>
        </tr>
      </MDBTableBody>
  
  );
}