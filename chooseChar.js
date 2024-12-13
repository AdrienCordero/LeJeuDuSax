let queryString = window.location.search;
let params = new URLSearchParams(queryString);
let user1 = params.get('user1');
let user2 = params.get('user2');
document.getElementById("nomUser1").innerHTML = user1;
document.getElementById("nomUser2").innerHTML = user2;

let user1SelectedCharacters = [];
let user2SelectedCharacters = [];

function showImage(characterId) {
    const image = document.getElementById(characterId + 'Image');
    image.style.display = 'block';
    image.style.width = '200%';
    image.style.height = '200%';
}

function hideImage(characterId) {
    const image = document.getElementById(characterId + 'Image');
    image.style.display = 'none';
}

function buttonStart() {
    button = document.getElementById("lienStart");
    button.href = "fight.html";
    button.href += "?user1=" + user1;
    button.href += "&user2=" + user2;
    button.href += "&chr1=" + user1SelectedCharacters[0];
    button.href += "&chr2=" + user1SelectedCharacters[1];
    button.href += "&chr3=" + user1SelectedCharacters[2];
    button.href += "&chr4=" + user2SelectedCharacters[0];
    button.href += "&chr5=" + user2SelectedCharacters[1];
    button.href += "&chr6=" + user2SelectedCharacters[2];
}

function selectCharacter(name, id, user) {
    if (user === 1 && user1SelectedCharacters.length < 3 && !user1SelectedCharacters.includes(name)) {
        user1SelectedCharacters.push(name);
        localStorage.setItem('user1SelectedCharacters', JSON.stringify(user1SelectedCharacters)); // Sauvegarde dans localStorage
        updateSelectedCharacters(1);
    } else if (user === 2 && user2SelectedCharacters.length < 3 && !user2SelectedCharacters.includes(name)) {
        user2SelectedCharacters.push(name);
        localStorage.setItem('user2SelectedCharacters', JSON.stringify(user2SelectedCharacters)); // Sauvegarde dans localStorage
        updateSelectedCharacters(2);
    }
    if (user1SelectedCharacters.length == 3 && user2SelectedCharacters.length == 3)
        buttonStart();
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
        removeButton.textContent = 'Remove';
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