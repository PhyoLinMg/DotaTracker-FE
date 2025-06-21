/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  
  // Development optimizations
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Reduce file watching overhead
      config.watchOptions = {
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/dist/**',
          '**/.next/**',
          '**/coverage/**'
        ],
        // Reduce polling frequency
        poll: 1000,
        aggregateTimeout: 300,
      }
      
      // Disable chunk splitting in development for faster compilation
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
        },
      }
      
      // Reduce bundle analysis overhead in dev
      config.optimization.removeAvailableModules = false
      config.optimization.removeEmptyChunks = false
      config.optimization.splitChunks = false
    }
    
    // Improve build performance
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      }
    }
    
    return config
  },
  
  // Experimental features for better performance
  experimental: {
    // Use SWC for faster compilation (default in Next.js 12+)
    swcMinify: true,
    
    // Enable Turbopack for dev (experimental but much faster)
    // Uncomment to try: turbo: {},
    
    // Optimize server components
    serverComponentsExternalPackages: [],
    
    // Reduce memory usage
    optimizePackageImports: ['lodash', 'date-fns', 'ramda'],
  },
  
  // Compiler optimizations
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Output optimizations
  output: 'standalone', // Reduces build size and improves performance
  
  // Reduce bundle size
  modularizeImports: {
    'lodash': {
      transform: 'lodash/{{member}}',
    },
    'date-fns': {
      transform: 'date-fns/{{member}}',
    },
  },
}