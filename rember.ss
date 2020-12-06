(define rember
	(lambda (a lat)
		(cond
			((null? lat) (quote ()))
			((eq? (car lat) a) (cdr lat))
			(else (cons (car lat)
				(rember a	(cdr lat)))))))

(define log
	(lambda (x)
		(display x) (newline)))


; Does not work because of eq? does not think
; two strings are equal if they are not the same reference
; But equal? does.
; But not when used with `car (lat)`.
; If `a` is defined an atom and `cons`ed to `lat`
; then it works for both `eq?` and `equal?`.

(define a "and")
(define lat (cons a (quote (bacon lettuce tomato))))	; Works
; (define lat (quote (bacon lettuce and tomato)))			; Does not work
(log (rember a lat))
(log "(bacon lettuce tomato)")
(log (equal? a (car (quote (and)))))

(define a "bacon")
(define lat (cons a (quote (lettuce and  tomato))))
(log (rember a lat))						; (lettuce and tomato)
(log (eq? "bacon" "bacon"))			; #f
(log (equal? "bacon" "bacon"))	; #t
(log (equal? "and" a))					; #f
(log lat)												; (bacon lettuce and tomato)
(log a)													; bacon
(log (car lat))									; bacon
(log (equal? (car lat) a))			; #t
(log (equal? (car lat) "bacon")); #t

(log (equal? (car (quote (Mary had))) "Mary")); #f
(log 'Mary)																		; Mary
(log (car (quote (Mary had))))								; Mary
