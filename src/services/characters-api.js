export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(json => json.results);
};

export const fetchCharById = id => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json());
    
};
