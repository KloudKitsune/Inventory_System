import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Inventory_System/",
  plugins: [react()],
  build: {
    outDir: "docs",
  },
  server: {
    port: 3000,
  },
});
