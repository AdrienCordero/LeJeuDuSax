let queryString = window.location.search;
let params = new URLSearchParams(queryString);

let user1 = params.get('user1');
let user2 = params.get('user2');
let pokemon1 = getPokemon(params.get('chr1'));
let pokemon2 = getPokemon(params.get('chr4'));
let pokemons1 = [getPokemon(params.get('chr2')), getPokemon(params.get('chr3'))];
let pokemons2 = [getPokemon(params.get('chr5')), getPokemon(params.get('chr6'))];

let player = 1;
init();

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
    "flying":  { "normal": 1, "fire": 1, "water": 1, "electric": 0.5, "grass": 2, "ice": 1, "fighting": 2, "poison": 1, "ground": 1, "flying": 1, "psychic": 1, "bug": 2, "rock": 0.5, "ghost": 1, "dragon": 1, "dark": 1, "steel": 1, "fairy": 1 },
    "psychic": { "normal": 1, "fire": 1, "water": 1, "electric": 1, "grass": 1, "ice": 1, "fighting": 2, "poison": 2, "ground": 1, "flying": 1, "psychic": 0.5, "bug": 1, "rock": 1, "ghost": 1, "dragon": 1, "dark": 0, "steel": 1, "fairy": 1 },
    "bug":     { "normal": 1, "fire": 0.5, "water": 1, "electric": 1, "grass": 2, "ice": 1, "fighting": 0.5, "poison": 1, "ground": 1, "flying": 0.5, "psychic": 2, "bug": 1, "rock": 1, "ghost": 0.5, "dragon": 1, "dark": 2, "steel": 0.5, "fairy": 0.5 },
    "rock":    { "normal": 1, "fire": 2, "water": 1, "electric": 1, "grass": 1, "ice": 2, "fighting": 1, "poison": 1, "ground": 1, "flying": 2, "psychic": 1, "bug": 2, "rock": 1, "ghost": 1, "dragon": 1, "dark": 1, "steel": 0.5, "fairy": 1 },
    "ghost":   { "normal": 0, "fire": 1, "water": 1, "electric": 1, "grass": 1, "ice": 1, "fighting": 1, "poison": 1, "ground": 1, "flying": 1, "psychic": 2, "bug": 1, "rock": 1, "ghost": 2, "dragon": 1, "dark": 2, "steel": 1, "fairy": 1 },
    "dragon":  { "normal": 1, "fire": 1, "water": 1, "electric": 1, "grass": 1, "ice": 1, "fighting": 1, "poison": 1, "ground": 1, "flying": 1, "psychic": 1, "bug": 1, "rock": 1, "ghost": 1, "dragon": 2, "dark": 1, "steel": 0.5, "fairy": 0 },
    "dark":    { "normal": 1, "fire": 1, "water": 1, "electric": 1, "grass": 1, "ice": 1, "fighting": 0, "poison": 1, "ground": 1, "flying": 1, "psychic": 2, "bug": 1, "rock": 1, "ghost": 2, "dragon": 1, "dark": 1, "steel": 1, "fairy": 0.5 },
    "steel":   { "normal": 1, "fire": 0.5, "water": 0.5, "electric": 0.5, "grass": 1, "ice": 2, "fighting": 2, "poison": 1, "ground": 2, "flying": 1, "psychic": 1, "bug": 1, "rock": 2, "ghost": 1, "dragon": 1, "dark": 1, "steel": 1, "fairy": 2 },
    "fairy":   { "normal": 1, "fire": 1, "water": 1, "electric": 1, "grass": 1, "ice": 1, "fighting": 2, "poison": 1, "ground": 1, "flying": 1, "psychic": 1, "bug": 1, "rock": 1, "ghost": 1, "dragon": 2, "dark": 2, "steel": 0.5, "fairy": 1 }
};




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


////////////////////////////////////////////////////////////////////////////////////////
////////////////////    POKEMON     ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

class Pokemon {

    //FAIRE LES IVS (pour randomiser les stats)
    
    
    
    
    constructor(name, level, type1, type2, hp, atkPoint, attacks, defPoint, speAtkPoint, speDefPoint, speedPoint) {
        this.name = name;         
        this.type1 = type1;         
        this.type2 = type2;
        this.level = level;
        this.atkPoint = atkPoint;
        this.defPoint = defPoint;
        this.speAtkPoint = speAtkPoint;
        this.speDefPoint = speDefPoint;
        this.speedPoint = speedPoint; 
        this.hp = hp;
        this.attacks = attacks;   // Tableau des attaques
    }

