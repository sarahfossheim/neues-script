const groq = require('groq')
const client = require('../utils/sanityClient');

module.exports =  async function() {
  const homePage =  await client.fetch(groq`
    *[_type == "homePage"][0]{
      ...,
      'headerImage': {
        'url': headerImage.asset->url,
        'alt': headerImage.alt
      },
      'aboutImage': {
        'url': aboutImage.asset->url,
        'alt': aboutImage.alt
      }
    }
  `);
  return homePage;
}