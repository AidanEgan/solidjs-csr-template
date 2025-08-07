/// <reference types="vitest/config" />
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { analyzer } from "vite-bundle-analyzer";
import solidPlugin from "vite-plugin-solid";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const optionalAnalyzer = process.env?.VITE_ANALYZE
	? [analyzer({ analyzerPort: 3002 })]
	: [];

export default defineConfig({
	plugins: [solidPlugin(), tailwindcss(), ...optionalAnalyzer],
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
	test: {
		coverage: {
			provider: "v8",
			enabled: true,
		},
		watch: false,
		environment: "happy-dom",
		setupFiles: ["./vitest-setup.ts"],
	},
});
