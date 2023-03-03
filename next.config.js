/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        NEXTAUTH_URL: 'https://localhost:3000/api/auth',
        NEXTAUTH_SECRET: 'R5ykTgbmvTSKIYJATEQvIAqrMQWSpBi2/sRRR+ewU+A=',
      }
    }
  }
  
  return {
    env: {
      NEXTAUTH_URL: 'https://localhost:3000/api/auth',
      NEXTAUTH_SECRET: 'R5ykTgbmvTSKIYJATEQvIAqrMQWSpBi2/sRRR+ewU+A=',
    }
  }
}

module.exports = nextConfig
