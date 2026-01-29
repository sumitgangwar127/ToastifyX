import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "ToastifyX",
      fileName: "toastifyx",
      formats: ["es", "umd"]
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "toastifyx.css";
          }
          return assetInfo.name;
        }
      }
    }
  }
});
