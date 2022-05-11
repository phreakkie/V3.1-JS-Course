let dolphins1 = 85
let dolphins2 = 54
let dolphins3 = 41
let koalas1 = 23
let koalas2 = 34
let koalas3 = 27
function avgScoreCalc(score1, score2, score3){
    let total = score1 + score2 + score3
    let avg = total / 3
    return avg
}

let dolphinAvg = avgScoreCalc(dolphins1, dolphins2, dolphins3)
let koalaAvg = avgScoreCalc(koalas1, koalas2, koalas3)

let winner = dolphinAvg > koalaAvg 

if(dolphinAvg == koalaAvg){
    if(dolphinAvg >= 100 || koalaAvg >= 100){
    console.log("It's a tie!")
    }
}
 else if(winner == true && dolphinAvg > 100){
    console.log("Dolphins wins with "+dolphinAvg+" point sover Dolphins with " +koalaAvg+ " points")
}else if(winner == false && koalaAvg > 100){
     console.log("Koalas wins with "+koalaAvg+" points over Dolphins with " +dolphinAvg+ " points")
}

function checkWinner(){
    if(dolphinAvg > koalaAvg *2){
        console.log("Dolphins win ("+dolphinAvg+" vs "+koalaAvg+")")
    }else if(koalaAvg > dolphinAvg*2){
        console.log("Koalas win ("+koalaAvg+" vs "+dolphinAvg+")")
    }else{
        console.log("No winners")
    }
}
checkWinner()