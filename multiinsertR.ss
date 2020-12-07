(define multiinsertR
	(lambda (new old lat)
		(cond
			((null? lat) (quote ()))
			((eq? (car lat) old)
				(cons old
					(cons new
						(multiinsertR new old (cdr lat)))))
			(else
				(cons (car lat)
					(multiinsertR new old (cdr lat)))))))


(define log
  (lambda (x)
    (display x) (newline)))

(define new 'tray)
(define old 'cup)
(define lat (quote (coffee cup tea cup and hick cup)))

(log (multiinsertR new old lat)) ; (coffee cup tray tea cup tray and hick cup tray)
(log
	(equal?
		(multiinsertR new old lat)
		(quote (coffee cup tray tea cup tray and hick cup tray))))