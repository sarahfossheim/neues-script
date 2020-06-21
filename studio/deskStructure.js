import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdHome from 'react-icons/lib/md/home'
import MdLibraryBooks from 'react-icons/lib/md/library-books'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings', 'homePage'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Home Page')
        .icon(MdHome)
        .child(
          S.editor()
            .id('homePage')
            .schemaType('homePage')
            .documentId('homePage')
            .title('Home Page')
        ),
      S.listItem()
        .title('Journal')
        .icon(MdLibraryBooks)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
