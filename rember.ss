(define rember
  (lambda (a lat)
    (cond
      ((null? lat) (quote ()))
      ((eq? (car lat) a) (cdr lat))
    (else
      (cons (car lat) (rember a (cdr lat)))))))

(define log
  (lambda (x)
    (display x) (newline)))


(define a 'and)
(define lat (quote (bacon lettuce and tomato)))

; (log (quote atom)) (log (eq? (quote atom) (quote atom)))
; (log 'atom) (log (eq? 'atom 'atom))
; (log "atom") (log (eq? "atom" "atom"))