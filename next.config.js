/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        ignoreBuildErrors: true,
    },
    env: {
        API_BASE_URL: process.env.API_BASE_URL,
        GLOBAL_PATH: process.env.GLOBAL_PATH,
    },
}

module.exports = nextConfig
