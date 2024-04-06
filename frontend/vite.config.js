import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Add this line
import dns from "dns";

// localhost part
dns.setDefaultResultOrder("verbatim");

export default defineConfig(() => {
	return {
		// base: {
		// 	base: "/",
		// },
		// define: {
		// 	"process.env": {},
		// },
		server: {
			open: true,
			host: "localhost",
			port: 3000,
		},

		build: {
			manifest: true,
			rollupOptions: {
				input: "./src/App.jsx",
			},
		},
		plugins: [react()],
		// resolve: {
		// 	alias: {
		// 		"@": path.resolve(__dirname, "src"),
		// 	},
		// },
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
