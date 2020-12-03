import assert from "assert"
import { isAtom } from "./atom.mjs"
import car from './car.mjs'
import cdr from './cdr.mjs'


console.log( )

assert(isAtom([]) === false, "No because [] is just a list.")

assert(car(['a','b','c']) === 'a', "a because a is the first atom of this list.")
assert(equals( car([['a', 'b', 'c'], 'x', 'y', 'z']), ['a', 'b', 'c'] ), "because [a b c] is the first S-expression of this non-empty list.")
assert(car("hotdog") === null, "You cannot ask for the car of an atom.")
assert(car([]) === null, "You cannot ask for the car of the empty list.")

// The Law of Car
// The primitive car is defined
// only for non-empty lists.

assert(equals( car([[['hotdogs']], ['and'], ['pickle'], 'relish']), [['hotdogs']]), "The list of the list of hotdogs. [['hotdogs']] is the first S-expression.")
assert(equals(car(car( [[['hotdogs']], ['and']] )), ['hotdogs']), "['hotdogs']")

assert(equals(cdr(['a', 'b', 'c']), ['b', 'c']), "because ['b', 'c'] is the list ['a', 'b', 'c'] without ( car(['a', 'b', 'c'])).")
assert(equals(cdr([['a', 'b', 'c'], 'x', 'y', 'z']), ['x', 'y', 'z']), "['x', 'y', 'z']")
assert(equals(cdr(['hamburger']), []), "[]")
assert(cdr('hotdogs') === null, "You cannot ask for the cdr of an atom.")
assert(cdr([]) === null, "You cannot ask for the cdr of the null list.")

// The Law of Cdr
// The primitive cdr is defined only for
// non-empty lists. The cdr of any nonempty list is always another list.

function equals (a, b) {
	if (isAtom(a)) return a == b
	return a.every(listEq(b)) && b.every(listEq(a))

	function listEq(y) {
		return (x, n) => equals(x, y[n])
	}
}
