let temps = [17,21,23]
function printWeather(temp){
    for (let i = 0; i < temp.length; i++) {
        return `${temp[i]}°C in ${i+1} days`
        
    }
}

console.log(printWeather(temps))