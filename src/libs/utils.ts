export const zip = <T, K>(a: T[], b: K[]): [T, K][] =>
	a.map((k, i) => [k, b[i]]);
