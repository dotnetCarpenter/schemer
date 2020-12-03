// @ts-check
import { isAtom } from "./atom.mjs"

/**
 * The Law of Car
 * The primitive car is defined
 * only for non-empty lists.
 * @template T
 * @param {T[]} x
 * @returns {T}
 */
export default function car (x) {
	return !isAtom(x) && x.length ? x[0] : null
}