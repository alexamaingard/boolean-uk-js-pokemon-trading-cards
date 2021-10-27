let pokemons = [];

for(let i = 0; i < data.length; i++){
    const numberOfStats = data[i].stats.length;
    let aux = [];
    aux.push(data[i].name);
    for(let j = 0; j < numberOfStats; j++){
        aux.push(data[i].stats[j].base_stat);
    }
    aux.push(data[i].sprites.other["official-artwork"].front_default);
    const numberOfGames = data[i].game_indices.length;
    let games = [];
    for(let j = 0; j < numberOfGames; j++){
        games.push(data[i].game_indices[j].version.name);
    }
    const newPokemon = {
        name: aux[0],
        hp: aux[1],
        attack: aux[2],
        defense: aux[3],
        sp_at: aux[4],
        sp_def: aux[5],
        speed: aux[6],
        image: aux[7],
        games: ""
    }
    newPokemon.games = games;
    pokemons.push(newPokemon);
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
    appearedInGames(pokemon, card);
}

pokemons.forEach(pokemon => {
    buildCard(pokemon);
});

function appearedInGames(pokemon, parentElement){
    const games = createElement('ul');
    games.innerText = 'Appeared in:'
    games.className = 'card--text';
    parentElement.append(games);
    for(let i = 0; i < pokemon.games.length; i++){
        const game = createElementWithText('li', `${pokemon.games[i]}`);
        games.append(game);
    }
}