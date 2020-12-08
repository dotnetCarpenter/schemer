import isNull from './isNull.js'
import quote from './quote.js'
import isEq from './isEq.js'
import car from './car.js'
import cons from './cons.js'
import cdr from './cdr.js'

export { insertR, multiinsertR, multiinsertL }

/**
 * It takes three arguments: the atoms `insert`,
 * `at`, and a `lat`. The function `insertR`
 * builds a `lat` with `insert` inserted to the right
 * of the first occurrence of `at`.
 * @param {string} insert an atom
 * @param {string} at an atom
 * @param {string[]} lat a list
 * @returns {string[]} a list with the `insert` atom
 */
function insertR (insert, at, lat) {
	return (isNull (lat)
		? quote ()
		: isEq (car (lat), at)
			? cons (at,
					cons (insert, cdr (lat)))
			: cons (car (lat),
					insertR (insert, at, cdr (lat))))
}

/**
 * The function `multiinsertR`
 * builds a `lat` with `insert`
 * inserted to the right
 * as many times as `at` occurs.
 * @param {string} insert an atom
 * @param {string} at an atom
 * @param {string[]} lat a list
 * @returns {string[]} a list with the `insert` atom
 */
function multiinsertR (insert, at, lat) {
	return (isNull (lat)
		? quote ()
		: isEq (car (lat), at)
			? cons (at,
					cons (insert,
						multiinsertR (insert, at, cdr (lat))))
			: cons (car (lat),
					multiinsertR (insert, at, cdr (lat))))
}

function multiinsertL (insert, at, lat) {
	return (isNull (lat)
		? quote ()
		: isEq (car (lat), at)
			? cons (insert,
					cons (at,
						multiinsertL (insert, at, cdr (lat))))
			: cons (car (lat),
					multiinsertL (insert, at, cdr (lat))))
}