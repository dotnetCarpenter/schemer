import isNull from './isNull.mjs'
import quote from './quote.mjs'
import isEq from './isEq.mjs'
import car from './car.mjs'
import cdr from './cdr.mjs'
import cons from './cons.mjs'

/**
 * `Rember` stands for remove a member.
 * It takes an atom and a lat as its arguments,
 * and makes a new lat with the first occurrence
 * of the atom in the old lat removed
 * @param {string} a atom
 * @param {string[]} lat lat
 * @returns {string[]}
 */
export default
	function rember (a, lat) {
		return isNull (lat)
			? quote ()
			: isEq (car (lat), a)
				? cdr (lat)
				: cons (car (lat),
					rember (a, cdr (lat)))
	}
