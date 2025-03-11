import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), svgr(), tailwind()],
});
