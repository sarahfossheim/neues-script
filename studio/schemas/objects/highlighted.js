import MdTexture from 'react-icons/lib/md/texture'

export default {
  name: 'highlighted',
  type: 'object',
  title: 'Highlighted list',
  icon: MdTexture,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title  (optional)'
    },
    {
      name: 'list',
      type: 'array',
      title: 'List',
      validation: Rule => Rule.required(),
      of: [
        {
          type: 'string'
        }
      ]
    }
  ]
}
