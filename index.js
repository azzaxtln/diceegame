if (performance.getEntriesByType("navigation")[0].type === "reload") {
    rollDice();
}

function rollDice(){
    let randomNumber1 = Math.round(Math.random() * 5 + 1);
    let randomNumber2 = Math.round(Math.random() * 5 + 1);
    
    
    document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".webp")
    
    document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".webp")
    
    
    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").textContent = "Player 1 wins";
    } else if(randomNumber1 === randomNumber2){
        document.querySelector("h1").textContent = "A tie!!";
    } else{
        document.querySelector("h1").textContent = "Player 2 wins";
    }

}


