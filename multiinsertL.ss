(define multiinsertL
	(lambda (new old lat)
		(cond
			((null? lat) (quote ()))
			((eq? (car lat) old)
				(cons new
					(cons old
						(multiinsertL new old (cdr lat)))))
			(else
				(cons (car lat)
					(multiinsertL new old (cdr lat)))))))


(define log
  (lambda (x)
    (display x) (newline)))

(define new 'fried)
(define old 'fish)
(define lat (quote (chips and fish or fish and fried)))

(log (multiinsertL new old lat)) ; (chips and fried fish or fried fish and fried)
(log
	(equal?
		(multiinsertL new old lat)
		(quote (chips and fried fish or fried fish and fried))))