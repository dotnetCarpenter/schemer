import { isAtom } from "./atom.mjs"

export default function car (x) {
	return !isAtom(x) && x.length ? x[0] : null
}