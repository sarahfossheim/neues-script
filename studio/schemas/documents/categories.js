export default {
  name: 'categories',
  type: 'document',
  title: 'Categories',
  fields: [
    {
      name: 'categories',
      type: 'array',
      of: [{type: 'category'}],
      title: 'Categories'
    }
  ]
}
