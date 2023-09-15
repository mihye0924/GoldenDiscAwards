/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  basePath: "/GoldenDiscAwards",
  reactStrictMode: true,
  assetPrefix: 
    process.env.NODE_ENV === "production"
    ? "https://mihye0924.github.io/GoldenDiscAwards"
    : "", 
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "styles/scss/_variables.scss";`
  }, 

}
module.exports = nextConfig
