const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
const dotenv = require('dotenv');

dotenv.config();
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Activer l'expérimentation WebAssembly (recommandé)
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,

    };
    

    // Retourner la configuration modifiée
    return config;
  },
}


module.exports = withNextIntl(nextConfig);