import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
        proxy: {
          // Define a proxy rule for requests starting with '/api'
          '/api': {
            target: 'http://localhost:3001', // Replace with your backend API's URL and port
            changeOrigin: true, // Needed for virtual hosted sites
            rewrite: (path) => path.replace(/^\/api/, ''), // Rewrites the path to remove '/api'
          },
          // You can add more proxy rules for other API endpoints if needed
          // '/another-endpoint': {
          //   target: 'http://localhost:3000',
          //   changeOrigin: true,
          //   rewrite: (path) => path.replace(/^\/another-endpoint/, ''),
          // },
        },
      },
})
