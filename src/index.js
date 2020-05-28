const Barto = require('./Barto');
const { token, prefix, tokenPrevTemp } = require('./config.json');

console.log('Iniciando BOT...');
const bot = new Barto(token, prefix, tokenPrevTemp);

bot.run();