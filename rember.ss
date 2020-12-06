(define rember
	(lambda (a lat)
		(cond
			((null? lat) (quote ()))
			(else (cond
				((eq? (car lat) a) (cdr lat))
				(else (cons (car lat)
					(rember a
						(cdr lat)))))))))

(define log
	(lambda (x)
		(display x) (newline)))

; Does not work because ??
(define a "and")
(define lat (quote (bacon lettuce and tomato)))
(log (rember a lat))
(log "(bacon lettuce tomato)")
