var myNumber=1;
for (myNumber=1;myNumber<=100;myNumber+=1) {
  if (myNumber%3===0) {
    console.log(myNumber + "Fizz");
  }
  else if (myNumber%5===0) {
    console.log(myNumber + "Buzz");
  }
  else {
    console.log(myNumber + "Not Divisible by Either 3 Or 5");
  }
}
