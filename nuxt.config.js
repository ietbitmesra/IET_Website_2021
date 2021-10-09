export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'IET | BIT Mesra',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Official website for IET On Campus, BIT Mesra' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'keywords', content: 'IET, BIT Mesra, IET BIT Mesra, Clubs in BIT Mesra, Technical Clubs in BIRT Mesra' },
      { property: 'og:description', content: 'Offical website for IET On Campus, BIT Mesra' },
      { property: 'og:image', content: '/static/favicon.ico' },
      { property: 'og:site_name', content: 'IET BIT Mesra' },
      { property: 'og:url', content: 'https://iet.bitmesra.dev/' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    splitChunks: {
      layouts: true,
      pages: true
    }
  },

  loadingIndicator: {
    name: 'chasing-dots',
    color: '#8c0087',
    background: '#FBFBFB'
  }
}
