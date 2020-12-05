#! /usr/bin/scheme --script

(define member?
	(lambda (a lat)
		(cond
			((null? lat) #f)
			(else (or (eq? (car lat) a)
				(member? a (cdr lat)))))))

(define log
	(lambda (x)
		(display x) (newline)))

; Does not work because I don't know how to define a list to a variable
; (define a "meat")
; (define lat quote (mashed potatoes and meat gravy))
; (log (member? a lat))
; (log lat) (log a)