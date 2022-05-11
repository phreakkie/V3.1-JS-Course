let markMass = 78
let markHeight = 1.69
let johnMass = 92
let johnHeight = 1.88
function bmiCalc(mass, height){
    let BMI = mass / (height * 2)
    return BMI
}

let markBMI = bmiCalc(markMass, markHeight)
let johnBMI = bmiCalc(johnMass, johnHeight)

let = markHigherBMI = markBMI > johnBMI
if(markHigherBMI){
    console.log("Marks BMI ("+markBMI+") er højere end Johns (" + johnBMI+")")
}else{
    console.log("Johns BMI (" + johnBMI + ") er højere end Marks ("+markBMI+")")
}


let mark = [{fname:"Mark", lname:"Miller", mass:78, height:1.69}]
let john = [{fname:"John", lname:"Smith", mass:92, height:1.88}]

function calcBMI(e){
    let bmi = e.mass / (e.height*2)
    return bmi
}

console.log(calcBMI(mark))