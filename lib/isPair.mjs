/**
 * A pair is not a string and
 * has a `length` property.
 * @param x Anything you want to check if it is a pair
 */
export default function isPair(x) {
	return typeof x !== 'string' && x.length !== undefined
}
