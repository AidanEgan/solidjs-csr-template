import fs from "node:fs";
import openapiTS, { astToString } from "openapi-typescript";

const writeFilePromise = (fname: string, content: string): Promise<void> => {
	return new Promise((res, rej) => {
		fs.writeFile(fname, content, (err) => {
			if (err) {
				rej(err);
			} else {
				res();
			}
		});
	});
};

// Assumes API spec is defined in API folder
const createSpec = async (spec: string) => {
	const ast = await openapiTS(new URL(`./api/${spec}.json`, import.meta.url));
	const contents = astToString(ast);
	writeFilePromise(`./api_output/${spec}.ts`, contents);
};

console.log("Writing api specs... ");
// Get all specs in the directory
const apiSpecs = fs
	.readdirSync("./api")
	.filter((fName) => fName.endsWith(".json"))
	.map((fname) => fname.replace(".json", ""));

// Write outputs for all specs
await Promise.all(apiSpecs.map((spec) => createSpec(spec)));
console.log("Done!");
