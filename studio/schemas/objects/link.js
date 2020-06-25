export default {
  name: 'externalLink',
  type: 'object',
  title: 'Link',
  fields: [
    {
      name: 'href',
      type: 'url',
      title: 'URL'
    },
    {
      name: 'linkName',
      type: 'string',
      title: 'Title'
    }
  ],
  preview: {
    select: {
      title: 'linkName'
    }
  }
}
