/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'serve') {
    // dev specific config
    return {
      plugins: [react()],
      server: {
        proxy: {
        // string shorthand
          '/api': {
            target: 'http://localhost:3005',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
          },
        },
      },
    };
  }

  // build specific config
  return {
    plugins: [react()],
    resolve: {
      // NOTE not sure if useful or not yet
    // alias: {
    //   assert: require.resolve('assert'),
    //   util: require.resolve('util'),
    // },
    },
  };
});
