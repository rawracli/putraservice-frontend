import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: true,
    }),
  ],
  esbuild: { legalComments: 'none', minifyWhitespace: true, minifyIdentifiers: true, minifySyntax: true },
  assetsInclude: ["**/*.glb"],
});
