function randomGame(){
    let tries = 0; 
    let counter = setInterval(function(){
        let num = Math.random();
        tries++
        console.log(num);
        if (num > 0.75){
            clearInterval(counter);
            console.log("It took us " + tries + " try/tries to find a number greater than .75");
        }
    },1000)
}

randomGame();