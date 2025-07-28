import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
	plugins: [solidPlugin(), tailwindcss()],
	server: {
		port: 3001,
		open: true,
	},
	build: {
		target: "esnext",
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src"),
		},
	},
});
