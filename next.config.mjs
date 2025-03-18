/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    turbo: {
      rules: {
        // Allows importing SVG files
        '*.svg': {
          loaders: ['@svgr/webpack', 'file-loader'],
          as: 'asset',
        },
      },
    },
  }
};

export default nextConfig; 