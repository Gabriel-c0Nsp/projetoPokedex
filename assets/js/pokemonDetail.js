let urlPokemonDetail = "https://pokeapi.co/api/v2/pokemon/bulbasaur"

fetch(urlPokemonDetail)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)
  document.getElementById('pokemonName').innerHTML = data['name'] //Pokemon name
  let idDetail = '#' + data['id']
  document.getElementById('pokemonNumber').innerHTML = idDetail // Pokemon id(number)
  let img = data['sprites']['other']['dream_world']['front_default'] 
  document.getElementById('pokemonDetailImage').setAttribute('src', img) // Pokemon's image
  document.getElementById('infoHeight').innerHTML = data['height'] // Pokemon height
  document.getElementById('infoWeight').innerHTML = data['weight'] // Pokemon height
})
.catch((erro => {
  console.log('erro' + erro)
}))
