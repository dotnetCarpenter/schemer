export default function curry (f){
	let n = f.length
	return function $curry (...xs) {
		if (n < xs.length) throw new TypeError((f.name || 'anonymous') + ' does not accept ' + xs.length + ' arguments')
		return n > xs.length ? $curry.bind(f, ...xs) : f.apply(undefined, xs)
	}
}