import axios from 'axios'

const BASE_URL = 'https://swapi.dev/api/'

const getMovies = async () => {
    const res = await axios.get(`${BASE_URL}/films`);
    return res.data;
};

const getMovie = async (id) => {
    const res = await axios.get(`${BASE_URL}/films/${id}`);
    return res.data;
};


const getPeople = async (page) => {
    const res = await axios.get(`${BASE_URL}/people/?page=${page}`);
    return res.data;
}

const getPerson = async (id) => {
    const res = await axios.get(`${BASE_URL}/people/${id}`);
    return res.data
}

const getIdFromUrl = (url) => {
    // eslint-disable-next-line no-unused-vars
    const [_endpoint, id] = url
        .replace('https://swapi.dev/api/', '')
        .slice(0, -1)
        .split('/')
    return id
}

const exportFunctions = {
    getMovies,
    getMovie,
    getPeople,
    getIdFromUrl,
    getPerson,

};

export default exportFunctions