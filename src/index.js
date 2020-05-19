const Barto = require('./Barto');
const { token, prefix } = require('./config.json');

console.log('Iniciando BOT...');


const bot = new Barto(token, prefix);


bot.run();