import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";


const SingleUser = ({ user: { _id, username, password, role } }) => (
  <Card className="shadow">
    <Card.Body>
      <Card.Title>
        <Row>
          <Col>
            <p className="post-title">{username}</p>
          </Col>
          <Col>
            <p>{password}</p>
          </Col>
          <Col>
            <p>{role}</p>
          </Col>
          <Col className="text-right">
            {/* <ActionButtons url={url} _id={_id} /> */}
          </Col>
        </Row>
      </Card.Title>
    </Card.Body>
  </Card>
);

export default SingleUser;
