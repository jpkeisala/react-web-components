import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path"

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
    build: {
        lib: {
            entry: 'src/main.tsx',
            name: 'web-components',
            fileName: (format) => `web-components.${format}.js`,
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});