    attack(target, attackIndex) {
        const attack = this.attacks[attackIndex]; // Récupère l'attaque sélectionnée
        
        let CM = typeEffectiveness[attack.type][target.type1]
        
        if(target.type2){
        	CM *= typeEffectiveness[attack.type][target.type2]
        }
        
        if(attack.is_physical){
       		const hp_lost = (((this.level * 0.4 + 2)* this.atkPoint * attack.power) / (target.defPoint * 50) +2) * CM
        }
        if (attack.is_special){
        	const hp_lost = (((this.level * 0.4 + 2)* this.atkSpePoint * attack.power) / (target.defSpePoint * 50) +2) * CM
        }
        
        if(attack.has_special_effect){
        	//TODO
        } 
    }
}

const pistolet_eau = new attack("pistolet à eau", "water", 0 , 1, 40, 0);


const pokemons = {"Carapuce" : new Pokemon("Carapuce", 50, "water", null, [pistolet_eau], 104, 53, 70, 60, 62, 48),  
"Salamèche" : new Pokemon("Salamèche", 50, "fire", null, [], 99, 62, 48, 65, 55, 63),  
"Pikachu" : new Pokemon("Pikachu", 50, "electric", null, [], 95, 60, 45, 60, 49, 95) , 
"Bulbizarre" : new Pokemon("Bulbizarre", 50, "grass", null, [], 105, 54, 54, 70, 70, 50),
"Evoli" : new Pokemon("Evoli", 50, "normal", null, [], 115, 60, 49, 50, 77, 60), 
"Ronflex" : new Pokemon("Ronflex", 50, "normal", null, [], 220, 115, 70, 70, 115, 35)
};

//////////////////////////////////////////////////////////////////////////////////////////
////////////////////    INTERFACE     ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

function init() {
    document.getElementById("nom1").textContent = pokemon1.name;
    document.getElementById("nom2").textContent = pokemon2.name;
    document.getElementById("imagePokemon1").src = "Images/" + pokemon1.name + ".png";
    document.getElementById("imagePokemon2").src = "Images/" + pokemon2.name + ".png";
    refreshButtons();
}

function refreshButtons() {
    if (player == 1) {
        if (pokemons1.length > 0)
            document.getElementById("nomChangerPokemon0").textContent = pokemons1[0].name;
        else
            document.getElementById("Attaques").removeChild(document.getElementById("changerPokemon0"));
        if (pokemons1.length > 1)
            document.getElementById("nomChangerPokemon1").textContent = pokemons1[1].name;
        else
            document.getElementById("Attaques").removeChild(document.getElementById("changerPokemon1"));
    }
}

function changePokemon(i) {
    /*if (player == 1 && pokemons1.length > 1) {
        pokemons1.splice(0, 1);
        document.getElementById("nom1").textContent = pokemons1[0].name;
        document.getElementById("imagePokemon1").src = "Images/" + pokemons1[0].name + ".png";
        player = 2;
    }
    else if (player == 2 && pokemons2.length > 1) {
        pokemons2.splice(0, 1);
        document.getElementById("nom2").textContent = pokemons2[0].name;
        document.getElementById("imagePokemon2").src = "Images/" + pokemons2[0].name + ".png";
        player = 1;
    }
    else if (player == 1)
        alert(user1 + ", vous n'avez plus de pokemon");
    else
        alert(user2 + ", vous n'avez plus de pokemon");*/
    if (player == 1 && pokemons1.length > i) {
        pokemon1 = pokemons1[i];
        pokemons1.splice(i, 1);
        document.getElementById("nom1").textContent = pokemon1.name;
        document.getElementById("imagePokemon1").src = "Images/" + pokemon1.name + ".png";
        player = 2;
    }
    else if (player == 2 && pokemons2.length > i) {
        pokemon2 = pokemons2[i];
        pokemons2.splice(i, 1);
        document.getElementById("nom2").textContent = pokemon2.name;
        document.getElementById("imagePokemon2").src = "Images/" + pokemon2.name + ".png";
        player = 2;
    }
    else if (player == 1)
        alert(user1 + ", vous n'avez plus de pokemon");
    else
        alert(user2 + ", vous n'avez plus de pokemon");
    refreshButtons();
}
