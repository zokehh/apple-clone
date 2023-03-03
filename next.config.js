/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: 'zokehh',
        mongodb_password: 'test123',
        mongodb_cluster: 'cluster0',
      }
    }
  }

  return {
    reactStrictMode: true,
    env: {
      mongodb_username: 'zokehh',
      mongodb_password: 'test123',
      mongodb_cluster: 'cluster0',
      NEXTAUTH_SECRET: '3daaW+cYBFxA7zo2ivHhhigBi2F2hhUA75nuLqc0lec=',
    }
  }
}

module.exports = nextConfig
