import axios from 'axios'

const BASE_URL = 'https://swapi.dev/api/'

const getMovies = async () => {
    const res = await axios.get(`${BASE_URL}/films`);
    return res.data;
};


export default {
    getMovies,
}