(define log
	(lambda (x)
		(display x) (newline)))

(define firsts
	(lambda (l)
		(cond
			((null? l) (quote ()))
			(else	(cons (car (car l))
				(firsts (cdr l)))))))

(define l (quote (
	(apple peach pumpkin)
	(plum pear cherry)
	(grape raisin pea)
	(bean carrot eggplant))))

; (log l)
(log (firsts l))

(define l (quote (
	(a b)
	(c d)
	(e f))))

; (log l)
(log (firsts l))