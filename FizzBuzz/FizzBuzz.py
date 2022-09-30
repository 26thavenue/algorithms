def FizzBuzz(n) : 
    if n % 3 == 0 and n % 5 == 0 :
        print("FizzBuzz")
    elif n % 3 == 0 :
        print('Fizz')
    elif n % 5 == 0 :
        print('Buzz')
    else : print('Number is not divisble by 3 or 5')
    
FizzBuzz(9)