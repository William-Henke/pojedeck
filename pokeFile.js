let pokeArray = [
    {name: 'Bulbasaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
    {name: 'Ivysaur', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'},
    {name: 'Charmander', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
    {name: 'Charizard', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'},
    {name: 'Squirtle', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
  
  ];

let button = document.getElementById('pokeButton');
let index = 0;

button.addEventListener('click', pokeCycling);



function pokeCycling() {

    if(index >= pokeArray.length -1) {
        index = 0;
    }

    let name = document.getElementById('pokeName');
    name.innerHTML = pokeArray[index].name;

    let image = document.getElementById('pokeImage');
    image.src = pokeArray[index].image;

    index++;
}