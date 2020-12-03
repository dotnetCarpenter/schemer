/**
 * The Law of Cons
 * The primitive cons takes two arguments.
 * The second argument to cons must be  a list.
 * The result is a list.
 * @param {any} a
 * @param {any[]} l
 */
export default function cons (a, l) {
	l.unshift(a)
	return l
}