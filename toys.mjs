// @ts-check

import assert from "assert"
import { isAtom } from "./atom.mjs"
import car from './car.mjs'
import cdr from './cdr.mjs'
import cons from './cons.mjs'


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

assert(equals(car(cdr( [['b'], ['x', 'y'], [['c']]] )), ['x', 'y']), "(x y), because ((x y) ((c))) is (cdr l), and (x y) is the car of (cdr l).")
assert(equals(cdr(cdr( [['b'], ['x', 'y'], [['c']]] )), [[['c']]] ), "(((c))), because ((x y) ((c))) is (cdr l), and (((c))) is  the cdr of (cdr l).")
assert(cdr(car( ['a', ['b', ['c']], 'd'] )) === null, "No answer, since (car l) is an atom,  and cdr does not take an  atom as an  argument; see The Law of Cdr.")

assert(equals(cons('peanut', ['butter', 'jelly']), [ 'peanut', 'butter', 'jelly' ]), "(peanut butter and jelly), because cons adds  an  atom to  the front of a list.")
assert(equals(cons(['banana', 'and'], [ 'peanut', 'butter', 'jelly' ]), [ [ 'banana', 'and' ], 'peanut', 'butter', 'jelly' ]), "((banana and) peanut butter and jelly), because cons adds any S-expression to the front of a list.")
assert(equals( cons([['help'], 'this'], ['is', 'very', [['very'], 'to', 'learn']]), [ [ [ 'help' ], 'this' ], 'is', 'very', [ [ 'very' ], 'to', 'learn' ] ]), "(((help) this) is  very  ((hard) to learn)).")
assert(equals( cons(['a', 'b', ['c']], []), [ [ 'a', 'b', [ 'c' ] ] ]), "((a b (c))), because  () is a list.")
assert(equals( cons('a', []), ['a'] ), "(a).")
assert.throws(() => { cons([['a', 'b', 'c']], 'b') }, "No answer,1 since the second argument l must be a list. Page 8")
assert.throws(() => { cons('a', 'b') }, "No answer,1 since the second argument l must be a list. Page 8")

// The Law of Cons
// The primitive cons takes two arguments.
// The second argument to cons must be  a list.
// The result is a list.

assert(equals( cons('a',car([['b'],'c','d'])), ['a','b']), "['a','b']")
assert(equals( cons('a', cdr([['b'],'c','d'])), ['a','c','d']), "['a','c','d']")




console.log(  )




function equals (a, b) {
	if (isAtom(a)) return a == b
	return a.every(listEq(b)) && b.every(listEq(a))

	function listEq(y) {
		return (x, n) => equals(x, y[n])
	}
}
