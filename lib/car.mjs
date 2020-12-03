import and from "./and.mjs"
import not from "./not.mjs"
import { isAtom } from "./atom.mjs"
import { isNull } from "./null.mjs"

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