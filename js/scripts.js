var triangleTracker = function() {
var a = parseFloat(prompt("enter the length"));
var b = parseFloat(prompt("enter the height"));
var c = parseFloat(prompt("enter the hypo"));
if(isNaN(a)===true || isNaN(b)===true || isNaN(c)===true || a<=0 || b<=0 || c<=0) {
  alert("enter a correct number")
}
else if((a + b) <=c || (b + c) <=a || (a + c) <=b) {
  alert("not a triangle");
}
else if(a===b && b===c) {
  alert("this is an equilateral");
}
else if(a===b || b===c || a===c) {
  alert("this is an isosceles triangle");
}else{
  alert(scalene);
}
}
