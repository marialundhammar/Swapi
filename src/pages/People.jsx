
import swAPI from '../services/swAPI'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const People = () => {

    const [people, setPeople] = useState("")

    const getPeople = async () => {
        const data = await swAPI.getPeople()
        setPeople(data)
        console.log(data.results)
    }

    // Get movies from api when component is first mounted
    useEffect(() => {
        getPeople()
    }, [])


    return (

        <>
            <Row xs={1} md={3} className="g-4">
                {people &&
                    people.results.map((people) => (

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header as="h5">{people.name}</Card.Header>

                            </Card>


                        </Col>




                    ))}
            </Row>
        </>


    )
}


export default People; 