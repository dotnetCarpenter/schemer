// @ts-check
/**
 * @param {boolean|number|string} x
 */
function isAtom (x) {
	return x != null && (typeof x === 'string' || x.length === undefined)
}

export {
	isAtom
}