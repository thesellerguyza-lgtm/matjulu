import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // This forces Nitro to build the server entry point for Cloudflare
  nitro: true,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts
    server: { 
      entry: "server" 
    },
  },
});
