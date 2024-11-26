import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    ui: group({
      title: 'UI',
      description: 'UI Customization.',
      icon: 'i-mdi-palette-outline',
      fields: {
        icons: group({
          title: 'Icons',
          description: 'Manage icons used in Repo-Booster.',
          icon: 'i-mdi-application-settings-outline',
          fields: {
            search: field({
              type: 'icon',
              title: 'Search Bar',
              description: 'Icon to display in the search bar.',
              icon: 'i-mdi-magnify',
              default: 'i-heroicons-magnifying-glass-20-solid'
            }),
            dark: field({
              type: 'icon',
              title: 'Dark mode',
              description: 'Icon of color mode button for dark mode.',
              icon: 'i-mdi-moon-waning-crescent',
              default: 'i-heroicons-moon-20-solid'
            }),
            light: field({
              type: 'icon',
              title: 'Light mode',
              description: 'Icon of color mode button for light mode.',
              icon: 'i-mdi-white-balance-sunny',
              default: 'i-heroicons-sun-20-solid'
            }),
            external: field({
              type: 'icon',
              title: 'External Link',
              description: 'Icon for external link.',
              icon: 'i-mdi-arrow-top-right',
              default: 'i-heroicons-arrow-up-right-20-solid'
            }),
            chevron: field({
              type: 'icon',
              title: 'Chevron',
              description: 'Icon for chevron.',
              icon: 'i-mdi-chevron-down',
              default: 'i-heroicons-chevron-down-20-solid'
            }),
            hash: field({
              type: 'icon',
              title: 'Hash',
              description: 'Icon for hash anchors.',
              icon: 'i-ph-hash',
              default: 'i-heroicons-hashtag-20-solid'
            })
          }
        }),
        primary: field({
          type: 'string',
          title: 'Primary',
          description: 'Primary color of your UI.',
          icon: 'i-mdi-palette-outline',
          default: 'blue',
          required: ['blue', 'green', 'gray', 'black', 'white']
        }),
        gray: field({
          type: 'string',
          title: 'Gray',
          description: 'Gray color of your UI.',
          icon: 'i-mdi-palette-outline',
          default: 'cool',
          required: ['slate', 'cool', 'zinc', 'neutral', 'stone']
        })
      }
    }),
    seo: group({
      title: 'SEO',
      description: 'SEO configuration for Repo-Booster.',
      icon: 'i-ph-app-window',
      fields: {
        siteName: field({
          type: 'string',
          title: 'Site Name',
          description: 'Name used in ogSiteName and used as part of your page title (e.g., My page title - Repo-Booster).',
          icon: 'i-mdi-web',
          default: 'Repo-Booster Documentation'
        })
      }
    }),
    header: group({
      title: 'Header',
      description: 'Header configuration.',
      icon: 'i-mdi-page-layout-header',
      fields: {
        logo: field({
          type: 'media',
          title: 'Repo-Booster',
          description: 'Header image for Repo-Booster.',
          icon: 'i-mdi-image-filter-center-focus-strong-outline',
          default: '/Repo-Booster-icon.png'
        }),
        search: field({
          type: 'boolean',
          title: 'Search Bar',
          description: 'Hide or display the search bar.',
          icon: 'i-mdi-magnify',
          default: true
        }),
        colorMode: field({
          type: 'boolean',
          title: 'Color Mode',
          description: 'Hide or display the color mode button in your header.',
          icon: 'i-mdi-moon-waning-crescent',
          default: true
        }),
        links: field({
          type: 'array',
          title: 'Links',
          description: 'Array of links displayed in the header.',
          icon: 'i-mdi-link-variant',
          default: [
            {
              icon: 'i-simple-icons-github',
              to: 'https://github.com/repo-booster',
              target: '_blank',
              ariaLabel: 'Repo-Booster GitHub Repository'
            },
            {
              icon: 'i-simple-icons-discord',
              to: 'https://discord.com/invite/repo-booster',
              target: '_blank',
              ariaLabel: 'Repo-Booster Discord'
            }
          ]
        })
      }
    }),
    footer: group({
      title: 'Footer',
      description: 'Footer configuration.',
      icon: 'i-mdi-page-layout-footer',
      fields: {
        credits: field({
          type: 'string',
          title: 'Footer credits',
          description: 'Text to display as credits in the footer.',
          icon: 'i-mdi-circle-edit-outline',
          default: '© 2025 Repo-Booster'
        }),
        colorMode: field({
          type: 'boolean',
          title: 'Color Mode',
          description: 'Hide or display the color mode button in the footer.',
          icon: 'i-mdi-moon-waning-crescent',
          default: false
        }),
        links: field({
          type: 'array',
          title: 'Links',
          description: 'Array of links displayed in the footer.',
          icon: 'i-mdi-link-variant',
          default: [
            {
              icon: 'i-simple-icons-github',
              to: 'https://github.com/repo-booster',
              target: '_blank',
              ariaLabel: 'Repo-Booster GitHub Repository'
            },
            {
              icon: 'i-simple-icons-discord',
              to: 'https://discord.com/invite/repo-booster',
              target: '_blank',
              ariaLabel: 'Repo-Booster Discord'
            },
            {
              icon: 'i-simple-icons-twitter',
              to: 'https://twitter.com/repo_booster',
              target: '_blank',
              ariaLabel: 'Repo-Booster Twitter'
            }
          ]
        })
      }
    }),
    toc: group({
      title: 'Table of contents',
      description: 'TOC configuration.',
      icon: 'i-mdi-table-of-contents',
      fields: {
        title: field({
          type: 'string',
          title: 'Title',
          description: 'Text to display as title of the main TOC.',
          icon: 'i-mdi-format-title',
          default: 'Table of Contents'
        }),
        bottom: group({
          title: 'Bottom',
          description: 'Bottom TOC configuration.',
          icon: 'i-mdi-table-of-contents',
          fields: {
            title: field({
              type: 'string',
              title: 'Title',
              description: 'Text to display as title of the bottom TOC.',
              icon: 'i-mdi-format-title',
              default: 'Community'
            }),
            edit: field({
              type: 'string',
              title: 'Edit Page Link',
              description: 'URL of your repository content folder.',
              icon: 'i-ph-note-pencil',
              default: 'https://github.com/repo-booster/docs/edit/main/content'
            }),
            links: field({
              type: 'array',
              title: 'Links',
              description: 'Array of links displayed in the bottom TOC.',
              icon: 'i-mdi-link-variant',
              default: [
                {
                  icon: 'i-heroicons-star',
                  label: 'Star on GitHub',
                  to: 'https://github.com/repo-booster',
                  target: '_blank'
                },
                {
                  icon: 'i-heroicons-book-open',
                  label: 'Repo-Booster Docs',
                  to: 'https://repo-booster.com/docs',
                  target: '_blank'
                },
                {
                  icon: 'i-simple-icons-repo',
                  label: 'Upgrade to Pro',
                  to: 'https://repo-booster.com/pricing',
                  target: '_blank'
                }
              ]
            })
          }
        })
      }
    })
  }
})
