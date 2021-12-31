const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const domain = process.env.REACT_APP_BASE_URL;

module.exports = {
  env: {
    REACT_APP_BASE_URL: "portfolio-mili.vercel.app",
    REACT_APP_API_BASE_URL: "/api/proxy",
    REACT_APP_EXTERNAL_API_BASE_URL: "/api",
  },
  i18n: {
    locales: ["en", "de", "fr"],
    defaultLocale: "en",
  },
  experimental: {
    craCompat: true,
  },
  // images: {
  //   domains: [],
  // },
};
