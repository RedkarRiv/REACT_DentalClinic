import "./EmployeeCard.css";
import {
  MDBTableBody,
  MDBBadge,
} from "mdb-react-ui-kit";

export const EmployeeCard = ({id, name, surname, email, cp, phone, avatar, birth_date}) => {
  return (


<MDBTableBody className="w-100" key={id}>
            <tr>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={avatar}
                    alt="Avatar"
                    style={{ width: "	2.75em", height: "2.75em" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <div className="fw-bold mb-1">
                      <p>{id}
                        {" "}
                        {name}{" "}
                        {surname}
                      </p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{cp}</p>
              </td>
              <td>
              </td>
              <td className="dateAppointmentDesign">
                {" "}
                {birth_date}{" "}
              </td>
              <td>
                <div
                  className="viewButtonDesign"
                >
                  Ver
                </div>
              </td>
            </tr>
          </MDBTableBody>

  );
};


