function foo(sum, x, y) {// function itself can be passed
 return sum(x,y);
}

function sum(a,b) {
 return a + b;
}

console.log(foo(sum,2,3));
