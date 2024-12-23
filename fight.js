const typeEffectiveness = {
    "normal":  { "normal": 1, "fire": 1, "water": 1, "electric": 1, "grass": 1, "ice": 1, "fighting": 1, "poison": 1, "ground": 1, "flying": 1, "psychic": 1, "bug": 1, "rock": 1, "ghost": 0, "dragon": 1, "dark": 1, "steel": 0.5, "fairy": 1 },
    "fire":    { "normal": 1, "fire": 0.5, "water": 0.5, "electric": 1, "grass": 2, "ice": 2, "fighting": 1, "poison": 1, "ground": 1, "flying": 1, "psychic": 1, "bug": 2, "rock": 0.5, "ghost": 1, "dragon": 0.5, "dark": 1, "steel": 2, "fairy": 1 },
    "water":   { "normal": 1, "fire": 2, "water": 0.5, "electric": 0.5, "grass": 0.5, "ice": 1, "fighting": 1, "poison": 1, "ground": 2, "flying": 1, "psychic": 1, "bug": 1, "rock": 2, "ghost": 1, "dragon": 0.5, "dark": 1, "steel": 1, "fairy": 1 },
    "electric":{ "normal": 1, "fire": 1, "water": 2, "electric": 0.5, "grass": 0.5, "ice": 1, "fighting": 1, "poison": 1, "ground": 0, "flying": 2, "psychic": 1, "bug": 1, "rock": 1, "ghost": 1, "dragon": 0.5, "dark": 1, "steel": 1, "fairy": 1 },
    "grass":   { "normal": 1, "fire": 0.5, "water": 2, "electric": 1, "grass": 0.5, "ice": 1, "fighting": 1, "poison": 0.5, "ground": 2, "flying": 0.5, "psychic": 1, "bug": 0.5, "rock": 2, "ghost": 1, "dragon": 0.5, "dark": 1, "steel": 0.5, "fairy": 1 },
    "ice":     { "normal": 1, "fire": 0.5, "water": 0.5, "electric": 1, "grass": 2, "ice": 0.5, "fighting": 1, "poison": 1, "ground": 2, "flying": 2, "psychic": 1, "bug": 1, "rock": 2, "ghost": 1, "dragon": 2, "dark": 1, "steel": 0.5, "fairy": 1 },
    "fighting":{ "normal": 2, "fire": 1, "water": 1, "electric": 1, "grass": 1, "ice": 2, "fighting": 1, "poison": 1, "ground": 1, "flying": 0.5, "psychic": 0.5, "bug": 0.5, "rock": 2, "ghost": 0, "dragon": 1, "dark": 2, "steel": 2, "fairy": 0.5 },
    "poison":  { "normal": 1, "fire": 1, "water": 1, "electric": 1, "grass": 2, "ice": 1, "fighting": 1, "poison": 0.5, "ground": 0.5, "flying": 1, "psychic": 2, "bug": 1, "rock": 1, "ghost": 2, "dragon": 1, "dark": 1, "steel": 0, "fairy": 2 },
    "ground":  { "normal": 1, "fire": 2, "water": 2, "electric": 2, "grass": 0.5, "ice": 1, "fighting": 1, "poison": 2, "ground": 1, "flying": 0, "psychic": 1, "bug": 1, "rock": 2, "ghost": 1, "dragon": 1, "dark": 1, "steel": 2, "fairy": 1 },
    //"flying":  { "normal": 1, "fire": 1, "water": 1, "electric": 0.5, "grass": 2, "ice": 1, "fighting": 2, "poison": 1, "ground": 1, "flying": 1, "psychic": 1, "bug": 2, "rock": 0.5, "ghost": 1, "dragon": 1, "dark": 1, "steel": 1, "fairy": 1 },
    "psychic": { "normal": 1, "fire": 1, "water": 1, "electric": 1, "grass": 1, "ice": 1, "fighting": 2, "poison": 2, "ground": 1, "flying": 1, "psychic": 0.5, "bug": 1, "rock": 1, "ghost": 1, "dragon": 1, "dark": 0, "steel": 1, "fairy": 1 },
    "bug":     { "normal": 1, "fire": 0.5, "water": 1, "electric": 1, "grass": 2, "ice": 1, "fighting": 0.5, "poison": 1, "ground": 1, "flying": 0.5, "psychic": 2, "bug": 1, "rock": 1, "ghost": 0.5, "dragon": 1, "dark": 2, "steel": 0.5, "fairy": 0.5 },
    "rock":    { "normal": 1, "fire": 2, "water": 1, "electric": 1, "grass": 1, "ice": 2, "fighting": 1, "poison": 1, "ground": 1, "flying": 2, "psychic": 1, "bug": 2, "rock": 1, "ghost": 1, "dragon": 1, "dark": 1, "steel": 0.5, "fairy": 1 },
    "ghost":   { "normal": 0, "fire": 1, "water": 1, "electric": 1, "grass": 1, "ice": 1, "fighting": 1, "poison": 1, "ground": 1, "flying": 1, "psychic": 2, "bug": 1, "rock": 1, "ghost": 2, "dragon": 1, "dark": 2, "steel": 1, "fairy": 1 },
    "dragon":  { "normal": 1, "fire": 1, "water": 1, "electric": 1, "grass": 1, "ice": 1, "fighting": 1, "poison": 1, "ground": 1, "flying": 1, "psychic": 1, "bug": 1, "rock": 1, "ghost": 1, "dragon": 2, "dark": 1, "steel": 0.5, "fairy": 0 },
    "dark":    { "normal": 1, "fire": 1, "water": 1, "electric": 1, "grass": 1, "ice": 1, "fighting": 0, "poison": 1, "ground": 1, "flying": 1, "psychic": 2, "bug": 1, "rock": 1, "ghost": 2, "dragon": 1, "dark": 1, "steel": 1, "fairy": 0.5 },
    "steel":   { "normal": 1, "fire": 0.5, "water": 0.5, "electric": 0.5, "grass": 1, "ice": 2, "fighting": 2, "poison": 1, "ground": 2, "flying": 1, "psychic": 1, "bug": 1, "rock": 2, "ghost": 1, "dragon": 1, "dark": 1, "steel": 1, "fairy": 2 },
    "fairy":   { "normal": 1, "fire": 1, "water": 1, "electric": 1, "grass": 1, "ice": 1, "fighting": 2, "poison": 1, "ground": 1, "flying": 1, "psychic": 1, "bug": 1, "rock": 1, "ghost": 1, "dragon": 2, "dark": 2, "steel": 0.5, "fairy": 1 }
};

