export default {
  name: 'footer',
  type: 'document',
  title: 'Footer',
  fields: [
    {
      name: 'newsletter',
      type: 'bodyPortableText',
      title: 'Newsletter explanation',
      validation: Rule => Rule.required()
    },
    {
      name: 'privacy',
      type: 'bodyPortableText',
      title: 'Privacy statement (footer)',
      validation: Rule => Rule.required()
    },
    {
      name: 'social',
      type: 'array',
      title: 'Social Media links',
      of: [{type: 'externalLink'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'contact',
      type: 'text',
      title: 'Contact info',
      validation: Rule => Rule.required()
    }
  ]
}
