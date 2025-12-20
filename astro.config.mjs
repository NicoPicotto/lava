import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
   // Especifica tu dominio
   site: "https://lavaugc.com", // Cambia esto por tu dominio real

   // Asegúrate de que sea output estático
   output: "static",

   // Especifica la carpeta de salida
   outDir: "./dist",

   // Base path (si tu sitio está en la raíz, déjalo como '/')
   base: "/",

   vite: {
      plugins: [tailwindcss()],
   },
});
