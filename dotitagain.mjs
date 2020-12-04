import assert from 'assert'
import quote from './lib/quote.mjs'
import not from './lib/not.mjs'
import isLat from './lib/isLat.mjs'
import or from './lib/or.mjs'
import isNull from './lib/isNull.mjs'
import isAtom from './lib/isAtom.mjs'

{
	const l = quote ('Jack', 'Sprat', 'could', 'eat', 'no', 'chicken', 'fat')
	assert( isLat (l), "True, because each S-expression in l is an atom")
}
{
	const l = quote (quote ('Jack'), 'Sprat', 'could', 'eat', 'no', 'chicken', 'fat')
	assert(not (isLat (l)), "False, since ( car l) is a list.")
}
{
	const l = quote ('Jack', quote ('Sprat', 'could'), 'eat', 'no', 'chicken', 'fat')
	assert(not (isLat (l)), "False, since one of the S-expressions in l is a list.")
}
{
	const l = quote ()
	assert( isLat (l), "True, because it does not contain a list.")
}


{
	const l1 = quote (), l2 = quote ('d','e','f','g')
	assert (or (isNull (l1), isAtom (l2)), "True, because (null? l1) is true where l1 is ().")
}
{
	const l1 = quote ('a','b','c'), l2 = quote ()
	assert (or (isNull (l1), isNull (l2)), "True, because (null? l2) is true where l2 is ().")
}
{
	const l1 = quote ('a','b','c'), l2 = quote ('atom')
	assert (not (or (isNull (l1), isNull (l2))), "False, because neither (null? l1) nor (null? l2) is true where l1 is (a  b  c) and l2 is (atom).")
}
