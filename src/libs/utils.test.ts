import { expect, test } from "vitest";
import { zip } from "./utils";

test("zips two arrays together", () => {
	const a = [1, 2, 3];
	const b = ["1", "2", "3"];
	expect(zip(a, b)).toEqual([
		[1, "1"],
		[2, "2"],
		[3, "3"],
	]);
});

test("zips the shorter of two arrays if they are not equal", () => {
	const a = [1, 2];
	const b = ["1", "2", "3"];
	expect(zip(a, b)).toEqual([
		[1, "1"],
		[2, "2"],
	]);

	const aa = [2, 3, 4];
	const bb = ["2", "3"];
	expect(zip(aa, bb)).toEqual([
		[2, "2"],
		[3, "3"],
	]);
});
