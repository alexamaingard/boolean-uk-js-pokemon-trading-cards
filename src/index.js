// - Make sure you check and understand the data that is given to you!
// - Create a card using JS that represents a single pokemon, use the 
//example image as a reference. You will also find an HTML example commented 
//out in the index.html
// - Use the exact CSS classes you see in the example HTML to obtain the 
//same style for each card
// - The cards should be nested inside <ul class="cards"></ul>
// - Use the official-artwork object key as the images for the card. The 
//images are all inside of the sprites key, in each pokemon object
// pokemon.sprites.other['official-artwork'].front_default

// - Render all the cards on the page that represents all the pokemons, 
//recreating the same layout, using JS

let pokemons = [];
const pokemon = {
    name: 'name',
    hp: 'hp',
    attack: 'attack',
    defense: 'defense',
    sp_at: 'special attack',
    sp_def: 'special defense',
    speed: 'speed'
};

for(let i = 0; i < data.length; i++){
    const numberOfStats = data[i].stats.length;
    let aux = [];
    aux.push(data[i].name);
    for(let j = 0; j < numberOfStats; j++){
        aux.push(data[i].stats[j].base_stat);
    }
    aux.push(data[i].sprites.other["official-artwork"].front_default);
    const newPokemon = {
            name: aux[0],
            hp: aux[1],
            attack: aux[2],
            defense: aux[3],
            sp_at: aux[4],
            sp_def: aux[5],
            speed: aux[6],
            image: aux[7]
        }
        pokemons.push(newPokemon);
        //pokemons.push([data[i].name, data[i].stats[j].stat.name, data[i].stats[j].base_stat]);
}
console.log(pokemons);

const ulElementCards = document.querySelector('.cards');

function createElement(tag) {
    const element = document.createElement(tag);
    return element;
}
  
function createElementWithText(tag, text) {
    const element = document.createElement(tag);
    element.innerText = text;
    return element;
}

function createImage(image, source){
    image.setAttribute('src', source);
    image.className = 'card--img';
    image.setAttribute('width', 256);
}

function createStatsList (parentElement, pokemon){
    const hp = createElementWithText('li', `HP: ${pokemon.hp}`);
    const attack = createElementWithText('li', `ATTACK: ${pokemon.attack}`);
    const defense = createElementWithText('li', `DEFENSE: ${pokemon.defense}`);
    const specialAttack = createElementWithText('li', `SPECIAL-ATTACK: ${pokemon.sp_at}`);
    const specialDefense = createElementWithText('li', `SPECIAL-DEFENSE: ${pokemon.sp_def}`);
    const speed = createElementWithText('li', `SPEED: ${pokemon.speed}`);
    parentElement.append(hp, attack, defense, specialAttack,specialDefense, speed);
}

function buildCard(pokemon){
    const card = createElement('li');
    card.className = 'card';
    ulElementCards.append(card);
    const title = createElementWithText('h2', pokemon.name);
    title.className = 'card--title';
    const image = createElement('img');
    createImage(image, pokemon.image);
    const stats = createElement('ul');
    stats.className = 'card--text';
    createStatsList(stats, pokemon);
    card.append(title, image, stats);
}

console.log(ulElementCards);

pokemons.forEach(pokemon => {
    buildCard(pokemon)
});