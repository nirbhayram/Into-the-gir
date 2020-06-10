function sayHi(){
  alert("Hi!");
}
function over() {
   document.write ("Mouse Over");
}
function out() {
   document.write ("Mouse Out");
}
function reDirectToGoogle(){
  window.location="https://google.com";
}
function getConfirmationForRedirect(){
  var redirectValue = confirm("Do you want to redirect to google?");
  if (redirectValue == true) {
    reDirectToGoogle();
  }
}

var str = new String("This is string.");
var arr = ["Nirbhay","Ram"];
arr.forEach((item, i) => {
  console.log(item);
});
console.log(Math.abs(-10));
