import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWRjZTU1YThmMmZkMTQ3YWViZTQ2ZjFhMjBkYzIyZSIsIm5iZiI6MTcyNjkxOTU1OS45NDM5NzUsInN1YiI6IjY2ZWVhNDczNGE3ZjBiMThiMDI1ZjIwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vqZlvqZE8EZAzBTCwKJsd0B2EUwP45RL-JGpKiuja68'
    }
});

export default instance;
