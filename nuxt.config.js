import colors from "vuetify/es5/util/colors";
import en from "./assets/langs/en";
import ja from "./assets/langs/ja";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    // const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true });
    return {
      titleTemplate: "%s - nuxt-blog",
      title: "Blog",
      htmlAttrs: {
        myAttribute: "My Value",
        // ...i18nHead.htmlAttrs,
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My Custom Description",
        },
        // ...i18nHead.meta,
      ],
      link: [
        {
          hid: "icon",
          rel: "icon",
          sizes: "180x180",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        // ...i18nHead.link,
      ],
    };
  },
  router: {
    base: "",
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //     name: 'custom',
    //     path: '*',
    //     component: resolve(__dirname, 'pages/not-found/index.vue'),
    //   });
    // },
  },
  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/index.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    // '@nuxtjs/components',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/i18n"],

  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "ja",
    vueI18n: {
      fallbackLocale: "ja",
      messages: {
        en,
        ja,
      },
    },
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
        light: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
