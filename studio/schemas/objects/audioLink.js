export default {
  name: 'audioLink',
  type: 'object',
  title: 'SoundCloud Embed (URL)',
  fields: [
    {
      name: 'code',
      type: 'string',
      title: 'Code',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
