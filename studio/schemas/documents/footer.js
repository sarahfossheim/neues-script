export default {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    {
      name: 'privacy',
      type: 'text',
      title: 'Privacy statement (footer)'
    },
    {
      name: 'social',
      type: 'array',
      title: 'Social Media links',
      of: [{type: 'url'}]
    },
    {
      name: 'contact',
      type: 'text',
      title: 'Contact info'
    }
  ]
}
