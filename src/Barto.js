const { Client } = require('discord.js');

module.exports = class Barto extends Client {

	constructor(token, prefix) {
		super();
		this.TOKEN = token;
		this.PREFIX = prefix;
		this.COMANDS = [{ comands: '!ping,' }];
	}


	async comands() {

		await super.on('message', (message) => {
			if (message.content.indexOf(this.PREFIX) == 0) {
				if (message.content == '!ping') {
					message.channel.send(`Pong, ainda estou em desenvolvimento - Quantidade atual de usuarios = ${message.guild.memberCount}`);
				}
				else if (message.content == '!help') {
					const stringComands = this.COMANDS.comands.map((comands) =>{
						return comands;
					});
					console.log(stringComands);
					message.channel.send('no momento so atendo pelo comando !ping teste');
				}
				else {
					message.channel.send('Pô você não falou nada com nada, tente digitar (!help)');
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