let supersax = false;

////////////////////////////////////////////////////////////////////////////////////////
////////////////////    ATTACK     /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

class Attack {
	constructor(name, type, isPhysical, isSpecial, power, hasSpecialEffect) {
		this.name = name;             
		this.type = type;             
		this.isPhysical = isPhysical; // Booléen indiquant si c'est une attaque physique
		this.isSpecial = isSpecial; //Booléen indiquant 
		this.hasSpecialEffect = hasSpecialEffect;
		this.power = power;
	} 
}

const pistolet_eau = new Attack("pistolet à eau", "water", 0 , 1, 40, 0);
const morsure = new Attack("morsure", "dark", 1, 0, 60, 0);
const lanceFlamme = new Attack("lance Flamme", "fire", 0, 1, 90, 0);
const griffe = new Attack("griffe", "normal", 1, 0, 40, 0);
const tonnerre = new Attack("tonnerre", "electric", 0, 1, 90, 0);
const viveAttack = new Attack("Vive attaque", "normal", 1, 0, 40, 0);
const queueFer = new Attack("queue de fer", "steel", 1, 0, 100, 0);
const meteor = new Attack("Meteor", "normal", 0, 1, 60, 0);
const machouille = new Attack("Machouille", "dark", 1, 0, 90, 0);
const lechouille = new Attack("lechouille", "ghost", 1, 0, 30, 0);
const belier = new Attack("belier", "normal", 1, 0, 90, 0);
const fouetLiane = new Attack("fouet liane", "grass", 1, 0, 45, 0);
const canonGraine = new Attack("canon graine", "grass", 1, 0, 80, 0);
const hydroqueue = new Attack("hydroqueue", "water", 1, 0, 90, 0);


