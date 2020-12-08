import isNull from './isNull.js'
import quote from './quote.js'
import isEq from './isEq.js'
import car from './car.js'
import cons from './cons.js'
import cdr from './cdr.js'
import or from './or.js'

/**
 * It takes three arguments: the atoms `insert`,
 * `at`, and a `lat`. The function `subst`
 * builds a `lat` with `insert` inserted instead
 * of the first occurrence of `at`.
 * @param {string} insert an atom
 * @param {string} at an atom
 * @param {string[]} lat a list
 * @returns {string[]} lat with the `insert` atom
 */
export { subst, subst2 }

function subst (insert, at, lat) {
	return (isNull (lat)
		? quote ()
		: isEq (car (lat), at)
			? cons (insert, cdr (lat))
			: cons (car (lat),
				subst (insert, at, cdr (lat))))
}

function subst2 (insert, at1, at2, lat) {
	return (isNull (lat)
		? quote ()
		: or (isEq (car (lat), at1),
			isEq (car (lat), at2))
			? cons (insert, cdr (lat))
			: cons (car (lat),
				subst2 (insert, at1, at2, cdr (lat))))
}
