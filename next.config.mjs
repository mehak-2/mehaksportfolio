/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Comma added here
    images: {
        loader: "custom", // Custom loader specified
        loaderFile: "./loader.js", // Corrected property name to `path`
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.pixels.com",
        },
      ],
    },
  };
  
  export default nextConfig;
  