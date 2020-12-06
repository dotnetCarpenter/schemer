import { deepStrictEqual as assert } from 'assert'
import quote from './lib/quote.mjs'
import isNull from './lib/isNull.mjs'
import isEq from './lib/isEq.mjs'
import car from './lib/car.mjs'
import cdr from './lib/cdr.mjs'
import cons from './lib/cons.mjs'

{
	const a = 'mint', lat = quote ('lamb', 'chops', 'and', 'mint', 'jelly')
	assert( rember (a, lat), quote ('lamb', 'chops', 'and', 'jelly'), "(lamb chops and jelly)")
}
{
	const a = 'mint', lat = quote ('lamb', 'chops', 'and', 'mint', 'flavored', 'mint', 'jelly')
	assert( rember (a, lat), quote ('lamb', 'chops', 'and', 'flavored', 'mint', 'jelly'), "(lamb chops and flavored mint jelly).")
}
{
	const a = 'toast', lat = quote ('bacon', 'lettuce', 'and', 'tomato')
	assert( rember (a, lat), quote ('bacon', 'lettuce', 'and', 'tomato'), "(bacon lettuce and tomato).")
}
{
	const a = 'cup', lat = quote ('coffee', 'cup', 'tea', 'and', 'hick', 'cup')
	assert( rember (a, lat), quote ('coffee', 'tea', 'and', 'hick', 'cup'), "(coffee tea cup and hick cup).")
}

/**
 * `Rember` stands for remove a member.
 * It takes an atom and a lat as its arguments,
 * and makes a new lat with the first occurrence
 * of the atom in the old lat removed
 * @param {string} a atom
 * @param {string[]} lat lat
 * @returns {string[]}
 */
function rember (a, lat) {
	return isNull (lat)
		? quote ()
		: isEq (car (lat), a)
			? cdr (lat)
			: cons (car (lat),
				rember (a, cdr (lat)))
}