import axios from 'axios';

export const getData = () => {
    axios
      .get(`https://swapi.dev/api/starships/`)
      .then((res) => console.log(res.data.results))
      .catch((err) => console.log(err));
}