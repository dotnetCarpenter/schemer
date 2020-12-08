const sub1N = nullForMinus(sub1)
export { sub1, sub1N }

/**
 * Subtract 1 from a number.
 * @param {number} n Subtracks 1 from this number
 */
function sub1 (n) {
	return n - 1
}

function nullForMinus (f) {
	return n =>
		n > 0
			? f (n)
			: null
}
