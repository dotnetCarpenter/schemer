/**
 * The Law of Cons
 * The primitive cons takes two arguments.
 * The second argument to cons must be a list.
 * The result is a list.
 * @note WARNING: `cons` mutates the list!
 * @param {string} a
 * @param {string[]} l
 */
export default function cons (a, l) {
	l.unshift(a)
	return l
}