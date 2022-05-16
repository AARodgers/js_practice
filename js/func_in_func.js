function greetVisitor(phrase) {
  var welcome = phrase + ".Great to see you!"; // Local variable
  var sayWelcome = function()  {
    alert(welcome);
  }
  return sayWelcome; // why use return here?
}
var personalGreeting = greetVisitor('Hola Amiga');
personalGreeting();
document.write(personalGreeting.toString());
 // alerts "Hola Amiga. Great to see you!"


 /** This script uses greetVistor function to create a new custom function called personalGreeting that
  * can still access the variables from the original function. Normally  when a function finishes executing
  * the local variables within it are inaccessible, but by returning a function reference (sayWelcome)
  * the greetVisitor function's internal data becomes accessible to the outside world.
  *The key to understanding closures (is a local variable for a function, kept alive after the function
    has returned) are understanding variable scope in JS and understanding the diff btwn executing
    a function and a function reference. By assigning the return value of the greetVisitor function to
    the new personalGreeting function, the program stores the code of the sayWelcome function.
    You can test this by using the toString() method: personalGreeting.toString()

    The variable welcome is a copy of the variable welcome from the original greetVisitor function
    at the time when the closure was created.
  */
