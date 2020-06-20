export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eedfe1a69e70d16dda50140',
                  title: 'Sanity Studio',
                  name: 'neues-script-studio',
                  apiId: 'a73cbe9a-8fd6-4334-a725-0598104de62d'
                },
                {
                  buildHookId: '5eedfe1ae9fafef3d0906607',
                  title: 'Blog Website',
                  name: 'neues-script',
                  apiId: '9bbf1982-403e-4459-a583-15f73455fa26'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sarahfossheim/neues-script',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://neues-script.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
