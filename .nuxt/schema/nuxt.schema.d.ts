export interface NuxtCustomSchema {
 appConfig?: {
  /**
   * Nuxt Icon
   * 
   * Configure Nuxt Icon module preferences.
   * 
   * 
   * @studioIcon material-symbols:star
  */
  icon?: {
   /**
    * Icon Size
    * 
    * Set the default icon size.
    * 
    * 
    * @studioIcon material-symbols:format-size-rounded
   */
   size?: string | undefined,

   /**
    * CSS Class
    * 
    * Set the default CSS class.
    * 
    * @default ""
    * 
    * @studioIcon material-symbols:css
   */
   class?: string,

   /**
    * Default Attributes
    * 
    * Attributes applied to every icon component.
    * 
    * @default { "aria-hidden": true }
    * 
    * 
    * @studioIcon material-symbols:settings
   */
   attrs?: Record<string, string | number | boolean>,

   /**
    * Default Rendering Mode
    * 
    * Set the default rendering mode for the icon component
    * 
    * @default "css"
    * 
    * @enum css,svg
    * 
    * @studioIcon material-symbols:move-down-rounded
   */
   mode?: string,

   /**
    * Icon aliases
    * 
    * Define Icon aliases to update them easily without code changes.
    * 
    * 
    * @studioIcon material-symbols:star-rounded
   */
   aliases?: { [alias: string]: string },

   /**
    * CSS Selector Prefix
    * 
    * Set the default CSS selector prefix.
    * 
    * @default "i-"
    * 
    * @studioIcon material-symbols:format-textdirection-l-to-r
   */
   cssSelectorPrefix?: string,

   /**
    * CSS Layer Name
    * 
    * Set the default CSS `@layer` name.
    * 
    * 
    * @studioIcon material-symbols:layers
   */
   cssLayer?: string | undefined,

   /**
    * Use CSS `:where()` Pseudo Selector
    * 
    * Use CSS `:where()` pseudo selector to reduce specificity.
    * 
    * @default true
    * 
    * @studioIcon material-symbols:low-priority
   */
   cssWherePseudo?: boolean,

   /**
    * Icon Collections
    * 
    * List of known icon collections name. Used to resolve collection name ambiguity.
    * e.g. `simple-icons-github` -> `simple-icons:github` instead of `simple:icons-github`
    * 
    * When not provided, will use the full Iconify collection list.
    * 
    * 
    * @studioIcon material-symbols:format-list-bulleted
   */
   collections?: string[] | null,

   /**
    * Icon Provider
    * 
    * Provider to use for fetching icons
    * 
    * - `server` - Fetch icons with a server handler
    * - `iconify` - Fetch icons with Iconify API, purely client-side
    * 
    * `server` by default; `iconify` when `ssr: false`
    * 
    * 
    * @enum server,iconify
    * 
    * @studioIcon material-symbols:cloud
   */
   provider?: "server" | "iconify" | undefined,

   /**
    * Iconify API Endpoint URL
    * 
    * Define a custom Iconify API endpoint URL. Useful if you want to use a self-hosted Iconify API. Learn more: https://iconify.design/docs/api.
    * 
    * @default "https://api.iconify.design"
    * 
    * @studioIcon material-symbols:api
   */
   iconifyApiEndpoint?: string,

   /**
    * Fallback to Iconify API
    * 
    * Fallback to Iconify API if server provider fails to found the collection.
    * 
    * @default true
    * 
    * @enum true,false,server-only,client-only
    * 
    * @studioIcon material-symbols:public
   */
   fallbackToApi?: boolean | "server-only" | "client-only",

   /**
    * Local API Endpoint Path
    * 
    * Define a custom path for the local API endpoint.
    * 
    * @default "/api/_nuxt_icon"
    * 
    * @studioIcon material-symbols:api
   */
   localApiEndpoint?: string,

   /**
    * Fetch Timeout
    * 
    * Set the timeout for fetching icons.
    * 
    * @default 1500
    * 
    * @studioIcon material-symbols:timer
   */
   fetchTimeout?: number,

   /**
    * Customize callback
    * 
    * Customize icon content (replace stroke-width, colors, etc...).
    * 
    * 
    * @studioIcon material-symbols:edit
   */
   customize?: IconifyIconCustomizeCallback,
  },

  /**
   * UI
   * 
   * UI Customization.
   * 
   * 
   * @studioIcon i-mdi-palette-outline
  */
  ui?: {
   /**
    * Icons
    * 
    * Manage icons used in Repo-Booster.
    * 
    * 
    * @studioIcon i-mdi-application-settings-outline
   */
   icons?: {
    /**
     * Search Bar
     * 
     * Icon to display in the search bar.
     * 
     * @default "i-heroicons-magnifying-glass-20-solid"
     * 
     * @studioInput icon
     * 
     * @studioIcon i-mdi-magnify
    */
    search?: string,

    /**
     * Dark mode
     * 
     * Icon of color mode button for dark mode.
     * 
     * @default "i-heroicons-moon-20-solid"
     * 
     * @studioInput icon
     * 
     * @studioIcon i-mdi-moon-waning-crescent
    */
    dark?: string,

    /**
     * Light mode
     * 
     * Icon of color mode button for light mode.
     * 
     * @default "i-heroicons-sun-20-solid"
     * 
     * @studioInput icon
     * 
     * @studioIcon i-mdi-white-balance-sunny
    */
    light?: string,

    /**
     * External Link
     * 
     * Icon for external link.
     * 
     * @default "i-heroicons-arrow-up-right-20-solid"
     * 
     * @studioInput icon
     * 
     * @studioIcon i-mdi-arrow-top-right
    */
    external?: string,

    /**
     * Chevron
     * 
     * Icon for chevron.
     * 
     * @default "i-heroicons-chevron-down-20-solid"
     * 
     * @studioInput icon
     * 
     * @studioIcon i-mdi-chevron-down
    */
    chevron?: string,

    /**
     * Hash
     * 
     * Icon for hash anchors.
     * 
     * @default "i-heroicons-hashtag-20-solid"
     * 
     * @studioInput icon
     * 
     * @studioIcon i-ph-hash
    */
    hash?: string,
   },

   /**
    * Primary
    * 
    * Primary color of your UI.
    * 
    * @default "blue"
    * 
    * @required blue,green,gray,black,white
    * 
    * @studioInput string
    * 
    * @studioIcon i-mdi-palette-outline
   */
   primary?: string,

   /**
    * Gray
    * 
    * Gray color of your UI.
    * 
    * @default "cool"
    * 
    * @required slate,cool,zinc,neutral,stone
    * 
    * @studioInput string
    * 
    * @studioIcon i-mdi-palette-outline
   */
   gray?: string,
  },

  /**
   * SEO
   * 
   * SEO configuration for Repo-Booster.
   * 
   * 
   * @studioIcon i-ph-app-window
  */
  seo?: {
   /**
    * Site Name
    * 
    * Name used in ogSiteName and used as part of your page title (e.g., My page title - Repo-Booster).
    * 
    * @default "Repo-Booster Documentation"
    * 
    * @studioInput string
    * 
    * @studioIcon i-mdi-web
   */
   siteName?: string,
  },

  /**
   * Header
   * 
   * Header configuration.
   * 
   * 
   * @studioIcon i-mdi-page-layout-header
  */
  header?: {
   /**
    * Repo-Booster
    * 
    * Header image for Repo-Booster.
    * 
    * @default "/Repo-Booster-icon.png"
    * 
    * @studioInput media
    * 
    * @studioIcon i-mdi-image-filter-center-focus-strong-outline
   */
   logo?: string,

   /**
    * Search Bar
    * 
    * Hide or display the search bar.
    * 
    * @default true
    * 
    * @studioInput boolean
    * 
    * @studioIcon i-mdi-magnify
   */
   search?: boolean,

   /**
    * Color Mode
    * 
    * Hide or display the color mode button in your header.
    * 
    * @default true
    * 
    * @studioInput boolean
    * 
    * @studioIcon i-mdi-moon-waning-crescent
   */
   colorMode?: boolean,

   /**
    * Links
    * 
    * Array of links displayed in the header.
    * 
    * @default [{"icon":"i-simple-icons-github","to":"https://github.com/repo-booster","target":"_blank","ariaLabel":"Repo-Booster GitHub Repository"},{"icon":"i-simple-icons-discord","to":"https://discord.com/invite/repo-booster","target":"_blank","ariaLabel":"Repo-Booster Discord"}]
    * 
    * @studioInput array
    * 
    * @studioIcon i-mdi-link-variant
   */
   links?: Array<{

   }>,
  },

  /**
   * Footer
   * 
   * Footer configuration.
   * 
   * 
   * @studioIcon i-mdi-page-layout-footer
  */
  footer?: {
   /**
    * Footer credits
    * 
    * Text to display as credits in the footer.
    * 
    * @default "© 2025 Repo-Booster"
    * 
    * @studioInput string
    * 
    * @studioIcon i-mdi-circle-edit-outline
   */
   credits?: string,

   /**
    * Color Mode
    * 
    * Hide or display the color mode button in the footer.
    * 
    * @default false
    * 
    * @studioInput boolean
    * 
    * @studioIcon i-mdi-moon-waning-crescent
   */
   colorMode?: boolean,

   /**
    * Links
    * 
    * Array of links displayed in the footer.
    * 
    * @default [{"icon":"i-simple-icons-github","to":"https://github.com/repo-booster","target":"_blank","ariaLabel":"Repo-Booster GitHub Repository"},{"icon":"i-simple-icons-discord","to":"https://discord.com/invite/repo-booster","target":"_blank","ariaLabel":"Repo-Booster Discord"},{"icon":"i-simple-icons-twitter","to":"https://twitter.com/repo_booster","target":"_blank","ariaLabel":"Repo-Booster Twitter"}]
    * 
    * @studioInput array
    * 
    * @studioIcon i-mdi-link-variant
   */
   links?: Array<{

   }>,
  },

  /**
   * Table of contents
   * 
   * TOC configuration.
   * 
   * 
   * @studioIcon i-mdi-table-of-contents
  */
  toc?: {
   /**
    * Title
    * 
    * Text to display as title of the main TOC.
    * 
    * @default "Table of Contents"
    * 
    * @studioInput string
    * 
    * @studioIcon i-mdi-format-title
   */
   title?: string,

   /**
    * Bottom
    * 
    * Bottom TOC configuration.
    * 
    * 
    * @studioIcon i-mdi-table-of-contents
   */
   bottom?: {
    /**
     * Title
     * 
     * Text to display as title of the bottom TOC.
     * 
     * @default "Community"
     * 
     * @studioInput string
     * 
     * @studioIcon i-mdi-format-title
    */
    title?: string,

    /**
     * Edit Page Link
     * 
     * URL of your repository content folder.
     * 
     * @default "https://github.com/repo-booster/docs/edit/main/content"
     * 
     * @studioInput string
     * 
     * @studioIcon i-ph-note-pencil
    */
    edit?: string,

    /**
     * Links
     * 
     * Array of links displayed in the bottom TOC.
     * 
     * @default [{"icon":"i-heroicons-star","label":"Star on GitHub","to":"https://github.com/repo-booster","target":"_blank"},{"icon":"i-heroicons-book-open","label":"Repo-Booster Docs","to":"https://repo-booster.com/docs","target":"_blank"},{"icon":"i-simple-icons-repo","label":"Upgrade to Pro","to":"https://repo-booster.com/pricing","target":"_blank"}]
     * 
     * @studioInput array
     * 
     * @studioIcon i-mdi-link-variant
    */
    links?: Array<{

    }>,
   },
  },
 },
}
export type CustomAppConfig = Exclude<NuxtCustomSchema['appConfig'], undefined>
type _CustomAppConfig = CustomAppConfig

declare module '@nuxt/schema' {
  interface NuxtConfig extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface NuxtOptions extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface CustomAppConfig extends _CustomAppConfig {}
}

declare module 'nuxt/schema' {
  interface NuxtConfig extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface NuxtOptions extends Omit<NuxtCustomSchema, 'appConfig'> {}
  interface CustomAppConfig extends _CustomAppConfig {}
}