////////////////////////////////////////////////////////////////////////////////////////
////////////////////    POKEMON     ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

class Pokemon {

    //FAIRE LES IVS (pour randomiser les stats)
    
    
    
    
    //constructor(name, level, type1, type2, hpMax, hp, atkPoint, attacks, defPoint, speAtkPoint, speDefPoint, speedPoint) {    //  Erreur dans l'ordre des arguments
    constructor(name, level, type1, type2, attacks, hpMax, hp, atkPoint, defPoint, speAtkPoint, speDefPoint, speedPoint) {
        this.name = name;         
        this.type1 = type1;         
        this.type2 = type2;
        this.level = level;
        this.atkPoint = atkPoint;
        this.defPoint = defPoint;
        this.speAtkPoint = speAtkPoint;
        this.speDefPoint = speDefPoint;
        this.speedPoint = speedPoint; 
        this.hpMax = hpMax;
        this.hp = hp;
        this.attacks = attacks;   // Tableau des attaques
        this.isAlive = true;
    }

    attack(target, attackIndex) {
        const attack = this.attacks[attackIndex]; // Récupère l'attaque sélectionnée
        let CM = typeEffectiveness[attack.type][target.type1];
        
        if(target.type2){
        	CM *= typeEffectiveness[attack.type][target.type2];
        }
        if(attack.isPhysical == 1){
       		const hp_lost = (((this.level * 0.4 + 2)* this.atkPoint * attack.power) / (target.defPoint * 50) +2) * CM;
       		target.hp -= hp_lost;
        }
        if (attack.isSpecial){
        	const hp_lost = (((this.level * 0.4 + 2)* this.speAtkPoint * attack.power) / (target.speDefPoint * 50) +2) * CM;
        	target.hp -= hp_lost;
        }
        
        target.hp = Math.round(target.hp);
        
        if(attack.has_special_effect){
        	//TODO
        } 
    }
}

let queryString = window.location.search;
let params = new URLSearchParams(queryString);

let user1 = params.get('user1');
let user2 = params.get('user2');
let pokemons1 = [getPokemon(params.get('chr1')), getPokemon(params.get('chr2')), getPokemon(params.get('chr3'))];
let pokemons2 = [getPokemon(params.get('chr4')), getPokemon(params.get('chr5')), getPokemon(params.get('chr6'))];
let pokemon1 = pokemons1[0];
let pokemon2 = pokemons2[0];

let player = 1;
document.getElementById("newPokemon").style.display = "none";
refresh();

function getPokemon(name){
	let pokemon = null;
	if (name === "Carapuce"){
		pokemon = new Pokemon("Carapuce", 50, "water", null, [pistolet_eau, morsure, hydroqueue], 104, 104, 53, 70, 60, 62, 48);
	}
    if (name === "CarapuceSax"){
		pokemon = new Pokemon("CarapuceSax", 50, "water", null, [pistolet_eau, morsure, hydroqueue], 104, 104, 53, 70, 60, 62, 48);
	}
	if (name === "Salamèche"){
		pokemon = new Pokemon("Salamèche", 50, "fire", null, [lanceFlamme, griffe], 99,99, 62, 48, 65, 55, 63);
	}
	if (name === "Pikachu"){
		pokemon = new Pokemon("Pikachu", 50, "electric", null, [tonnerre, viveAttack, queueFer], 95, 95, 60, 45, 60, 49, 95);
	}
	if (name == "Bulbizarre"){
		pokemon = new Pokemon("Bulbizarre", 50, "grass", null, [belier, canonGraine, fouetLiane], 105, 105, 54, 54, 70, 70, 50);
	}
	if (name === "Evoli"){
		pokemon = new Pokemon("Evoli", 50, "normal", null, [viveAttack, morsure, meteor], 115, 115, 60, 49, 50, 77, 60);
	}
	if (name === "Ronflex"){
		pokemon = new Pokemon("Ronflex", 50, "normal", null, [lechouille, machouille], 220, 220, 115, 70, 70, 115, 35);
	}

	return pokemon

}



