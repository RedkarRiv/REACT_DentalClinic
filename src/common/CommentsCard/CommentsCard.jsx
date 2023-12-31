import React from 'react';
import ("./CommentsCard.css")
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";

export const CommentsCard = () => {
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
            <p className='fw-normal mb-1'>Esto es el comentario de una cita desplegado en la vista en detalle de cada cita concertada por le cliente o por el doctor.</p>
          </td>
          <td>29/12/2023</td>
          <td>
            <div className="viewButtonDesign" onClick={() => navigate("/appointmentdetail")}
>
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
            <p className='fw-normal mb-1'>Esto es el comentario de una cita desplegado en la vista en detalle de cada cita concertada por le cliente o por el doctor.</p>
          </td>
          <td>21/04/2023</td>
          <td>
            <div className="viewButtonDesign" onClick={() => navigate("/userdetail")}>
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
            <p className='fw-normal mb-1'>Esto es el comentario de una cita desplegado en la vista en detalle de cada cita concertada por le cliente o por el doctor.</p>
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
            <p className='fw-normal mb-1'>Esto es el comentario de una cita desplegado en la vista en detalle de cada cita concertada por le cliente o por el doctor.</p>
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
            <p className='fw-normal mb-1'>Esto es el comentario de una cita desplegado en la vista en detalle de cada cita concertada por le cliente o por el doctor.</p>
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
            <p className='fw-normal mb-1'>Esto es el comentario de una cita desplegado en la vista en detalle de cada cita concertada por le cliente o por el doctor.</p>
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
            <p className='fw-normal mb-1'>Esto es el comentario de una cita desplegado en la vista en detalle de cada cita concertada por le cliente o por el doctor.</p>
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
            <p className='fw-normal mb-1'>Esto es el comentario de una cita desplegado en la vista en detalle de cada cita concertada por le cliente o por el doctor.</p>
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
            <p className='fw-normal mb-1'>Esto es el comentario de una cita desplegado en la vista en detalle de cada cita concertada por le cliente o por el doctor.</p>
          </td>

          <td>25/03/2023</td>
          <td>
            <div className="viewButtonDesign" >
              Ver
            </div>
          </td>
        </tr>
      </MDBTableBody>

  );
}