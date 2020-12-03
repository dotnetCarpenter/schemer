import { relative } from "path"

function isAtom (x) {
	return x != null && (typeof x === 'string' || x.length === undefined)
}

export {
	isAtom
}