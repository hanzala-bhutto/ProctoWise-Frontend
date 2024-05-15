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
        BASE_URL: process.env.BASE_URL,
        GLOBAL_PATH: process.env.GLOBAL_PATH,
    },
}

module.exports = nextConfig
