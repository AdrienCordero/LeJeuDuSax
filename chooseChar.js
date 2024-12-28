let queryString = window.location.search;
let params = new URLSearchParams(queryString);
let user1 = params.get('user1');
let user2 = params.get('user2');
document.getElementById("nomUser1").innerHTML = user1;
document.getElementById("nomUser2").innerHTML = user2;

let user1SelectedCharacters = [];
let user2SelectedCharacters = [];

document.getElementById("lienStart").addEventListener('click', function(event) {
    event.preventDefault();
    buttonStart();
});

document.getElementsByClassName("characterButtons")[0].addEventListener('click', function() {
    document.getElementById('characterSound').play();
});

document.getElementsByClassName("characterButtons")[1].addEventListener('click', function() {
    document.getElementById('characterSound').play();
});

document.getElementById("bgMusic").volume = 0.1;
document.getElementById("startSound").volume = 1.0;
document.getElementById("characterSound").volume = 1.0;

function showImage(characterId) {
    const image = document.getElementById(characterId + 'Image');
    image.style.display = 'block';
}

function hideImage(characterId) {
    const image = document.getElementById(characterId + 'Image');
    image.style.display = 'none';
}

function buttonStart() {
    if (user1SelectedCharacters.length == 3 && user2SelectedCharacters.length == 3) {
        var button = document.getElementById("lienStart");
        var audio = new Audio('Audio/startSound.m4a');
        audio.play();

        audio.onended = function() {
            button.href = "fight.html";
            button.href += "?user1=" + user1;
            button.href += "&user2=" + user2;
            button.href += "&chr1=" + user1SelectedCharacters[0];
            button.href += "&chr2=" + user1SelectedCharacters[1];
            button.href += "&chr3=" + user1SelectedCharacters[2];
            button.href += "&chr4=" + user2SelectedCharacters[0];
            button.href += "&chr5=" + user2SelectedCharacters[1];
            button.href += "&chr6=" + user2SelectedCharacters[2];
    
            window.location.href = button.href;
        };
    }        
}

function selectCharacter(name, id, user) {
    if (user === 1 && user1SelectedCharacters.length < 3 && !user1SelectedCharacters.includes(name)) {
        user1SelectedCharacters.push(name);
        updateSelectedCharacters(1);
    } else if (user === 2 && user2SelectedCharacters.length < 3 && !user2SelectedCharacters.includes(name)) {
        user2SelectedCharacters.push(name);
        updateSelectedCharacters(2);
    }
}

function updateSelectedCharacters(user) {
    let list;
    let selectedCharacters;

    if (user === 1) {
        list = document.getElementById("user1SelectedCharacters");
        selectedCharacters = user1SelectedCharacters;
    } else {
        list = document.getElementById("user2SelectedCharacters");
        selectedCharacters = user2SelectedCharacters;
    }

    list.innerHTML = '';

    selectedCharacters.forEach((character) => {
        let li = document.createElement('li');
        li.textContent = character;

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Retirer';
        removeButton.classList.add('removeButton');
        removeButton.onclick = function() {
            removeCharacter(character, user);
        };

        li.appendChild(removeButton);
        list.appendChild(li);
    });
}

function removeCharacter(character, user) {
    if (user === 1) {
        const index = user1SelectedCharacters.indexOf(character);
        if (index > -1) {
            user1SelectedCharacters.splice(index, 1);
            updateSelectedCharacters(1);
        }
    } else {
        const index = user2SelectedCharacters.indexOf(character);
        if (index > -1) {
            user2SelectedCharacters.splice(index, 1);
            updateSelectedCharacters(2);
        }
    }
}