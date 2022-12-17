function getPower() {
    let powerValue = Math.floor(Math.random() * 10001);
    return `${powerValue}`
}
module.exports = { getPower }