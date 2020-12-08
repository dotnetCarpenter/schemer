import and from "./and.js"
import not from "./not.js"
import isAtom from "./isAtom.js"
import isNull from "./isNull.js"

/**
 * The Law of Cdr
 * The primitive cdr is defined only for non-empty lists.
 * The cdr of any nonempty list is always another list.
 * @param {any[]} l
 * @returns {any[]|null} A new list without the first element of the list `l` or null
 */
export default
	function cdr (l) {
		return (and (not (isAtom (l)), not( isNull (l))))
			? l.slice (1)
			: null
}
