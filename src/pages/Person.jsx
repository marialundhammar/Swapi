import swAPI from '../services/swAPI'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Person = () => {

    const [person, setPerson] = useState([])
    const { id } = useParams();

    const getPersonId = async (id) => {
        const data = await swAPI.getPerson(id)

        setPerson(data)
        console.log(data.name)


    }

    useEffect(() => {
        getPersonId(id)
    }, [id])


    return (
        <>


            {person &&
                <h2>{person.name}</h2>
            }
        </>

    )
}

export default Person 