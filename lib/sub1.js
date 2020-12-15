/**
 * Subtract 1 from a number,
 * unless `n` is less than 1, then it
 * returns `null`.
 * @function
 * @param {number} n
 * @returns {number|null} Number og `null`
 */
const sub1N = nullForMinus(sub1)
export { sub1, sub1N }

/**
 * Subtract 1 from a number.
 * @param {number} n Subtracks 1 from this number
 */
function sub1 (n) {
	return n - 1
}

/**
 * Creates a new function that takes
 * one number argument `n` and
 * will return the result of the supplied function
 * if the number is positive null if the `n` is negativeelse.
 * @param {function} f
 * @returns {{ (n:number):number|null }} `n` minus 1 or `null`
 */
function nullForMinus (f) {
	return n =>
		n > 0
			? f (n)
			: null
}
