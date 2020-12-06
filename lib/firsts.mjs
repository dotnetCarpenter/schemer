import isNull from './isNull.mjs'
import quote from './quote.mjs'
import cons from './cons.mjs'
import car from './car.mjs'
import cdr from './cdr.mjs'

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
