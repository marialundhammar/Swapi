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
                    movies.results.map((movies, i) => (
                        <div key={i}>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Header as="h5">{movies.title}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>Episode: {movies.episode_id} </Card.Title>
                                        <Card.Text>
                                            Release date: {movies.release_date} </Card.Text>

                                        <Card.Text>
                                            Number of characters: {movies.characters.length}</Card.Text>
                                        <Button variant="primary" as={Link} to={`/movies/${swAPI.getIdFromUrl(movies.url)}`}>Read more</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>

                    ))}
            </Row>
        </>
    );
}


export default Movies; 