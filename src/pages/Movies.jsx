import swAPI from '../services/swAPI'
import { useEffect, useState } from 'react'




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
            {movies &&
                movies.results.map((movies) => (

                    <div>
                        <h3>{movies.title}</h3>
                        <p>Episode id: {movies.episode_id}</p>
                    </div>



                ))}

        </>
    );
}


export default Movies; 