import MdCode from 'react-icons/lib/md/code'

export default {
  name: 'embed',
  type: 'object',
  title: 'Embed code',
  icon: MdCode,
  fields: [
    {
      name: 'code',
      type: 'text',
      title: 'Code',
      description: 'Paste any code, for example an iframe embed, in the textfield.',
      validation: Rule => Rule.required()
    }
  ]
}
