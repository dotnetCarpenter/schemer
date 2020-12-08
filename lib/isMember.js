import isNull from './isNull.js'
import or from './or.js'
import isEq from './isEq.js'
import car from './car.js'
import cdr from './cdr.js'

/**
 * member? looks at each member of list `lat`
 * and if the atom `a` is in the list then
 * returns #t - true or #f - false, if not.
 * @param {string} a
 * @param {any[]} lat
 * @returns {boolean}
 */
export default function isMember (a, lat) {
	return (isNull (lat))
		? false
		: (or (isEq (car (lat), a),
			isMember (a, (cdr (lat)))))
}
