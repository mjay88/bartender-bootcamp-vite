import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import dns from "dns";

// localhost part
// dns.setDefaultResultOrder("verbatim");
dns.setDefaultResultOrder("verbatim");
export default defineConfig(() => {
	return {
		plugins: [react()],
		server: {
			open: true,
			// host: "127.0.0.1",
			port: 3000,
			proxy: {
				"/api": {
					// target: "http://127.0.0.1:3000",
					target: "http://localhost:5000",
					changeOrigin: true,
					ws: true,
					secure: false,
					rewrite: (path) => path.replace(/^\/api/, ""),
				},
			},
		},
		// server: {
		// 	open: true,
		// 	// host: "127.0.0.1",
		// 	port: 3000,
		// 	proxy: {
		// 		"api/sections": {
		// 			// target: "https://127.0.0.1",
		// 			// target: "http://127.0.0.1:localhost:5000",
		// 			target: "http://localhost:5000",
		// 			changeOrigin: true,
		// 			ws: true,
		// 			secure: false,
		// 		},
		// 		"/users": {
		// 			// target: "https://127.0.0.1",
		// 			// target: "http://127.0.0.1:localhost:5000",
		// 			target: "http://localhost:5000",
		// 			changeOrigin: true,
		// 			ws: true,
		// 			secure: false,
		// 		},
		// 	},
		// },

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
	};
});
