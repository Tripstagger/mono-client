const withFonts = require('next-fonts');
const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const withTM = require('next-transpile-modules')([
  '@tripstagger/app',
  '@tripstagger/auth'
]);

const nextConfig = {
  images: {
    disableStaticImages: true
  },
  experimental: {
    runtime: 'experimental-edge',
    serverComponents: true
  }
};

module.exports = (_phase) => {
  const plugins = [withTM, withBundleAnalyzer, withImages, withFonts];
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...nextConfig
  });
};
