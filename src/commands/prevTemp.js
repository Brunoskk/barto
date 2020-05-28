const axios = require('axios');
const NodeCache = require('node-cache');
const myCache = new NodeCache();

module.exports = {
	async tempo(nameCity, token) {

		if (myCache.has(nameCity)) {
			console.log('1');
			return myCache.get(nameCity);
		}
		try {
			console.log('2');
			const response = await axios(`https://api.hgbrasil.com/weather?key=${token}&city_name=${nameCity}`);
			myCache.set(nameCity, response.data);
			return myCache.get(nameCity);
		}
		catch (err) {
			return err;
		}
	},
};
