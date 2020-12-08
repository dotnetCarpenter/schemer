import and from "./and.js"
import not from "./not.js"
import isAtom from "./isAtom.js"
import isNull from "./isNull.js"

/**
 * The Law of Car
 * The primitive car is defined
 * only for non-empty lists.
 * @param {any} x
 * @returns {any} The first element of an list or null if x is not a list
 */
export default function car (x) {
	return and(not(isAtom(x)), not(isNull(x))) ? x[0] : null
}