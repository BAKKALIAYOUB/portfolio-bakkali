/** @type {import('next').NextConfig} */
const nextConfig = {
  // Base path configuration for GitHub Pages
  basePath: '/portfolio-bakkali',  // Replace with your actual repository name

  // Disable image optimization (GitHub Pages doesn't support it)
  images: {
    unoptimized: true,  // Disable server-side image optimization
    loader: 'akamai',   // Use Akamai for images (works well with static hosting)
    path: '',           // Leave empty because images will be served from the root
  },
}

module.exports = nextConfig;
