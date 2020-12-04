import isNull from './isNull.mjs'
import isAtom from './isAtom.mjs'
import and from './and.mjs'
import car from './car.mjs'
import cdr from './cdr.mjs'

export default function isLat (l) {
	if (isNull (l)) return true

	if (isAtom (car (l))) return (isLat (cdr (l)))

	return false
}
