import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Define your proxy rules here
      '/': {
        target: 'https://moodtest-4.onrender.com', // Specify the target host
        changeOrigin: true
        
      },
    
    },
  },
});
