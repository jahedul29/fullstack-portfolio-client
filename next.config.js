/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["i.ibb.co", "i.imgur.com", "avatars.githubusercontent.com"]
    },
    experimental: {
        nextScriptWorkers: true
    }
}

module.exports = nextConfig
