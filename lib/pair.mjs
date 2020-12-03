/**
 *
 * @param x
 */
function isPair(x) {
	return typeof x !== 'string' && x.length !== undefined
}

export { isPair }