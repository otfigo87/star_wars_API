export const getData = async() => {
  try {
    const response = await fetch(`https://swapi.dev/api/starships/`);
    const data = await response.json();
    return data.data.results;
  }
  catch(err) {
    console.error(err)
  }   
}
