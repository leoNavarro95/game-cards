
const API_URL = "https://pokeapi.co/api/v2/pokemon/"

export const pokemonByNumber = async ( pokeID ) => {
    return await fetch(API_URL + `${pokeID}`)
    .then((responce) => {
      if(responce.ok)
        return responce.json()
  
      throw new Error('Network response was not OK')
    })
    .then( (data) => {return data} )
    .catch( (error) => console.error('There has been a problem with your fetch operation:', error))
}
