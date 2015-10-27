//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

To point to an object

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?
    implicit: scope onbeforeunload
    explicit:this inside a function inside and object bound to object   
      new, instead of pointing to an object points to a function
        default is bound automatically to the nearest object

  // 3) What is the difference between call and apply?

      Call you provide the parameters, apply you use an array

  // 4) What does .bind do?

      /creates a new function body with the same function body as the function that is being called


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    user = {
        username: "Marty",
        email: 'mekobes44@hmail.com',
        getusername: function () {
            return this.username;
        }
    }

//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


user.getusername();


// Write the function definitions which will make the following function invocations function properly.

function Car(make, model, year) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.move = 0,
    this.moveCar = function() {
    this.move += 10;
};
}
                      

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);


prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.
console.log(prius.moveCar());
console.log(prius.move);
prius.moveCar()
prius
console.log(prius.move)
//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the write object (prius vs mustang).




//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

  console.log(prius.year)



//New Problem



var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?

undefined

//In the example above, what is the 'this keyword' bound to when getUsername runs?

bound to user

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.
var user = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getUsername = function(){
  console.log(this.username);
};

setTimeout(getUsername, 5000);
