import {
	ColorModeProvider,
	ColorModeScript,
	createLocalStorageManager,
} from "@kobalte/core";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";
import type { Component, ParentProps } from "solid-js";
import { Navigation } from "@/components/nav/Navigation";

const qc = new QueryClient();

const App: Component = (props: ParentProps) => {
	console.log("App: ");
	const storageManager = createLocalStorageManager("vite-ui-theme");

	return (
		<QueryClientProvider client={qc}>
			<ColorModeScript storageType={storageManager.type} />
			<ColorModeProvider storageManager={storageManager}>
				<div class="text-foreground">
					<Navigation />
					{props.children}
				</div>
			</ColorModeProvider>
			<SolidQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default App;
