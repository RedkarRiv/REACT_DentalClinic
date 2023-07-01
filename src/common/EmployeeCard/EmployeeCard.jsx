import "./EmployeeCard.css";
import { MDBTableBody, MDBBadge } from "mdb-react-ui-kit";

export const EmployeeCard = ({
  id,
  name,
  surname,
  email,
  cp,
  phone,
  avatar,
  birth_date,
  createdAt,
  dni,
}) => {
  return (
    <MDBTableBody className="w-100 allUsesTextDesign" key={id}>
      <tr>
        <td>
          <div className="ms-3">
            <div className="fw-bold mb-1 d-flex justify-content-start">
              <p>
                {id} {name} {surname}
              </p>
            </div>
          </div>
        </td>
        <td>
          <div className="d-flex align-items-center justify-content-center">
            <img
              src={avatar}
              alt="Avatar"
              style={{ width: "	2.75em", height: "2.75em" }}
              className="rounded-circle"
            />
          </div>
        </td>
        <td>
          <div className="ms-3">
            <div className="fw-bold mb-1">
              <p>{email}</p>
            </div>
          </div>
        </td>
        <td>
          <div className="ms-3">
            <div className="fw-bold mb-1">
              <p>{phone}</p>
            </div>
          </div>
        </td>
        <td className="mb-1">
        <p>{dni}</p>
          </td>
        <td>
          <div className="viewButtonDesign">Ver</div>
        </td>
      </tr>
    </MDBTableBody>
  );
};
