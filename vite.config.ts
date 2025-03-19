import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "development" ? "/" : "/",  // Use "/" for production on a user site
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",          // Ensures output is in `/dist`
    assetsDir: "assets",     // Ensures CSS and JS files are correctly linked
    rollupOptions: {
      input: "./index.html"  // Ensures entry point is correct
    }
  }
}));
