import and from "./and.mjs"
import not from "./not.mjs"
import { isAtom } from "./atom.mjs"
import { isNull } from "./null.mjs"

/**
 * The Law of Cdr
 * The primitive cdr is defined only for non-empty lists.
 * The cdr of any nonempty list is always another list.
 * @param {any} l
 * @returns {any[]|null} A new list without the first element of the list `l` or null
 */
export default function cdr (l) {
	const [_, ...rest] =  l
	return and(not(isAtom(l)), not(isNull(l))) ? rest : null
}