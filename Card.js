
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const CustomCard = ({ geoData }) => {
    return (
        <Card style={{ width: '39rem' }}>
        <Card.Img variant="top" src={`https://flagcdn.com/w640/${geoData.location.country.toLowerCase()}.png`} />
            <Card.Body>
            <Card.Title>My IP Address</Card.Title>
            <Card.Text>
            <p>{geoData.ip}</p>
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
        </Card>
    )
}

export default CustomCard