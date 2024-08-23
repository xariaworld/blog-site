import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import zipPack from "vite-plugin-zip-pack";
import { version } from "./package.json";

export default defineConfig({
  plugins: [
    react(),
    zipPack({
      outFileName: `404-v${version}.zip`,
    }),
  ],
});
