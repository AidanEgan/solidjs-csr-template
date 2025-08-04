export const zip = <T, K>(
	a: ReadonlyArray<T>,
	b: ReadonlyArray<K>,
): [T, K][] => {
	if (a.length <= b.length) {
		return a.map((k, i) => [k, b[i]]);
	}
	return b.map((k, i) => [a[i], k]);
};
