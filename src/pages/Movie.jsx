import swAPI from '../services/swAPI'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'


const Movie = () => {

    const [movie, setMovie] = useState([])
    const [persons, setPersons] = useState([])
    const { id } = useParams();

    const getMovie = async (id) => {
        const data = await swAPI.getMovie(id)
        setMovie(data)
        setPersons(data.characters)
        console.log(data)
        console.log(data.characters)
    }

    // Get movies from api when component is first mounted
    useEffect(() => {
        getMovie(id)
    }, [id])


    return (
        <>
            <div>

                <h2>{movie.title}</h2>

                <div>

                    <ListGroup>

                        <ListGroup.Item> Episode: {movie.episode_id}</ListGroup.Item>
                        <ListGroup.Item> Opening crawl: {movie.opening_crawl}</ListGroup.Item>
                        <ListGroup.Item> Producer: {movie.producer}</ListGroup.Item>

                        <ListGroup.Item>Release date: <i>{movie.release_date}</i></ListGroup.Item>
                    </ListGroup>


                    {persons &&
                        persons.map(person => (
                            <Link to={`/people/${swAPI.getIdFromUrl(person)}`}>
                                <li>Character {swAPI.getIdFromUrl(person)}</li>
                            </Link>
                        ))}


                </div>

            </div>
            <Button variant="primary" as={Link} to={`/movies`}>Back</Button>
        </>

    );
}

export default Movie