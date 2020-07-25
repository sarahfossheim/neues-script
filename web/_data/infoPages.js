const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const groq = require('groq')
const client = require('../utils/sanityClient.js')
const serializers = require('../utils/serializers')
const overlayDrafts = require('../utils/overlayDrafts')
const hasToken = !!client.config().token

function generateBody (page) {
  return {
    ...page,
    body: BlocksToMarkdown(page.body, { serializers, ...client.config() })
  }
}

async function getPages () {
    const pages = await client.fetch(groq`*[_type == "infoPage"]`);
    const reducedDocs = overlayDrafts(hasToken, pages)
    const preparePages = reducedDocs.map(generateBody)
  console.log('>>>', preparePages);
//   return generateBody(preparePages)
    return preparePages;
}

module.exports = getPages;
