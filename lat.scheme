#! /usr/bin/scheme --script

(define lat?
	(lambda (l)
		(cond
			((null? l) #t )
			((atom? (car l)) (lat? (cdr l)))
			(else #f ))))

(define log
	(lambda (x)
		(display x) (newline)))

(log (lat? (quote (Jack Sprat could eat no chicken fat))))
(log "True, because each S-expression in l is an atom")

(log (lat? (quote ((Jack) Sprat could eat no chicken fat))))
(log "False, since ( car l) is a list.")

(log (lat? (quote (Jack (Sprat could) eat no chicken fat))))
(log "False, since one of the S-expressions in l is a list.")

(log (lat? (quote ())))
(log "True, because it does not contain a list.")