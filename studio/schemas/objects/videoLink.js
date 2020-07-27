import MdVideoCall from 'react-icons/lib/md/video-call'

export default {
  name: 'videoLink',
  type: 'object',
  title: 'Video Embed (URL)',
  icon: MdVideoCall,
  fields: [
    {
      name: 'href',
      type: 'url',
      title: 'URL',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      type: 'string',
      title: 'Video title'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
