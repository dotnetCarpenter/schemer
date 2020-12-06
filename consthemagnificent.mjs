import { deepStrictEqual } from 'assert'
import quote from './lib/quote.mjs'
import rember from './lib/rember.mjs'

import isNull from './lib/isNull.mjs'
import isEq from './lib/isEq.mjs'
import car from './lib/car.mjs'
import cdr from './lib/cdr.mjs'
import cons from './lib/cons.mjs'
import not from './lib/not.mjs'

{
	const a = 'mint', lat = quote ('lamb', 'chops', 'and', 'mint', 'jelly')
	deepStrictEqual( rember (a, lat), quote ('lamb', 'chops', 'and', 'jelly'), "(lamb chops and jelly)")
}
{
	const a = 'mint', lat = quote ('lamb', 'chops', 'and', 'mint', 'flavored', 'mint', 'jelly')
	deepStrictEqual( rember (a, lat), quote ('lamb', 'chops', 'and', 'flavored', 'mint', 'jelly'), "(lamb chops and flavored mint jelly).")
}
{
	const a = 'toast', lat = quote ('bacon', 'lettuce', 'and', 'tomato')
	deepStrictEqual( rember (a, lat), quote ('bacon', 'lettuce', 'and', 'tomato'), "(bacon lettuce and tomato).")
}
{
	const a = 'cup', lat = quote ('coffee', 'cup', 'tea', 'and', 'hick', 'cup')
	deepStrictEqual( rember (a, lat), quote ('coffee', 'tea', 'and', 'hick', 'cup'), "(coffee tea cup and hick cup).")
}
{
	const a = 'sauce', lat = quote ('soy', 'sauce', 'and', 'tomato', 'sauce')
	deepStrictEqual( rember (a, lat), quote ('soy', 'and', 'tomato', 'sauce'), "(rember a lat) is (soy and tomato sauce).")
}

{
	const l = quote ( (quote ('apple', 'peach', 'pumpkin')),
	                  (quote ('plum', 'pear', 'cherry')),
                    (quote ('grape', 'raisin', 'pea')),
                    (quote ('bean', 'carrot', 'eggplant')))
	deepStrictEqual( firsts (l), quote ('apple', 'plum', 'grape', 'bean'), "(apple plum grape bean).")
}
{
	const l = quote ( (quote ('a', 'b')),
	                  (quote ('c', 'd')),
                    (quote ('e', 'f')))
	deepStrictEqual( firsts (l), quote ('a', 'c', 'e'), "(a b c).")
}
{
	const l = quote ()
	deepStrictEqual( firsts (l), quote (), "().")
}
{
	const l = quote ( (quote ('five', 'plums')),
	                  (quote ('four')),
                    (quote ('eleven', 'green', 'oranges')))
	deepStrictEqual( firsts (l), quote ('five', 'four', 'eleven'), "(five four eleven).")
}
{
	const l = quote ( (quote ('five', 'plums')),
	                  (quote ('four')),
                    (quote ('eleven', 'green', 'oranges')))
	deepStrictEqual( firsts (l), quote ('five', 'four', 'eleven'), "(five four eleven).")
}
{
	const l = quote (quote (quote ('five', 'plums'), 'four'),
                  (quote ('eleven', 'green', 'oranges')),
                  (quote (quote ('no'), 'more')))
	deepStrictEqual( firsts (l), quote (quote ('five', 'plums'), 'eleven', quote ('no')), "((five plums) eleven (no)).")
}


/**
 *
 * @param {any[]} l a list
 * @returns {any[]}
 */
function firsts (l) {
  return isNull (l)
    ? quote ()
    : isNull (car (car (l)))
      ? firsts (cdr (l))
      : cons (car (car (l)),
        firsts (cdr (l)))
}
