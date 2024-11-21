import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Output directory for the production build
    emptyOutDir: true, // Clears the dist folder before building
    assetsDir: 'assets', // Directory for static assets
    sourcemap: true, // Optional: Enable source maps for easier debugging
  },
  base: './', // Ensures all asset paths are relative (important for Netlify)
  server: {
    port: 3000, // Development server port
    open: true, // Automatically open the app in the browser
  },
});
