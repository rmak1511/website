import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  // Served as a GitHub Pages project site at rmak1511.github.io/website/.
  // The router's stripBase/withBase helpers remove and re-apply this
  // prefix. Switch to "/" when a custom domain (e.g. tuumest.net) is
  // attached.
  base: "/website/",
  plugins: [react(), tailwindcss()],
});
