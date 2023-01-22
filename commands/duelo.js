function getDuelo(message, username) {
    
    let handValue = Math.floor(Math.random() * 3);
    getPlay = ['Piedra', 'Papel', 'Tijera'];
    message.channel.send(
        `>>> @${username} sacas **${getPlay[handValue]}**`
    );

}
module.exports = { getDuelo }
