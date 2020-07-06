let total = 0;
let limit = 10;

for(let i = 0; i < limit; i++){
  /*
  * When this statement is used in a for loop, it can also be known as an
  * accumulator.Think of it like a cash register's running total while each  
  * item is scanned and added up.
   */
  total += i;
}

console.log(total);