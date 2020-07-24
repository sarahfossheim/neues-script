const imageUrl = require('./imageUrl')

// Learn more on https://www.sanity.io/docs/guides/introduction-to-portable-text
module.exports = {
  types: {
    authorReference: ({node}) => `[${node.name}](/authors/${node.slug.current})`,
    code: ({node}) =>
      '```' + node.language + '\n' + node.code + '\n```',
    mainImage: ({node}) => {
      if(node.caption) {
        return `<div>
          <img src="${imageUrl(node).url()}" alt="${node.alt}" />
          <figcaption>${node.caption}</figcaption>
        </div>`
      }
      return `![${node.alt}](${imageUrl(node).url()})`;
    },
    file: ({node}) => '',
    video: ({node}) => `VIDEO: <iframe width="100%" height="400px" src="${node.href}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    audio: ({node}) => `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${node.code}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`,
    embed: ({node}) => `${node.code}`
  }
}
