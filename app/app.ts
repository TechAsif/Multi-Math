function startGame(){
    var messagesElement = document.getElementById("messages");
    messagesElement.innerText = "Welcome to multimath"
}

document.getElementById("startGame").addEventListener('click',startGame);