import assert, { deepStrictEqual } from 'assert'
import isAtom from './lib/isAtom.mjs'
import add1 from './lib/add1.mjs'
import { sub1, sub1N } from './lib/sub1.mjs'
import isZero from './lib/isZero.mjs'
import plus from './lib/plus.mjs'
import isNull from './lib/isNull.mjs'
import quote from './lib/quote.mjs'
import car from './lib/car.mjs'
import cdr from './lib/cdr.mjs'
import cons from './lib/cons.mjs'
import isEq from './lib/isEq.mjs'


assert(isAtom(14), "Yes, because all numbers are atoms.")
deepStrictEqual(add1(67), 68, "68.")
deepStrictEqual(sub1(5), 4, "4.")
deepStrictEqual(sub1N(0), null, "No answer. (sub1 n), where n is 0, has no answer because we consider only nonnegative numbers.")
deepStrictEqual(sub1(0), -1, "In practice, this result is -1.")
deepStrictEqual(isZero(0), true, "True.")
deepStrictEqual(isZero(1492), false, "False.")
