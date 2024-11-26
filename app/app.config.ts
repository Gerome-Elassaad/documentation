export default defineAppConfig({
  ui: {
    primary: 'blue',
    gray: 'cool',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800'
      }
    }
  },
  seo: {
    siteName: 'Documentation - Repo-Booster'
  },
  header: {
    title: 'Repo-Booster',
    logo: {
      alt: 'Repo-Booster', 
      light: '/Repo-Booster-icon.png', // Path to the logo for light mode
      dark: '/Repo-Booster-icon.png' // Path to the logo for dark mode
    },
    search: true, // Enable the search bar
    colorMode: true, // Enable the color mode toggle
    links: [
      {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/repo-booster',
        target: '_blank',
        'aria-label': 'Repo-Booster on GitHub'
      }
    ]
  },
  footer: {
    credits: 'Copyright © 2025 Repo-Booster',
    colorMode: true, // Enable color mode toggle in the footer
    links: [
      {
        icon: 'i-simple-icons-repo',
        to: 'https://repo-booster.com',
        target: '_blank',
        'aria-label': 'Repo-Booster Website'
      },
      {
        icon: 'i-simple-icons-discord',
        to: 'https://discord.com/invite/repo-booster',
        target: '_blank',
        'aria-label': 'Repo-Booster on Discord'
      },
      {
        icon: 'i-simple-icons-x',
        to: 'https://x.com/repo_booster',
        target: '_blank',
        'aria-label': 'Repo-Booster on X'
      },
      {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/repo-booster',
        target: '_blank',
        'aria-label': 'Repo-Booster on GitHub'
      }
    ]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/repo-booster/docs/edit/main/content',
      links: [
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
    }
  }
})
