
let players = [0, 0]
for(let i = 1; i<=3; i++){

    for(player of players){
        let dice = Math.floor((Math.random()*6)+1)
        let index = players.indexOf(player)
        player += dice;
        players.splice(index, 1, player)
    }

}
if(players[0]>players[1]){
    console.log(`First player won with ${players[0]}`)
} else if (players[0]<players[1]){
    console.log(`Second player won with ${players[1]}`)
} else {
    console.log(`Players got equal results!`)
}
console.log(players);