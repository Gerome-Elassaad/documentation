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
      light: '/Repo-Booster-icon.png',
      dark: '/Repo-Booster-icon.png'
    },
    search: true,
    colorMode: true,
    links: [
      {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/repo-booster',
        target: '_blank',
        'aria-label': 'Repo-Booster on GitHub'
      },
      // Docs Badge link added here
      {
        label: 'Docs',
        to: 'https://docs.repo-booster.com',
        target: '_blank',
        class: 'ml-4 py-1 px-3 bg-blue-600 text-white rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300 ease-in-out',
        'aria-label': 'Repo-Booster Documentation'
      }
    ]
  },
  footer: {
    credits: 'Copyright © 2025 Repo-Booster',
    colorMode: true,
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
          label: 'Install on GitHub',
          to: 'https://github.com/apps/repo-booster',
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
