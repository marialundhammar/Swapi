import swAPI from '../services/swAPI'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Movie = () => {

    const [movie, setMovie] = useState([])
    const { id } = useParams();

    const getMovie = async (id) => {
        const data = await swAPI.getMovie(id)
        setMovie(data)
        console.log(data)
    }

    // Get movies from api when component is first mounted
    useEffect(() => {
        getMovie(id)
    }, [id])


    return (

        <div>
            {movie && (
                <h2>{movie.title}</h2>
            )}

        </div>


    );
}

export default Movie