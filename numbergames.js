import assert, { deepStrictEqual } from 'assert'
import isAtom from './lib/isAtom.js'
import add1 from './lib/add1.js'
import { sub1, sub1N } from './lib/sub1.js'
import isZero from './lib/isZero.js'
import plus from './lib/plus.js'
import minus from './lib/minus.js'
import isNull from './lib/isNull.js'
import quote from './lib/quote.js'
import car from './lib/car.js'
import cdr from './lib/cdr.js'
import cons from './lib/cons.js'
import isEq from './lib/isEq.js'


assert(isAtom (14), "Yes, because all numbers are atoms.")

deepStrictEqual(add1 (67), 68, "68.")

deepStrictEqual(sub1 (5), 4, "4.")
deepStrictEqual(sub1N (0), null, "No answer. (sub1 n), where n is 0, has no answer because we consider only nonnegative numbers.")
deepStrictEqual(sub1 (0), -1, "In practice, this result is -1.")

deepStrictEqual(isZero (0), true, "True.")
deepStrictEqual(isZero (1492), false, "False.")

deepStrictEqual(plus (0, 10), 10, "Ten.")

deepStrictEqual(minus (0, 10), null, "No answer. (minus n m), where n is 0, has no answer because we consider only nonnegative numbers.")
deepStrictEqual(minus (10, 10), 0, "Zero.")

