/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/__tests__/setup.js",
    globals: true,
    coverage :{
      provider : 'istanbul',
      exclude : ['**/node_modules/**', '**/__tests__/**'],
      include : ['**/src/**'],
      branches : 40,
      functions : 40,
      lines : 40,
      statements : 40,
    },
  
  },
});
