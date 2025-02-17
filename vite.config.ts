import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/JuicyEV-Website/' // Change this to match your GitHub repo name
});
