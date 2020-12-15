import add1 from './add1.js'
import { sub1, sub1N } from './sub1.js'
import isZero from './isZero.js'

/**
 * @param {number} n
 * @param {number} m
 */
export default
	function plus (n, m) {
		return (isZero (n)
			? m
			: add1 (plus (n, sub1N (m))))
	}
