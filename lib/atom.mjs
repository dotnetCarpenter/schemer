import and from "./and.mjs"
import not from "./not.mjs"
import { isNull } from "./null.mjs"
import { isPair } from "./pair.mjs"

/**
 * @param {boolean|number|string|array} x
 */
function isAtom (x) {
	return and(not(isPair(x)), not(isNull(x)))
}

export { isAtom }