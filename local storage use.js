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
}


function loadSelectedCharacters() {
    const savedUser1Characters = localStorage.getItem('user1SelectedCharacters');
    const savedUser2Characters = localStorage.getItem('user2SelectedCharacters');
            
    if (savedUser1Characters) {
        user1SelectedCharacters = JSON.parse(savedUser1Characters);
        updateSelectedCharacters(1);
    }
            
    if (savedUser2Characters) {
    user2SelectedCharacters = JSON.parse(savedUser2Characters);
    updateSelectedCharacters(2);
    }
}