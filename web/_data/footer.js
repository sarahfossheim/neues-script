const groq = require('groq')
const client = require('../utils/sanityClient');
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const serializers = require('../utils/serializers')

function generateBody (page) {
  return {
    ...page,
    newsletter: BlocksToMarkdown(page.newsletter, { serializers, ...client.config() }),
    privacy: BlocksToMarkdown(page.privacy, { serializers, ...client.config() })
  }
}

module.exports =  async function() {
  let footer =  await client.fetch(groq`
    *[_type == "footer"][0]
  `);
  footer = generateBody(footer);
  return footer;
}