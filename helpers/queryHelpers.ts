import type { Middleware } from "openapi-fetch";
import type { SolidQueryOptions } from "@tanstack/solid-query";

// biome-ignore lint: lint/suspicious/noExplicitAny
type PromiseFn = (...args: any[]) => Promise<any>;

type Opts<T> = Omit<SolidQueryOptions<T>, "queryFn" | "initialData">;
type AwaitedFn<T extends PromiseFn> = Awaited<ReturnType<T>>;

export const defaultMiddleware: Middleware = {
	onResponse({ response }) {
		if (!response.ok) {
			// Will produce error messages like "https://example.org/api/v1/example: 404 Not Found".
			throw new Error(
				`${response.url}: ${response.status} ${response.statusText}`,
			);
		}
	},
};

// Necessary 'any'
// biome-ignore lint: lint/suspicious/noExplicitAny
const defaultOptions: Opts<any> = {
	retry: false,
	retryOnMount: false,
	refetchOnMount: (q) => !!q.state.error,
	refetchOnWindowFocus: (q) => !!q.state.error,
	staleTime: Number.POSITIVE_INFINITY,
	queryKey: [],
};

export const genQuery = <T extends PromiseFn>(
	fn: T,
	params: Parameters<T>,
	options: Opts<AwaitedFn<T>> = defaultOptions,
) => {
	return {
		queryKey: [...options.queryKey, ...params.map((p) => `${p}`)],
		queryFn: () => fn(...params),
		...options,
	};
};
