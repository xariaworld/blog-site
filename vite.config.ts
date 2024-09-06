import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import zipPack from "vite-plugin-zip-pack";
import { version } from "./package.json";

import * as byte404 from "./src/data/byte-404";
import * as betterLife from "./src/data/better-life";

const sites = {
  "byte-404": byte404,
  "better-life": betterLife,
};
console.log("sites", sites);

export default defineConfig(() => {
  const env = loadEnv("", process.cwd());
  const VITE_SITE_CODE = env.VITE_SITE_CODE as keyof typeof sites;

  return {
    plugins: [
      react(),
      zipPack({
        outFileName: `${VITE_SITE_CODE}-v${version}.zip`,
      }),
      {
        name: "virtual-module-plugin",
        resolveId(id) {
          if (id === "virtual:data") {
            return "virtual:data"; // Mark this module ID as handled by this plugin
          }
        },
        load(id) {
          if (id === "virtual:data") {
            // Return the virtual module contents as a string
            return `export default ${JSON.stringify(sites[VITE_SITE_CODE])}`;
          }
        },
      },
    ],
  };
});
