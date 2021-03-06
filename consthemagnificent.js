import { deepStrictEqual } from 'assert'
import quote from './lib/quote.js'
import { rember, multirember } from './lib/rember.js'
import firsts from './lib/firsts.js'
import { insertR, multiinsertR, multiinsertL } from './lib/insertR.js'
import insertL from './lib/insertL.js'
import { subst, subst2 } from './lib/subst.js'

/* rember */
{
  const a = 'mint', lat = quote ('lamb', 'chops', 'and', 'mint', 'jelly')
  deepStrictEqual( rember (a, lat), quote ('lamb', 'chops', 'and', 'jelly'), "(lamb chops and jelly)")
}
{
  const a = 'mint', lat = quote ('lamb', 'chops', 'and', 'mint', 'flavored', 'mint', 'jelly')
  deepStrictEqual( rember (a, lat), quote ('lamb', 'chops', 'and', 'flavored', 'mint', 'jelly'), "(lamb chops and flavored mint jelly).")
}
/*
  The Second Commandment
  Use cons to build lists.
 */
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

/*
  The Third Commandment
  When building a list, describe the
  first typical ele­ment, and then
  cons it onto the natural recursion.
 */

/* firsts */
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

  deepStrictEqual(
    firsts (l),
    quote (quote ('five', 'plums'), 'eleven', quote ('no')),
    "((five plums) eleven (no)).")
}

/* insertR */
{
  const insert = 'topping',
    at = 'fudge',
    lat = quote ('ice', 'cream', 'with', 'fudge', 'for', 'dessert')

    deepStrictEqual(
      insertR (insert, at, lat),
      quote ('ice', 'cream', 'with', 'fudge', 'topping', 'for', 'dessert'),
      "(ice cream with fudge topping for dessert).")
}
{
  const insert = 'jalapeño',
    at = 'and',
    lat = quote ('tacos', 'tamales', 'and', 'salsa')

    deepStrictEqual(
      insertR (insert, at, lat),
      quote ('tacos', 'tamales', 'and', 'jalapeño', 'salsa'),
      "(tacos tamales and jalapeño salsa).")
}
{
  const insert = 'souce',
    at = 'salsa',
    lat = quote ('tacos', 'tamales', 'and', 'salsa')

    deepStrictEqual(
      insertR (insert, at, lat),
      quote ('tacos', 'tamales', 'and', 'salsa', 'souce'),
      "(tacos tamales and salsa souce).")
}

/* insertL */
{
  const insert = 'topping',
    at = 'fudge',
    lat = quote ('ice', 'cream', 'with', 'fudge', 'for', 'dessert')

    deepStrictEqual(
      insertL (insert, at, lat),
      quote ('ice', 'cream', 'with', 'topping', 'fudge', 'for', 'dessert'),
      "(ice cream with topping fudge for dessert).")
}

/* subst */
{
  const insert = 'topping',
    at = 'fudge',
    lat = quote ('ice', 'cream', 'with', 'fudge', 'for', 'dessert')

    deepStrictEqual(
      subst (insert, at, lat),
      quote ('ice', 'cream', 'with', 'topping', 'for', 'dessert'),
      "(ice cream with topping for dessert).")
}
/* subst2 */
{
  const insert = 'vanilla',
    at1 = 'chocolate',
    at2 = 'banana',
    lat = quote ('banana', 'ice', 'cream', 'with', 'chocolate', 'topping')

    deepStrictEqual(
      subst2 (insert, at1, at2, lat),
      quote ('vanilla', 'ice', 'cream', 'with', 'chocolate', 'topping'),
      "(vanilla ice cream with chocolate topping).")
}

/* multirember */
{
  const a = 'cup',
    lat = quote ('coffee', 'cup', 'tea', 'cup', 'and', 'hick', 'cup')
  deepStrictEqual(
    multirember (a, lat),
    quote ('coffee', 'tea', 'and', 'hick'),
    "(coffee tea and hick).")
}

/* multiinsertR */
{
  const insert = 'tray',
    at = 'cup',
    lat = quote ('coffee', 'cup', 'tea', 'cup', 'and', 'hick', 'cup')
  deepStrictEqual(
    multiinsertR (insert, at, lat),
    quote ('coffee', 'cup', 'tray', 'tea', 'cup', 'tray', 'and', 'hick', 'cup', 'tray',),
    "(coffee cup tray tea cup tray and hick cup tray).")
}

/* multiinsertL */
{
  const insert = 'fried',
    at = 'fish',
    lat = quote ('chips', 'and', 'fish', 'or', 'fish', 'and', 'fried')
  deepStrictEqual(
    multiinsertL (insert, at, lat),
    quote ('chips', 'and', 'fried', 'fish', 'or', 'fried', 'fish', 'and', 'fried'),
    "(chips and fried fish or fried fish and fried).")
}

/*
  The Fourth Commandment
      (preliminary)
  Always change at least one argument while recurring.
  It must be changed to be closer to termination.
  The changing argument must be tested in the termination
  condition: when using cdr, test termination with null?.
*/
