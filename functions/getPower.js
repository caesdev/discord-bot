function getPower() {
    let powerValue = Math.floor(Math.random() * 1001);
    let powerValueToString = powerValue.toString();
    if (powerValue > 0 && powerValue <= 299) {
        return `tu nivel de poder es de: ${powerValueToString}\neso te coloca en clase baja`
    } else if (powerValue >= 300 && powerValue <= 699) {
        return `tu nivel de poder es de: ${powerValueToString} \neso te coloca en clase media`
    } else if (powerValue >= 700 && powerValue <= 899) {
        return `tu nivel de poder es de: ${powerValueToString} \neso te coloca en clase alta`
    } else {
        return `tu nivel de poder es de: ${powerValueToString} \neso te coloca en clase suprema`
    }
}

module.exports = { getPower }