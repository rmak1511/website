import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  // Served from the custom domain tuumest.net (GitHub Pages), so assets
  // resolve from the domain root and the router's base helpers no-op.
  base: "/",
  plugins: [react(), tailwindcss()],
});
