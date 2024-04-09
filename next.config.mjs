import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  locales: ['en', 'ua'],
  defaultLocale: 'en',
})

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
