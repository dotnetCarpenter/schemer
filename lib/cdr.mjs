import and from "./and.mjs"
import not from "./not.mjs"
import isAtom from "./isAtom.mjs"
import isNull from "./isNull.mjs"
import curry from './curry.mjs'

/**
 * The Law of Cdr
 * The primitive cdr is defined only for non-empty lists.
 * The cdr of any nonempty list is always another list.
 * @param {any[]} l
 * @returns {any[]|null} A new list without the first element of the list `l` or null
 */
export default curry(
	function cdr (l) {
		return (and (not (isAtom (l)), not( isNull (l))))
			? l.slice (1)
			: null
})
