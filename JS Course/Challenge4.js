function calcTip(bill){
    bill >= 50 && bill<= 300? tipPercent=15: tipPercent=20
    let tip = bill * (tipPercent/100)
    let total = bill + tip
    return tip
}

calcTip(275)


let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let totals = []

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i])
    tips.push(tip)
    totals.push(tip+bills[i])
}
console.log(bills, tips, totals)

function calcAvg(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        
    }
    return sum/arr.length
}

console.log(calcAvg(totals))
