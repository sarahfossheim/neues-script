export default {
  name: 'infoPage',
  type: 'document',
  title: 'Info pages',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body',
      validation: Rule => Rule.required()
    }
  ]
}
