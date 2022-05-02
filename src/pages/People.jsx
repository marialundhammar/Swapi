import swAPI from '../services/swAPI'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'


const People = () => {

    const [people, setPeople] = useState("")
    const [page, setPage] = useState(1)

    // Get people from api 
    useEffect(() => {
        const getPeople = async () => {
            const data = await swAPI.getPeople(page)
            setPeople(data)
        }
        getPeople();
    }, [page])

    return (

        <>
            <Row xs={1} md={3} className="g-4">
                {people &&
                    people.results.map((people, i) => (
                        <div key={i}>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Header as="h5">{people.name}</Card.Header>
                                        <ListGroup>
                                            <ListGroup.Item> Birth year: {people.birth_year}</ListGroup.Item>
                                            <ListGroup.Item> Eye color: {people.eye_color}</ListGroup.Item>
                                            <ListGroup.Item>Gener: {people.gender}</ListGroup.Item>
                                            <Button variant="primary" as={Link} to={`/people/${swAPI.getIdFromUrl(people.url)}`}>Read more</Button>
                                        </ListGroup>

                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>


                    ))}
            </Row>

            <div className='d-flex justify-content-between align-items-center p-4'>
                <Button
                    onClick={() => setPage(prevValue => prevValue - 1)}
                    disabled={page === 1}
                    variant="primary">
                    Prev
            </Button>
                <p>{page}</p>
                <Button
                    disabled={people.next === null}
                    onClick={() => setPage(prevValue => prevValue + 1)}
                    variant="primary"
                > Next
            </Button>
            </div>

        </>


    )
}


export default People; 