import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Add this line
import dns from "dns";

// localhost part
dns.setDefaultResultOrder("verbatim");

export default defineConfig(() => {
	return {
		server: {
			open: true,
			// host: "127.0.0.1",
			port: 3000,
			proxy: {
				"/api": {
					target: "http://localhost:5000", // replace with your server's address
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, ""),
				},
			},
		},

		build: {
			manifest: true,
			rollupOptions: {
				input: "./src/App.jsx",
			},
		},
		plugins: [react()],

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
