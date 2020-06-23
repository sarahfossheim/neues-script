export default {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
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
      of: [{type: 'string'}]
    }
  ]
}
