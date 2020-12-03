// @ts-check
import { isAtom } from "./atom.mjs";

/**
 * The Law of Cdr
 * The primitive cdr is defined only for
 * non-empty lists. The cdr of any nonempty list is always another list.
 * @template T
 * @param {T[]} x
 * @returns {T[]}
 */
export default function cdr (x) {
	const [_, ...rest] =  x
	return !isAtom(x) && x.length ? rest : null
}