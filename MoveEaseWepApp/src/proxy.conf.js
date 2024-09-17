const { env } = require('process');

const target = "http://localhost:5075"

const PROXY_CONFIG = [
  {
    context: [
      "/api/**",
    ],
    target,
    secure: false,
    pathRewrite: {
      "^/api": "", // Rewrite the URL path to remove "/api"
    }
  }
]

module.exports = PROXY_CONFIG;
