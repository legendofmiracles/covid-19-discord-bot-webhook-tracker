const covid = require('novelcovid');
const discord = require('discord.js')
require('dotenv').config()
const id = process.env.id;
const token = process.env.token;
async function Corona() {
   // Specific Country
   let specificCountry = await covid.getCountry({country: 'Germany'});
   return specificCountry;
}
Corona().then((country) => {
    // console.log(country);

    new discord.WebhookClient(id, token).send('Aktuelle Corona Anzahl Deutschland: ' + (country.cases - country.recovered) + '\n Infizierte pro 1ne million: '+ country.casesPerOneMillion + '\n Es haben sich aber schon ' + country.recovered + ' wieder erholt seit anfang der Pandemie. \n Heute wurden schon ' + country.todayCases + ' neue faelle verzeichnet. \n Es sind ' + country.deaths  + ' leute in Deutschland dran gestorben und alleine heute sind ' + country.todayDeaths + ' an covid-19 gestorben. \n Damit waere der Durchschnitt an toten pro eine million ' + country.deathsPerOneMillion).catch(console.error);
})
