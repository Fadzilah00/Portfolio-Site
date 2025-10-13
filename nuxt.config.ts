
// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // Suppress warnings for custom app.vue structure
  pages: false,
  
  // CSS Framework
  css: ['~/assets/css/main.css'],
  
  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],

  // Google Fonts configuration
  googleFonts: {
    families: {
      Inter: [400, 600, 700],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true
  },

  // Auto imports configuration
  imports: {
    dirs: [
      'composables/**',
      'utils/**',
      'stores/**'
    ]
  },

  // Components auto-import
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    }
  ],

  // App configuration
  app: {
    head: {
      title: 'Aina Fadzilah - UI/UX Designer | Software Tester | Developer',
      titleTemplate: '%s | Aina Fadzilah',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Professional portfolio of Aina Fadzilah - UI/UX Designer, Software Tester, and Junior Developer. Creating exceptional digital experiences with modern design and clean code.' 
        },
        { 
          name: 'keywords', 
          content: 'aina fadzilah, portfolio, UI designer, UX designer, software tester, junior developer, web developer, frontend developer, Vue.js, Nuxt.js, JavaScript, Figma, Selenium' 
        },
        { name: 'author', content: 'Aina Fadzilah' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://ainafadzilah.com' },
        { property: 'og:title', content: 'Aina Fadzilah - UI/UX Designer | Software Tester | Developer' },
        { property: 'og:description', content: 'Professional portfolio showcasing UI/UX Design, Software Testing, and Web Development expertise.' },
        { property: 'og:image', content: '/og-image.jpg' },
        
        // Twitter
        { property: 'twitter:card', content: 'summary_large_image' },
        { property: 'twitter:url', content: 'https://ainafadzilah.com' },
        { property: 'twitter:title', content: 'Aina Fadzilah - UI/UX Designer | Software Tester | Developer' },
        { property: 'twitter:description', content: 'Professional portfolio showcasing UI/UX Design, Software Testing, and Web Development expertise.' },
        { property: 'twitter:image', content: '/twitter-image.jpg' },
        
        // Theme color
        { name: 'theme-color', content: '#0D9488' },
        { name: 'msapplication-TileColor', content: '#0D9488' }
      ],
      link: [
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },

  // Runtime config
  runtimeConfig: {
    // Private keys (only available on server-side)
    // apiSecret: '123',
    
    // Public keys (exposed to client-side)
    public: {
      siteUrl: 'https://ainafadzilah.com',
      siteName: 'Aina Fadzilah - Portfolio'
    }
  },

  // TypeScript configuration
  typescript: {
    strict: false,
    typeCheck: false
  },

  // Nitro configuration
  nitro: {
    compressPublicAssets: true,
    minify: true
  }
})
