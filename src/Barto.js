const { Client } = require('discord.js');
const { tempo } = require('./commands/prevTemp');

module.exports = class Barto extends Client {

	constructor(token, prefix) {
		super();
		this.TOKEN = token;
		this.PREFIX = prefix;
		this.COMANDS = [{ comands: '!ping,' }];
	}

	async comands() {

		await super.on('message', (message) => {
			if (message.author.bot) return;

			if (message.content.indexOf(this.PREFIX) == 0) {
				if (message.content == '!ping') {
					message.reply('Pong!');
				}
				else if (message.content == '!help') {
					message.reply('No momento estou atendendo por !ping, !help, !tempo');
				}
				else if (message.content == '!tempo') {
					message.reply('Oi me diz ai onde a cidade que você mora?!\nVocê tem 10s para responder se não apagarei a mensagem!');
					message.channel.awaitMessages(m => m.author.id == message.author.id, { max: 1, time: 10000 }).then(async (collection) => {
						if (collection.content !== '') {
							try {
								const result = await tempo(collection.content);
								console.log(result);
							}
							catch (err) {
								return message.reply('Ops.. Parece que lgo deu errado!');
							}
						}
					});
				}
				else {
					message.reply('Pô você não falou nada com nada, tente digitar (!help)');
				}
			}
		});
	}

	async run() {
		super.once('ready', () => {
			console.log('BOT ligado');
			return this.comands();
		});

		await this.login(this.TOKEN);
	}
};

