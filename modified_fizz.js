var myNumber=1;
for (myNumber=1;myNumber<=100;myNumber+=1) {
  if (myNumber%3===0 || myNumber%5===0) {
    console.log(myNumber + "FizzBuzz");
  }
  else {
    console.log(myNumber + "Not Divisible by 3 or 5");
  }
}
