import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Binds the server to all network interfaces
    port: 5173, // Optional: Specify the port if different from the default
  },
})
