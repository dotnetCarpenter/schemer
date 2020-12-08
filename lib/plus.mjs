import add1 from './add1.mjs'
import { sub1, sub1N } from './sub1.mjs'
import isZero from './isZero.mjs'

export default
	function plus (n, m) {
		return (isZero (n)
			? m
			: add1 (plus (n, sub1N (m))))
	}