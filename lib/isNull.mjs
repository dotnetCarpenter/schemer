/**
 * The Law of Null?
 * The primitive null? is de­fined only for lists.
 * isNull is false for everything, except the empty list.
 * @param {any} x
 */
export default function isNull (x) {
	return x.length === 0 && typeof x !== 'string'
}
