var minimum;
var maximum;
var primes;

function myFunction(e) {
  e.preventDefault();
  minimum = Number(document.getElementById('Minimum').value);
  maximum = Number(document.getElementById('Maximum').value);
  primes = [];

  listOfPrimes(minimum, maximum); 
  primes = primes.filter(function(x) {
    return x > 1;
  });
  primes = primes.toString();
  primes = primes.replace(/,(?=[^\s])/g, ", ");
  document.getElementById("Your_Primes").innerHTML = primes;
}

function deleteWarning(){
  $( "#warning" ).remove();
}

function isPrime(num) {
  var max = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= max; i++)
    if (num % i === 0) {
      return false;
    }
  primes.push(num);
}

function listOfPrimes(min, max) {
  for (var j = Math.ceil(min); j <= max; j++) {
    isPrime(j);
  }
}