import { render } from "@solidjs/testing-library";
import { expect, test } from "vitest";
import { Home } from "./Home";

test("renders Home element", async () => {
	const { getByText } = render(() => <Home />);
	const element = getByText("Write apps with Solid!");
	expect(element).toBeInTheDocument();
});
