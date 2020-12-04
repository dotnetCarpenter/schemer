import and from "./and.mjs"
import not from "./not.mjs"
import isNull from "./isNull.mjs"
import isPair from "./isPair.mjs"

/**
 * @param {boolean|number|string|array} x
 */
export default function isAtom (x) {
	return and ( not( isPair(x)), not (isNull (x)))
}
