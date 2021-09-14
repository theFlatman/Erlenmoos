export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '61408064a8bb19253dcb4377',
                  title: 'Sanity Studio',
                  name: 'erlenmoos-studio',
                  apiId: '7623199e-6a01-49ba-be76-3ddeb3d29837'
                },
                {
                  buildHookId: '614080647a40b321b6685d67',
                  title: 'Landing pages Website',
                  name: 'erlenmoos',
                  apiId: 'd7a0942f-dbd6-40cb-9efa-925d3dc978f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/theFlatman/Erlenmoos',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://erlenmoos.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
