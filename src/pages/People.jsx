
import swAPI from '../services/swAPI'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'


const People = () => {

    const [people, setPeople] = useState("")
    const [page, setPage] = useState(0)

    const getPeople = async () => {
        const data = await swAPI.getPeople()
        setPeople(data)
        console.log(data.results)
    }

    // Get movies from api when component is first mounted
    useEffect(() => {
        getPeople(page)
    }, [page])





    return (

        <>
            <Row xs={1} md={3} className="g-4">
                {people &&
                    people.results.map((people, index) => (
                        <div key={index}>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Header as="h5">{people.name}</Card.Header>
                                    <Button variant="primary" as={Link} to={`/people/${swAPI.getIdFromUrl(people.url)}`}>Read more</Button>

                                </Card>
                            </Col>
                        </div>


                    ))}




            </Row>

            <div className="d-flex justify-content-between align-items-center mt-4">
                <div className="prev">
                    <Button
                        disabled={page === 0}
                        onClick={() => setPage(prevValue => prevValue - 1)}

                    >Previous Page</Button>
                </div>
                <div className="page">{page + 1}</div>

                <div className="next">
                    <Button
                        /*  disabled={page + 1 >= (people.next !== null)} */

                        onClick={() => setPage(prevValue => prevValue + 1)}>Next Page</Button>
                </div>
            </div>

        </>


    )
}


export default People; 