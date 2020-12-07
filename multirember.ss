(define multirember
	(lambda (a lat)
		(cond
			((null? lat) (quote ()))
			((eq? (car lat) a) (multirember a (cdr lat)))
		(else
			(cons (car lat) (multirember a (cdr lat)))))))

(define log
  (lambda (x)
    (display x) (newline)))

(define a 'cup)
(define lat (quote (coffee cup tea cup and hick cup)))

(log (multirember a lat)) ; (coffee tea and hick)