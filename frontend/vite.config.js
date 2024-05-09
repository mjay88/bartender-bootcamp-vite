import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import dns from "dns";

dns.setDefaultResultOrder("verbatim");
export default defineConfig(() => {
	return {
		plugins: [react()],
		server: {
			open: true,
			// host: "127.0.0.1",
			host: "localhost",
			port: 8000,
			// proxy: {
			// 	"/api": {
			// 		// target: "http://127.0.0.1:3000",
			// 		target: "http://localhost:5000",
			// 		changeOrigin: true,
			// 		ws: true,
			// 		secure: false,
			// 		rewrite: (path) => path.replace(/^\/api/, ""),
			// 	},
			// },
		},

		build: {
			manifest: true,
			rollupOptions: {
				input: "./src/App.jsx",
			},
		},

		resolve: {
			alias: [
				{
					// this is required for the SCSS modules
					find: /^~(.*)$/,
					replacement: "$1",
				},
			],
		},
		test: {
			// globals: true, when set to true automaticcally imports all your imports
			environment: "jsdom",
			setupFiles: "./test-setup/setupTests.js",
		},
	};
});