function apply_attack(attack1, switch1, attack2, switch2){

	if(switch1 != -1){
		pokemon1 = pokemons1[switch1];
	}
	if (switch2 != -1){
		pokemon2 = pokemons2[switch2];
	}
    if(attack1 != -1 && attack2 != -1){
		
		if(pokemon1.speedPoint === pokemon2.speedPoint){
			let aleatoire = Math.random();
			if(aleatoire < 0.5){
				pokemon1.attack(pokemon2, attack1);
				if(pokemon2.hp < 0){
					pokemon2.isAlive = false;
					chooseNewPokemon(2);
				}
				else{
					pokemon2.attack(pokemon1, attack2);
					if(pokemon1.hp < 0 ){
						pokemon1.isAlive = false
						chooseNewPokemon(1);
					}
				}
			}
			else{
				pokemon2.attack(pokemon1, attack2);
				if(pokemon1.hp < 0){
					pokemon1.isAlive = false;
					chooseNewPokemon(1);
				}
				else{
					pokemon1.attack(pokemon2, attack1);
					if(pokemon2.hp < 0){
						pokemon2.isAlive = false;
						chooseNewPokemon(2);
					}
				}
			}
		}
		
		else if(pokemon1.speed > pokemon2.speed){
			pokemon1.attack(pokemon2, attack1);
            if(pokemon2.hp < 0){
                pokemon2.isAlive = false;
                chooseNewPokemon(2);
            }
            else{
                pokemon2.attack(pokemon1, attack2);
                if(pokemon1.hp < 0 ){
                    pokemon1.isAlive = false;
                    chooseNewPokemon(1);
                }
            }
		}
		else{
		    pokemon2.attack(pokemon1, attack2);
            if(pokemon1.hp < 0){
                pokemon1.isAlive = false;
                chooseNewPokemon(1);
            }
            else{
                pokemon1.attack(pokemon2, attack1);
                if(pokemon2.hp < 0){
                    pokemon2.isAlive = false;
                    chooseNewPokemon(2);
                }
            }
		}
	}
	else if(attack1 != -1){
		pokemon1.attack(pokemon2, attack1);
	}
	else if(attack2 != -1){
		pokemon2.attack(pokemon1, attack2);
	}
	
}


//////////////////////////////////////////////////////////////////////////////////////////
////////////////////    INTERFACE     ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

let attack1 = -1;
let attack2 = -1;
let switch1 = -1;
let switch2 = -1;
let playerNewPokemon = 0;   //  0 = aucun joueur ne doit choisir de nouveau pokemon

function chooseNewPokemon(player){
    playerNewPokemon = player;
    let pokemons = player == 1 ? pokemons1 : pokemons2;
    let user = player == 1 ? user1 : user2;

    document.getElementById("fight").style.display = "none";
    document.getElementById("newPokemon").style.display = "";

    document.getElementById("messageNewPokemon").innerText = user + ", vous devez choisir un nouveau pokemon";

    for(let i=0; i < 3; i++) {
        if (!pokemons[i].isAlive) {
            document.getElementById("newPokemon" + i).style.display = "none";
        }
        else {
            document.getElementById("newPokemon" + i).style.display = "";
            document.getElementById("imageNewPokemon" + i).src = "Images/" + pokemons[i].name + ".png";
            document.getElementById("nameNewPokemon" + i).innerText = pokemons[i].name;
        }
    }

}

function pokemonChosen(i) {
    if (playerNewPokemon == 1)
        apply_attack(-1, i, -1, -1);
    else if (playerNewPokemon == 2)
        apply_attack(-1, -1, -1, i);
    playerNewPokemon = 0;
    document.getElementById("newPokemon").style.display = "none";
    document.getElementById("fight").style.display = "";
    refresh();
}

