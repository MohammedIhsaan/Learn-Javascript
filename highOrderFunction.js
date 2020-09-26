////// High-Order-Function/////////

//////A function can be passed as an argument to other functions

function sayHello() {
  console.log("Hello");
}

function seeYou() {
  console.log("I will see you later.");
}

function passedAsArgument(f1, f2) {
  f1();
  console.log("how are you.Sorry I am little busy.");
  f2();
}

passedAsArgument(sayHello, seeYou);
///////can be returned by another function

function returnFunction() {
  console.log("returning function");
  return () => {
    console.log("I am InnerFunction");
  };
}

const callInnerFunction = returnFunction();

callInnerFunction();

///////////If you want multiple return from function

function multipleReturnFunction() {
  function f1() {
    console.log("Function 1");
  }
  function f2() {
    console.log("Function 2");
  }
  function f3() {
    console.log("Function 3");
  }
  function f4() {
    console.log("Function 4");
  }
  return { f4, f2, f3, f1 };
}

// you can stored in array[] also but to make it more readable and easier to maintain, you can use an object{} as shown above

const getMultipleReturns = multipleReturnFunction();
console.log(getMultipleReturns);

getMultipleReturns.f1();

///////and can be assigned as a value to a variable.

const highFunction = () => {
  console.log("you invoke me");
};

highFunction();
