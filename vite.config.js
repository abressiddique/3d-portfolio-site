import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'], // Include .glb files in the asset pipeline
  base: '/3d-portfolio-site/', // Base path for deployment, matches repo name
});
