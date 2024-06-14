import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',  // Adjust input paths as needed
            output: 'public/build',        // Ensure output path matches Laravel's expectation
            manifest: true,                // Enable manifest generation
        }),
    ],
});
