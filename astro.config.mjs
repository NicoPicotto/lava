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

   // Configuración de i18n
   i18n: {
      defaultLocale: "es",
      locales: ["es", "en"],
      routing: {
         prefixDefaultLocale: false, // español sin prefijo (/), inglés con prefijo (/en/)
      },
   },

   vite: {
      plugins: [tailwindcss()],
   },
});
