import isNull from './isNull.mjs'
import isAtom from './isAtom.mjs'
import car from './car.mjs'
import cdr from './cdr.mjs'

/**
 * lat? looks at each S-expression in a list,
 * in turn, and asks if each S-expression is an atom,
 * until it runs out of S-expressions.
 * If it runs out without encountering a list,
 * the value is #t - true.
 * If it finds a list,
 * the value is #f - false.
 * @param {any[]} l a list
 * @returns {boolean}
 */
export default function isLat (l) {
	// if (isNull (l)) return true

	// return (isAtom (car (l))
	// 	? (isLat (cdr (l)))
	// 	: false)

	return ((isNull (l))
		? true
		: ((isAtom (car (l))
			? (isLat (cdr (l)))
			: false)))
}
