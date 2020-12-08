import isNull from './isNull.js'
import quote from './quote.js'
import isEq from './isEq.js'
import car from './car.js'
import cdr from './cdr.js'
import cons from './cons.js'


export { rember, multirember }

/**
 * `Rember` stands for remove a member.
 * It takes an atom and a lat as its arguments,
 * and makes a new lat with the first occurrence
 * of the atom in the old lat removed
 * @param {string} a atom
 * @param {string[]} lat lat
 * @returns {string[]}
 */
function rember (a, lat) {
	return isNull (lat)
		? quote ()
		: isEq (car (lat), a)
			? cdr (lat)
			: cons (car (lat),
				rember (a, cdr (lat)))
}

function multirember (a, lat) {
	return isNull (lat)
		? quote ()
		: isEq (car (lat), a)
			? multirember (a, cdr (lat))
			: cons (car (lat),
				multirember (a, cdr (lat)))
}
