import swAPI from '../services/swAPI'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


const Person = () => {

    const [person, setPerson] = useState([])
    const [films, setFilms] = useState([]);
    const { id } = useParams();


    const getPersonId = async (id) => {
        const data = await swAPI.getPerson(id)
        setPerson(data)
        setFilms(data.films)
    }

    useEffect(() => {
        getPersonId(id)
    }, [id])



    return (
        <>
            <ListGroup>
                <h2>Name: {person.name}</h2>
                <ListGroup.Item> Birth year: {person.birth_year}</ListGroup.Item>
                <ListGroup.Item> Eye color: {person.eye_color}</ListGroup.Item>
                <ListGroup.Item>Gener: {person.gender}</ListGroup.Item>
                <ListGroup.Item>Haircolor: {person.hair_color}</ListGroup.Item>
                <ListGroup.Item>Height: {person.height}</ListGroup.Item>
                <ListGroup.Item>Mass: {person.mass}</ListGroup.Item>
                <ListGroup.Item>Skin color: {person.skin_color}</ListGroup.Item>
            </ListGroup>

            <div>
                <h3>Films {person.name} has been in:</h3>
                {films &&
                    films.map((film, i) => (
                        <div key={i}>
                            <Link to={`/movies/${swAPI.getIdFromUrl(film)}`}>
                                <li>Film {swAPI.getIdFromUrl(film)}</li>
                            </Link>



                        </div>
                    ))}
                <div className='d-flex justify-content-start align-items-center p-4'>
                    <Button variant="primary" as={Link} to={`/people/`}>Back</Button>

                </div>
            </div>



        </>

    )
}

export default Person 