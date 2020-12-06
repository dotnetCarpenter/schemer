import isNull from './isNull.mjs'
import isEq from './isEq.mjs'
import car from './car.mjs'
import cons from './cons.mjs'
import cdr from './cdr.mjs'

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
export default
	function insertR (insert, at, lat) {
		return (isNull (lat)
			? quote ()
			: isEq (car (lat), at)
				? cons (at,
						cons (insert, cdr (lat)))
				: cons (car (lat),
					insertR (insert, at, cdr (lat))))
	}
