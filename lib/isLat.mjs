import isNull from './isNull.mjs'
import isAtom from './isAtom.mjs'
import car from './car.mjs'
import cdr from './cdr.mjs'

export default function isLat (l) {
	if (isNull (l)) return true

	return (isAtom (car (l))
		? (isLat (cdr (l)))
		: false)
}
