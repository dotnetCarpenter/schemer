import assert from 'assert'
import quote from './lib/quote.mjs'
import not from './lib/not.mjs'
import isLat from './lib/isLat.mjs'

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


