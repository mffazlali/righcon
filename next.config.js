/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    // Workaround for Tailwind dark mode resolution with CSS Modules
    const rules = config.module.rules.find((r) => !!r.oneOf)

    rules.oneOf.forEach((loaders) => {
      if (Array.isArray(loaders.use)) {
        loaders.use.forEach((loader) => {
          const isCssLoader =
            typeof loader?.loader === 'string' &&
            /(?<!post)css-loader/.test(loader?.loader)
          const hasGetLocalIdent = !!loader?.options?.modules?.getLocalIdent

          if (isCssLoader && hasGetLocalIdent) {
            const { getLocalIdent } = loader.options.modules
            if (getLocalIdent) {
              loader.options.modules.getLocalIdent = (...args) => {
                if (args.includes('dark')) return 'dark'
                return getLocalIdent(...args)
              }
            }
          }
        })
      }
    })
    return config
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' }, // replace this your actual origin
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          },
        ],
      },
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/javascript; charset=utf-8',
          },
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self'",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