function buttonPokemon(pokemon, pokemons) {
    for(let i=0; i < 3; i++) {
        if (pokemons[i].isAlive && pokemon.name != pokemons[i].name) {
            document.getElementById("changerPokemon" + i).style.display = "";
            document.getElementById("imagePokemonAttack" + i).src = "Images/" + pokemons[i].name + ".png";
            if (pokemons[i].name == "CarapuceSax")
                document.getElementById("nomChangerPokemon" + i).textContent = "Carapuce";
            else
                document.getElementById("nomChangerPokemon" + i).textContent = pokemons[i].name;
        }
        else
            document.getElementById("changerPokemon" + i).style.display = "none";
    }
}

function refreshButtons(p) {
    let pokemon = p == 1 ? pokemon1 : pokemon2;
    let pokemons = p == 1 ? pokemons1 : pokemons2;
    let user = p == 1 ? user1 : user2;

    document.getElementById("pseudoJoueur").textContent = "Au tour de " + user;

    for (let j=0; j < pokemon.attacks.length; j++) {
    	document.getElementById("attack" + (j+1)).hidden = false;
        document.getElementById("imageAttack" + (j + 1)).src = "Images/" + pokemon.attacks[j].type + ".png";
        document.getElementById("nomAttack" + (j + 1)).textContent = pokemon.attacks[j].name;
    }
    for (let j=pokemon.attacks.length; j < 4; j++){
    	document.getElementById("attack" + (j+1)).hidden = true;
    }
    
    buttonPokemon(pokemon, pokemons);
}

function refreshPokemonInfo(i, saxo) {
    let pokemon = i == 1 ? pokemon1 : pokemon2;
    let pokemons = i == 1 ? pokemons1 : pokemons2;

    //  Saxophone
    console.log(pokemon.name);
    if (saxo) {
        console.log("test");
        imageSaxo = document.getElementById("imageSaxophone");
        imageSaxo.style.display = "";
        imageSaxo.style.top = Math.floor(Math.random() * window.innerHeight)+ "px";
        imageSaxo.style.left = Math.floor(Math.random() * window.innerWidth)+ "px";
        console.log("test2");
    }
    else
        document.getElementById("imageSaxophone").style.display = "none";

    //  Nom
    if (pokemon.name == "CarapuceSax")
        document.getElementById("nom" + i).textContent = "Carapuce";
    else
        document.getElementById("nom" + i).textContent = pokemon.name;
    //  Image
    document.getElementById("imagePokemon" + i).src = "Images/" + pokemon.name + ".png";
    //  Niveau
    document.getElementById("niveau" + i).textContent = "N. " + pokemon.level;
    //  PV
    let pourcentage = pokemon.hp / pokemon.hpMax;
    pv = document.getElementById("pv" + i);
    pv.textContent = pokemon.hp + "PV";
    pv.style.width = pourcentage * 100 + "%";
}

function refresh() {
    let saxo = false;
    if ((pokemon1.name == "Carapuce" && player == 1) || 
        (pokemon2.name == "Carapuce" && player == 2))
        saxo = true;
    refreshPokemonInfo(1, saxo);
    refreshPokemonInfo(2, saxo);
    refreshButtons(player);
}

function attack(i) {
    if (player == 1) {
        attack1 = i - 1;
        player = 2;
    }
    else {
        attack2 = i - 1;
        player = 1;
        apply_attack(attack1, switch1, attack2, switch2);
        attack1 = -1;
        attack2 = -1;
        switch1 = -1;
        switch2 = -1;
    }
    refresh();
}

function changePokemon(i) {
    if (player == 1) {
        switch1 = i;
        player = 2;
    }
    else {
        switch2 = i;
        player = 1;
        apply_attack(attack1, switch1, attack2, switch2);
        attack1 = -1;
        attack2 = -1;
        switch1 = -1;
        switch2 = -1;
    }
    refresh();
}

function saxophone() {
    if (player == 1) {
        pokemon1 = getPokemon("CarapuceSax");
        for (let i=0; i < 3; i++)
            if (pokemons1[i].name == "Carapuce")
                pokemons1[i] = pokemon1;
    }
    else {
        pokemon2 = getPokemon("CarapuceSax");
        for (let i=0; i < 3; i++)
            if (pokemons2[i].name == "Carapuce")
                pokemons2[i] = pokemon2;
    }
    refresh();
}