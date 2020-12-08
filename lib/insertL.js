import isNull from './isNull.js'
import quote from './quote.js'
import isEq from './isEq.js'
import car from './car.js'
import cons from './cons.js'
import cdr from './cdr.js'

/**
 * It takes three arguments: the atoms `insert`,
 * `at`, and a `lat`. The function `insertL`
 * builds a `lat` with `insert` inserted to the left
 * of the first occurrence of `at`.
 * @param {string} insert an atom
 * @param {string} at an atom
 * @param {string[]} lat a list
 * @returns {string[]} lat with the `insert` atom
 */
export default
	function insertL (insert, at, lat) {
		return (isNull (lat)
			? quote ()
			: isEq (car (lat), at)
				? cons (insert, lat)
				: cons (car (lat),
					insertL (insert, at, cdr (lat))))
	}
