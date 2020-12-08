import and from "./and.js"
import not from "./not.js"
import isNull from "./isNull.js"
import isPair from "./isPair.js"

/**
 * @param {boolean|number|string|array} x
 * @returns {boolean}
 */
export default function isAtom (x) {
	return and ( not( isPair(x)), not (isNull (x)))
}
