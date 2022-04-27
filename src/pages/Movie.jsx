import swAPI from '../services/swAPI'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


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

        <div>

            <h2>{movie.title}</h2>

            <div>

                {persons &&
                    persons.map(person => (
                        <Link to={`/people/${swAPI.getIdFromUrl(person)}`}>
                            <li>Character {swAPI.getIdFromUrl(person)}</li>
                        </Link>
                    ))}


            </div>

        </div>


    );
}

export default Movie