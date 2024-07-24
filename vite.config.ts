import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import electron from 'vite-plugin-electron/simple'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    electron({
      main: {
        entry: 'electron/main.ts'
      },
      preload: {
        // Shortcut of `build.rollupOptions.input`
        input: 'electron/preload.ts',
      },
    })
  ]
});
