import assert from 'assert'
import isAtom from './lib/isAtom.js'
import isNull from './lib/isNull.js'
import quote from './lib/quote.js'
import car from './lib/car.js'
import cdr from './lib/cdr.js'
import cons from './lib/cons.js'
import isEq from './lib/isEq.js'


assert(isAtom([]) === false, "No because [] is just a list.")

assert(car(['a','b','c']) === 'a', "a because a is the first atom of this list.")
assert(isEq( car([['a', 'b', 'c'], 'x', 'y', 'z']), ['a', 'b', 'c'] ), "because [a b c] is the first S-expression of this non-empty list.")
assert(car("hotdog") === null, "You cannot ask for the car of an atom.")
assert(car([]) === null, "You cannot ask for the car of the empty list.")

// The Law of Car
// The primitive car is defined
// only for non-empty lists.

assert(isEq( car([[['hotdogs']], ['and'], ['pickle'], 'relish']), [['hotdogs']]), "The list of the list of hotdogs. [['hotdogs']] is the first S-expression.")
assert(isEq(car(car( [[['hotdogs']], ['and']] )), ['hotdogs']), "['hotdogs']")


assert(isEq(cdr(['a', 'b', 'c']), ['b', 'c']), "because ['b', 'c'] is the list ['a', 'b', 'c'] without ( car(['a', 'b', 'c'])).")
assert(isEq(cdr([['a', 'b', 'c'], 'x', 'y', 'z']), ['x', 'y', 'z']), "['x', 'y', 'z']")
assert(isEq(cdr(['hamburger']), []), "[]")
assert(cdr('hotdogs') === null, "You cannot ask for the cdr of an atom.")
assert(cdr([]) === null, "You cannot ask for the cdr of the null list.")

// The Law of Cdr
// The primitive cdr is defined only for
// non-empty lists. The cdr of any nonempty list is always another list.

assert(isEq(car(cdr( [['b'], ['x', 'y'], [['c']]] )), ['x', 'y']), "(x y), because ((x y) ((c))) is (cdr l), and (x y) is the car of (cdr l).")
assert(isEq(cdr(cdr( [['b'], ['x', 'y'], [['c']]] )), [[['c']]] ), "(((c))), because ((x y) ((c))) is (cdr l), and (((c))) is  the cdr of (cdr l).")
assert(cdr(car( ['a', ['b', ['c']], 'd'] )) === null, "No answer, since (car l) is an atom,  and cdr does not take an  atom as an  argument; see The Law of Cdr.")


assert(isEq( cons('peanut', ['butter', 'jelly']) , [ 'peanut', 'butter', 'jelly' ]), "(peanut butter and jelly), because cons adds  an  atom to  the front of a list.")
assert(isEq( cons(['banana', 'and'], [ 'peanut', 'butter', 'jelly' ]) , [ [ 'banana', 'and' ], 'peanut', 'butter', 'jelly' ]), "((banana and) peanut butter and jelly), because cons adds any S-expression to the front of a list.")
assert(isEq( cons([['help'], 'this'], ['is', 'very', [['very'], 'to', 'learn']]) , [ [ [ 'help' ], 'this' ], 'is', 'very', [ [ 'very' ], 'to', 'learn' ] ]), "(((help) this) is  very  ((hard) to learn)).")
assert(isEq( cons(['a', 'b', ['c']], []), [ [ 'a', 'b', [ 'c' ] ] ]) , "((a b (c))), because  () is a list.")
assert(isEq( cons('a', []), ['a'] ), "(a).")
assert.throws(() => { cons([['a', 'b', 'c']], 'b') }, "No answer, since the second argument l must be a list. Page 8")
assert.throws(() => { cons('a', 'b') }, "No answer, since the second argument l must be a list. Page 8")

// The Law of Cons
// The primitive cons takes two arguments.
// The second argument to cons must be  a list.
// The result is a list.

assert(isEq( cons('a',car([['b'],'c','d'])), ['a','b']), "['a','b']")
assert(isEq( cons('a', cdr([['b'],'c','d'])), ['a','c','d']), "['a','c','d']")


assert( isNull([]) , "Yes, because it is the list composed of zero S-expressions. This question can also be written: (null? l).")
assert( isNull(quote()), "True, because (quote ()) is a notation for the null list")
assert( isNull(['a','b','c']) === false , "False, because l is a non-empty list.")
assert( isNull('spaghetti') === false , "No answer because you cannot ask null? of an atom. In practice, (null? a)  is false for everything, except the empty list." )

// The Law of Null?
// The primitive null? is
// de­fined only for lists.

assert( isAtom('Harry'), "True, because Harry is a string of characters beginning  with a letter.")
assert( isAtom(['Harry','had','a','heap','of','apples']) === false, "False, since s is a list.")
assert( isAtom.length === 1, "It takes one argument. The argument can be any S-expression.")
assert( isAtom(car(['Harry','had','a','heap','of','apples'])), "True, because (car l) is Harry, and Harry is an atom")
assert( isAtom(cdr(['Harry','had','a','heap','of','apples'])) === false, "False")
assert( isAtom(cdr(['Harry'])) === false, "False, because  the  list () is not an  atom.")
assert( isAtom(car(cdr(['swing', 'low', 'sweet', 'cherry', 'oat']))), "True, because (cdr l) is (low sweet cherry oat), and (car (cdr l)) is low, which is an  atom.")
assert( isAtom(car(cdr(['swing', ['low', 'sweet'], 'cherry', 'oat'])) === false), "False, since (cdr l) is ((low sweet) cherry oat), and (car (cdr l)) is (low sweet), which is a list.")

assert( isEq('Harry', 'Harry'), 'True, because (eq? a1  a2) is just another way to ask, "Are a1 and a2 the same non-numeric atom?"')
assert( isEq('margaring', 'butter') === false, 'False, since a1 and a2 are different atoms.')
assert( isEq.length === 2, "It takes two arguments. Both of them must be non-numeric atoms.")
assert( isEq(quote(), quote('strawberry')) === false, "No answer, () and (strawberry) are lists. In practice, lists be arguments of eq?. Two lists are eq? if they are the same list.")
assert( isEq(6, 7) === false, 'No answer, 6 and 7 are numbers.')

// The Law of Eq?
// The primitive eq? takes two ar­guments.
// Each must be a non­numeric atom.

assert( isEq (car ( quote('Mary','had','a','little','lamb','chop')), 'Mary'), "True, because (car l) is the atom Mary, and the argument a is also the atom Mary.")
assert.throws( () => { isEq (cdr ( quote('soured', 'milk')), 'milk') }, "No answer. See The Laws of Eq? and Cdr.")
{
	const l = quote('beans', 'beans', 'we',  'need', 'jelly', 'beans')
	assert(
		isEq (car (l), car (cdr (l)))
		, "True, because it compares the first and second atoms in the list.")
}
