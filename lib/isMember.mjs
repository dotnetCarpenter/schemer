import isNull from './isNull.mjs'
import or from './or.mjs'
import isEq from './isEq.mjs'
import car from './car.mjs'
import cdr from './cdr.mjs'

/**
 * member? looks at each item in list `lat`
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

// function els () { return true }
/* for `cond`, a user supplied function must
be able to terminate the flow and return a
user given value.
The snippet below does not. */
// const cond =
// 	(...fs) =>
// 		(isNull (fs)
// 			? false
// 			: (or (car (fs)(),
// 				cond.apply (null, cdr (fs)))))
