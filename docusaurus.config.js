// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SafeCore',
  tagline: 'A repository of experiments, hacks, and insights',
  // favicon: 'img/favicon.ico',
  favicon: 'https://strapi.io/assets/favicon-32x32.png',


  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  
  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-live-codeblock', '@docusaurus/theme-mermaid'],

  // https://github.com/subramanya-a/safecore/  
  // Set the production url of your site here
  url: 'https://subramanya-a.github.io',
  // url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'subramanya-a', // Usually your GitHub org/user name.
  projectName: 'safecore', // Usually your repo name.

  // onBrokenLinks: 'throw',
  onBrokenLinks: 'ignore', //'throw',
  // GitHub pages deployment config.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

    scripts: [
    {
      src: '/js/redirector.js',
      async: false, // Load synchronously to ensure it runs before page navigation
    },
    {
      src: '/js/hotjar.js',
      type: 'module',
      async: true,
    },
    {
      src: '/js/particle.js',
      type: 'module',
      async: true,
    },
    {
      src: '/js/firework.js',
      type: 'module',
      async: true,
    },
    {
      src: '/js/ball.js',
      type: 'module',
      async: true,
    },
    {
      src: '/js/bar.js',
      type: 'module',
      async: true,
    },
    {
      src: '/js/game.js',
      type: 'module',
      async: true,
    },
    {
      src: '/js/particleProfiles.js',
      type: 'module',
      async: true,
    },
    {
      // src: 'https://unpkg.com/@phosphor-icons/web@2.0.3',
      src: 'https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1', // fallback
      async: true,
    },
    // {
    //   /**
    //    * Kapa AI widget script and parameters
    //    * See https://docs.kapa.ai/installation-widget#optional-configuration-parameters-
    //    */
    //   src: 'https://widget.kapa.ai/kapa-widget.bundle.js',
    //   'data-website-id': '<ID>',
    //   'data-project-name': 'Strapi',
    //   'data-project-logo': 'https://strapi.io/assets/favicon-32x32.png',
    //   'data-button-hide': 'true',
    //   'data-modal-disclaimer':
    //     'Disclaimer: Answers are AI-generated and might be inaccurate. Please ensure you double-check the information provided by visiting source pages.',
    //   'data-project-color': '#4945FF',
    //   'data-button-bg-color': '#32324D',
    //   'data-modal-example-questions': "How to create a Strapi project?,How does population work?,How to customize the admin panel?,Explain the Growth plan benefits",
    //   // 'data-modal-override-open-class-search': 'DocSearch-Button',
    //   // 'data-modal-title-search': 'Search Strapi Docs',
    //   // 'data-modal-open-on-command-k': 'true',
    //   // 'data-search-mode-enabled': true,
    //   'data-modal-override-open-class': 'kapa-widget-button',
    //   'data-modal-title-ask-ai': 'Ask your question',
    //   'data-modal-border-radius': '4px',
    //   'data-submit-query-button-bg-color': '#4945FF',
    //   'data-modal-body-padding-top': '20px',
    //   'data-user-analytics-cookie-enabled': true,
    //   'data-modal-size': '900px',              // Default is 640px
    //   'data-modal-full-screen': 'false',
    //   'data-modal-full-screen-on-mobile': 'true',
    //   'data-modal-x-offset': '0',              // Defaults is undefined
    //   'data-modal-y-offset': '3vh',            // Default is 10vh
    //   'data-modal-inner-max-width': '100%',
    //   async: true,
    // },
    // {
    //   src: `https://cdn.amplitude.com/script/<id>.experiment.js`,
    //   async: true,
    // },
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/regular/style.css', // fallback
      type: 'text/css',
      rel: 'stylesheet',
    },
    {
      href: 'https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/fill/style.css', // fallback
      type: 'text/css',
      rel: 'stylesheet',
    },
    {
      href: 'https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.1/src/bold/style.css', // fallback
      type: 'text/css',
      rel: 'stylesheet',
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          admonitions: {
            keywords: [
              // Admonitions defaults
              'note',
              'tip',
              'info',
              'caution',
              'danger',

              // Admonitions custom
              'callout',
              'prerequisites',
              'insight',
              'warning',

              //🚀 Knowledge / Info
              // :::insight → for deeper explanations
              // :::didyouknow → fun facts / hidden tips
              // :::context → background information
              // :::concept → theoretical or abstract explanations

              // ⚡️ Action / Guidance
              // :::try → hands-on instructions
              // :::example → code or use case
              // :::protip → advanced usage advice
              // :::quickfix → small troubleshooting hints

              // 🛑 Risk / Security
              // :::caution → less severe warning
              // :::dangerzone → critical actions
              // :::security → for security/privacy notes
              // :::restriction → licensing / access limits

              // 🎨 Fun / Branding
              // If your docs are for a product like Safecore, you can make it feel thematic:
              // :::corealert → brand-specific alerts
              // :::safeguide → guidance related to best practices
              // :::shield → security-focused info
              // :::vault → sensitive or advanced secrets
            ],
            extendDefaults: true,
          },
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          // customCss: './src/css/custom.css',
          customCss: require.resolve('./src/scss/__index.scss'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content:
          "🧑🏽‍🔬 We're testing new AI and search tools on <a target='_blank' rel='noopener noreferrer' href='https://safecore.dev'>safecore.dev</a>! Feel free to have a look and <a target='_blank' rel='noopener noreferrer' href='#'>share your feedback</a>",
        backgroundColor: '#F3E5FA',
        textColor: '#091E42',
        isCloseable: true,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      algolia: {
        appId: '392RJ63O04',
        apiKey: '3f4b8953a20a4c5af4614a607ecf9a03',
        indexName: 'safecore_dev_march2025',
        contextualSearch: false,
        searchParameters: {
          facetFilters: [],
        },
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: false,
        title: 'SafeCore',
        logo: {
          alt: 'SafeCore Documentation Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo.png',
        },
        items: [
          {to: '/', label: 'Home', position: 'left'},
          {to: '/about', label: 'About', position: 'left'},
          {
            // type: 'docSidebar',
            // sidebarId: 'tutorialSidebar',
            type: 'doc',
            docId: 'knowhow/intro',
            position: 'left',
            // label: 'Tutorial',
            html: '<i class="ph-fill ph-cloud"></i> Docsy',
          },
          {to: '/blog', label: 'Projects', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/knowhow/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright @ ${new Date().getFullYear()} SafeCore. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

    plugins: [
    // [
    //   '@docusaurus/plugin-google-tag-manager',
    //   {
    //     containerId: 'GTM-WT49VGT',
    //   },
    // ],
    'docusaurus-plugin-sass',
    // 'docusaurus-plugin-image-zoom',
    // [
    //   // Custom plugin to generate LLMs files
    //   './plugins/llms-generator-plugin.js', // ⬅️ Chemin depuis la racine
    //   {
    //     docsDir: 'docs',
    //     sitebarPath: 'sidebars.js',
    //     siteName: 'Strapi Documentation',
    //   },
    // ],
    // './plugins/amplitude-plugin.js',

    // [ // Disabled
    //   '@docusaurus/plugin-client-redirects',
    //   {
    //     redirects: redirects,
    //   }
    // ]
    /**
     * Seems like we have an issue where a medium-zoom--hidden class is applied on the second, top-most (z-index wise) image,
     * actually hiding the image when zoomed in. Found no related issue in the plugin's repo, might have to dig whether it's
     * related to the Docusaurus canary build or not.
     */
  ],


};

export default config;
