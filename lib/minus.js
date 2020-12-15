import { sub1N } from './sub1.js'
import isZero from './isZero.js'

/**
 * @param {number} n
 * @param {number} m
 */
export default
	function minus (n, m) {
		return (isZero (m)
			? n
			: sub1N (minus (n, sub1N (m))))
	}
