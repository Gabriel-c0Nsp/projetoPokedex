 const urlParams = new URLSearchParams (window.location.search)
const pokemonName = urlParams.get('name')

const urlPokemonDetail = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`


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

  if (data["height"] / 10 < 1) {
  let heightDetail = data["height"] / 10 + ' cm'
  document.getElementById('infoHeight').innerHTML = heightDetail // Pokemon height
  }
  else if (data["height"] / 10 >= 1) {
  let heightDetail = data["height"] / 10 + ' m'
  document.getElementById('infoHeight').innerHTML = heightDetail // Pokemon height
  }

  let weightDetail = data["weight"] / 10 + ' kg'
  document.getElementById('infoWeight').innerHTML = weightDetail // Pokemon height

  document.getElementById('infoAbilities').innerHTML = data['abilities']



  let abilitiesDetail = document.getElementById('infoAbilities');
  abilitiesDetail.innerHTML = ''

  data['abilities'].forEach((abilityData) => {
  let abilityName = abilityData['ability']['name'];
  let abilityElement = document.createElement('li');
  abilityElement.textContent = abilityName;
  abilitiesDetail.appendChild(abilityElement);
    })

})
.catch((erro => {
  console.log('erro' + erro)
}))
