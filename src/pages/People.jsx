
import swAPI from '../services/swAPI'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'


const People = () => {

    const [people, setPeople] = useState("")
    const [page, setPage] = useState(1)

    const getPeople = async () => {
        const data = await swAPI.getPeople(page)
        setPeople(data)
        console.log(data.next)

    }

    // Get movies from api when component is first mounted
    useEffect(() => {
        getPeople()
    }, [page])


    return (

        <>
            <Row xs={1} md={3} className="g-4">
                {people &&
                    people.results.map((people, i) => (
                        <div key={i}>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Header as="h5">{people.name}</Card.Header>
                                    <Button variant="primary" as={Link} to={`/people/${swAPI.getIdFromUrl(people.url)}`}>Read more</Button>

                                </Card>
                            </Col>
                        </div>


                    ))}
            </Row>

            <div className='d-flex justify-content-between align-items-center p-4'>
                <button
                    onClick={() => setPage(prevValue => prevValue - 1)}
                    type='primary'
                    className='btn btn-secondary'>
                    Prev
            </button>
                <p>{page}</p>
                <button
                    onClick={() => setPage(prevValue => prevValue + 1)}
                    type='primary'
                    className='btn btn-secondary'
                >
                    Next
            </button>
            </div>

        </>


    )
}


export default People; 