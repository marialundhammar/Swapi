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
        console.log(data.name)
        console.log(data.films)
    }


    useEffect(() => {
        getPersonId(id)

    }, [id])



    return (
        <>

            <ListGroup>
                <h2>{person.name}</h2>
                <ListGroup.Item> {person.birth_year}</ListGroup.Item>
                <ListGroup.Item> {person.eye_color}</ListGroup.Item>
                <ListGroup.Item>{person.gender}</ListGroup.Item>
                <ListGroup.Item>{person.hair_color}</ListGroup.Item>
                <ListGroup.Item>{person.height}</ListGroup.Item>
                <ListGroup.Item>{person.mass}</ListGroup.Item>
                <ListGroup.Item>{person.skin_color}</ListGroup.Item>
            </ListGroup>

            <div>
                <h3>Films {person.name} has been in:</h3>
                {films &&
                    films.map(film => (
                        <Link to={`/movies/${swAPI.getIdFromUrl(film)}`}>
                            <li>Film {swAPI.getIdFromUrl(film)}</li>
                        </Link>
                    ))}


            </div>

            <div className='d-flex justify-content-start align-items-center p-4'>
                <Button > Back </Button>
            </div>














        </>

    )
}

export default Person 