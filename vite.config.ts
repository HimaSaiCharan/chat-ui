import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://10.136.20.81:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), // removes /api prefix
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
});
