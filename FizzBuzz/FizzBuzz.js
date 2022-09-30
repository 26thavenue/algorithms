const FizzBuzz = (n) => {
  if (n % 3 == 0 && n % 5 == 0) {
    console.log('FizzBuzz');
  } else if (n % 3 == 0) {
    console.log('Fizz');
  } else if (n % 5 == 0) {
    console.log('Buzz');
  } else if (n !== NaN) {
    console.log('Input a number');
  } else {
    console.log('Number is not divisble by 3 or 5');
  }
};

FizzBuzz('mang');
