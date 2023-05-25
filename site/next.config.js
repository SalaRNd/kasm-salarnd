/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'koda\'s Registry',
    description: 'A curated list of my kasm workspaces',
    icon: 'https://styles.redditmedia.com/t5_pzxlx/styles/profileIcon_snooe518dd85-f77f-4725-ac4a-464846a19b97-headshot.png',
    listUrl: 'https://kodestar.github.io/kasm-registry/',
    contactUrl: 'https://github.com/kodestar/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
