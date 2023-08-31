let urlPokemonDetail = "https://pokeapi.co/api/v2/pokemon/bulbasaur"

fetch(urlPokemonDetail)
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data)
  document.getElementById('pokemonName').innerHTML = data['name']
  let idDetail = '#' + data['id']

  document.getElementById('pokemonNumber').innerHTML = idDetail 
  let img = data['sprites']['other']['dream_world']['front_default']
  document.getElementById('pokemonDetailImage').setAttribute('src', img)
})
.catch((erro => {
  console.log('erro' + erro)
}))
