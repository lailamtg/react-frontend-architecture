import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

export default defineConfig({
    plugins: [
        react(),
        eslintPlugin({
            include: ['/src/**/*.ts', '/src/**/*.tsx', '/src/**/*.js', '/src/**/*.jsx'],
        }),
    ],
    resolve: {
        alias: {
            '@Layout': '/src/Layout',
            '@Widgets': '/src/Widgets',
            '@Routes': '/src/Routes',
            '@Pages': '/src/Pages',
            '@Store': '/src/Store',
            '@Hooks': '/src/Hooks',
            '@Providers': '/src/Providers',
            '@Theme': '/src/Theme',
        },
    },
    server: {
        open: true,
    },
});
