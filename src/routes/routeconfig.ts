import type { RouteDefinition } from "@solidjs/router";
import { type Component, lazy } from "solid-js";
import { Home } from "./Home";

// INTERFACES

interface RouterBase {
	path: string;
	component: Component;
}

export interface Router extends RouterBase {
	children?: Router[];
}

// HELPER FNS
// Lazy load a non-default export
const namedLazy = <T extends Promise<Record<string, Component>>>(
	componentLoader: () => T,
	name: keyof Awaited<T>,
) => {
	return lazy(async () => {
		return {
			default: (await componentLoader())[name],
		};
	});
};

// ROUTER
export const router: RouteDefinition[] = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/button",
		component: namedLazy(
			() => import("../routes/ButtonClicker"),
			"ButtonClicker",
		),
	},
];
// Array with all routes from router above -> ideally this derived from router itself
const routesArray = ["/", "/button"] as const;

export type AllRoutes = (typeof routesArray)[number];
export const allRoutes: AllRoutes[] = [...routesArray];
