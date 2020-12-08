import isNull from './isNull.js'
import quote from './quote.js'
import cons from './cons.js'
import car from './car.js'
import cdr from './cdr.js'

/**
 * The function firsts takes one argument,
 * a list, which is either a null list
 * or contains only non-empty lists.
 * It builds another list composed of the
 * first S-expression of each internal list.
 * @param {any[]} l a list
 * @returns {any[]}
 */
export default
	function firsts (l) {
		return isNull (l)
			? quote ()
			: cons (car (car (l)),
				firsts (cdr (l)))
	}
