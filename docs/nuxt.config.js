import theme from '@nuxt/content-theme-docs'

export default theme({
  loading: { color: '#FFA000' },
  buildModules: [
    // https://github.com/bdrtsky/nuxt-ackee
    'nuxt-ackee'
  ],
  ackee: {
    server: 'https://ackee.nuxtjs.com',
    domainId: '6abbd929-404a-41f4-b647-fae6f4f8131b',
    detailed: true
  },
  i18n: {
    locales: () => [{
      code: 'de-DE', // Info: Won't work wit algolia since docsearch is not setup for this language.
      iso: 'de-DE',
      file: 'de-DE.js',
      name: 'Deutsch'
    }, {
      code: 'en-US', // Would be better to change docsearch to use "en" as locale instead of changing this
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'en-US'
  }
})
