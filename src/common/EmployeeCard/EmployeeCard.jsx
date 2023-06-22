import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./EmployeeCard.css";

export const EmployeeCard = ({id, name, surname, email, address, phone}) => {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{id} {name} {surname}</Card.Title>
        <Card.Text>

        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{email}</ListGroup.Item>
        <ListGroup.Item>{address}</ListGroup.Item>
        <ListGroup.Item>{phone}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="d-flex justify-content-center">
        <Card.Link href="#">Ver en detalle</Card.Link>
        <Card.Link href="#">Agendar cita</Card.Link>
      </Card.Body>
    </Card>
  );
};



{/* <EmployeeCard
id={user.id}
name={user.name}
surname={user.surname}
email={user.email} */}