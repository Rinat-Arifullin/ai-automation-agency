const process = require('process');
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        BOT_RECIVER_TOKEN: process.env.BOT_RECIVER_TOKEN || '',
        BOT_CHAT_ID: process.env.BOT_CHAT_ID || '',
    },
}

module.exports = nextConfig;

