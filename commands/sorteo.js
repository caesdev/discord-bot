function getBloque(message, username) {

    let handValue = Math.floor(Math.random() * 2);
    getPlay = ['Bloque A', 'Bloque B'];
    message.channel.send(
        `>>> @${username} sacas **${getPlay[handValue]}**`
    );
    
}
module.exports = { getBloque }