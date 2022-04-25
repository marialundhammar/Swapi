import swAPI from '../services/swAPI'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'



const Movies = () => {

    const [movies, setMovies] = useState("")

    const getMovies = async () => {
        const data = await swAPI.getMovies()
        setMovies(data)
        console.log(data.results)
    }

    // Get movies from api when component is first mounted
    useEffect(() => {
        getMovies()
    }, [])


    return (
        <>
            <Row xs={1} md={3} className="g-4">
                {movies &&
                    movies.results.map((movies, index) => (

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Header as="h5">{movies.title}</Card.Header>
                                <Card.Body>
                                    <Card.Title>Episode id: {movies.episode_id} <i>{movies.release_date}</i></Card.Title>
                                    <Card.Text>
                                        {movies.url}
                                    </Card.Text>
                                    <Button variant="primary" as={Link} to={`/movies/${swAPI.getIdFromUrl(movies.url)}`}>Read more</Button>
                                </Card.Body>
                            </Card>


                        </Col>




                    ))}
            </Row>
        </>
    );
}


export default Movies; 