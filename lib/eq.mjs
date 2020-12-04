import { isAtom } from './atom.mjs'
import and from './and.mjs'

/**
 * The Law of Eq?
 * The primitive eq? takes two ar­guments.
 * @param a
 * @param b
 * @returns {boolean}
 */
export default function isEq (a, b) {
	if (isAtom(a)) return a == b
	return and(a.every(listEq(b)), b.every(listEq(a)))
}

function listEq(y) {
	return (x, n) => isEq(x, y[n])
}