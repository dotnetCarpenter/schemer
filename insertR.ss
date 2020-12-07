(define insertR
	(lambda (insert at lat)
		(cond
			((null? lat) (quote ()))
			(else (cond
				((eq? (car lat) at)
				(cons at
					(cons insert (cdr lat))))
				(else (cons (car lat)
					(insertR insert at
						(cdr lat)))))))))

(define log
	(lambda (x)
		(display x) (newline)))

(define insert 'topping)
(define at 'fudge)
(define lat (quote (ice cream with fudge for dessert)))

(log (insertR insert at lat))
