export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d4d32a5098c528f55364ed1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ryw494md',
                  apiId: '68a49d9c-4ec7-451b-8595-17efd94a3099'
                },
                {
                  buildHookId: '5d4d32a51109a8fe8b35dd0e',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-bxmw9do6',
                  apiId: '61d50ebf-e2ea-489e-8f06-88484c5cf1a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pixelatorz/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-bxmw9do6.netlify.com', category: 'apps'}
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
