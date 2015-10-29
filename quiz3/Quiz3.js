

var paramerterA = prompt("you're gonna pick two numbers. We'll find the area of the square with those nubmers as it's sides valuses. pick the first number, please");


var paramerterB = prompt("do it again, please");

var area = function (paramerterA, paramerterB){

  var calc = (paramerterA * paramerterB);
  console.log("areaFinder. parameter 1 =" + paramerterA + "and parameter 2 =" + paramerterB);
  console.log("area is: "+ calc);
  alert(calc);
  return (calc);


};


area(paramerterA,paramerterB);


function quadArea (calc) {
  var quadArea = (calc + calc + calc + calc);
  console.log("quadArea. parameter 3 =" + calc);
  alert("The area of four of the same size squares is" + quadArea + " of course!");
};


quadArea(area);

function doubArea(calc) {
  var numPlus = ((calc) * (.5));
  console.log("doubArea. parameter is " + calc);
  console.log(numPlus);
  alert(numPlus);

};

doubArea(area);


