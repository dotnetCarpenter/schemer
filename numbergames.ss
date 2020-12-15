(define add1
	(lambda (n)
    (+ n 1)))

(define sub1
  (lambda (n)
    (- n 1)))

(define o+
  (lambda (n m)
    (cond
      ((zero? m) n)
      (else (add1 (o+ n (sub1 m)))))))

(define o-
  (lambda (n m)
    (cond
      ((zero? m) n)
      (else (sub1 (o- n (sub1 m)))))))

(define log
  (lambda (x)
    (display x) (newline)))

(log (add1 67))
(log
  (eq?
    (add1 67)
    68))

(log (sub1 5))
(log
  (eq?
    (sub1 5)
    4))

(log (o+ 0 10))
(log
  (eq?
    (o+ 10 0)
    10))

(log (o- 0 10))
(log
  (eq?
    (o- 0 10)
    -10))