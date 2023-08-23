=====================================================================> JAVASCRIPT < =======================================================



1. WEB APIS: 
	Web APIS means which are part of browser, not javascript .
	
		1. setTimeout()
		2. DOM API
		3. fetch 
		4. localstorage
		5. console
		6. location
		
		
	
	
	 e.g. 
	 	console.log("start")
	 	setTimeout(()=>{
	 		console.log("In settimeout");
	 	},5000)
	 	console.log("end");
	 	
	 	
	 	O/P : 
	 		start
	 		end
	 		In settimeout
	 		
	 	
	 	NOTE: 
	 		Here when execution starts it creates global execution context in call stack. It will first print start in the console, then it will goes to the timeout and it throws that settimeout funtion in the web apis environment, than it print end in the console and then global execution context destroy
	 		.
	 		Then after completion of 5 seconds, it will push the callback function to the callback queue, then EVENT LOOP throws this function inside callback queue to th call stack and then again global execution context starts. And after all execution it gets destroyed.
	 		
	 	
	 	
	 	this is for settimeout and others 
	 	
	 	
	 	for callback functions inside promise it will use microtask queue.
	 	
	 	SO MICROTASK QUEUE MUST BE EXECUTED BEFORE callback queue.
	 	
	 	
	 	
	 	NOTE : 
	 		 Suppose if microtask queue have more tasks , then until completion of microtask queue it will not execute the processes of callback queue and 
	 		 it takes more time ,so this process is known as STARVATION of the callback queue.
	 		 
	 		 


############.  HOISTING:
	 		In javascript functions and variables are moved to the top is called as hoisting .
	 		
	 		e.g. 
	 		console.log(x);
	 		getName();
	 		var x=8;
	 		function getName(){
	 			console.log("Akshay");
	 		} 
	 		
	 		O/P: 
	 			undefined
	 			Akshay
	 			
	 	
	                 
	                 NOTE: 
	                 	If we write arrow function instead of normal function then it will treated as a variable and it also returns undefined.
	                 	
	                 	
	           
	           
	          
############. SCOPE CHAINING :
 		E.G. 
 			function hello(){
 				var a=10;
 				function hii(){
 					console.log(b);
 				}
 				hii();
 			}
 			hello();
 			
 			
 			O/P : 10 
 			
 			
 			NOTE : 
 				here first it will search value of b in local environment i.e. in hii function, if it is not found then it will go to its parent environment i.e. LEXICAL environment, if again value is not found then again it will check in its parent environment, i.e. here in global environment.
 				
 				
 				THIS CHAINING IS CALLED AS SCOPE CHAIN..
 				
 				
 				
 				

############ WHAT IS CLOSURE: 
		Closures are a fundamental concept in JavaScript that occur when a function is defined within another function and the inner function has access to 		the outer function's variables and scope chain. In simpler terms, a closure allows a function to "remember" its lexical scope even when it is executed outside of that scope.

To understand closures better, consider the following example: 				
 				
 		function outerFunction() {
	  	const outerVar = 'I am from the outer function';

  		function innerFunction() {
    			console.log(outerVar); // The inner function has access to outerVar
  		}

  		return innerFunction;
	}

		const closureFunction = outerFunction();
		closureFunction(); // Output: "I am from the outer function"

 				
 				
 				

########## DIFFERENCES BETWEEN NULL AND UNDEFINED: 
	In JavaScript, `null` and `undefined` are two distinct values that represent the absence of a meaningful value, but they have different meanings and use cases.

		1. **undefined:**
 		   - When a variable is declared but not assigned a value, it automatically gets the value `undefined`.
		   - It is a primitive data type and represents the absence of a value or uninitialized state.
   		   - A function that doesn't explicitly return a value also implicitly returns `undefined`.
		   - An object property that does not exist will return `undefined` when accessed.

		Example:

		let variable1; // declared but not assigned, so it is undefined
		const obj = { prop: 'hello' };
		console.log(obj.prop); // Output: "hello"
		console.log(obj.nonExistentProp); // Output: undefined
		function noReturnValue() {
		  // no explicit return, so it returns undefined
		}
		console.log(noReturnValue()); // Output: undefined
	

		2. **null:**
		   - `null` is a primitive data type that represents the intentional absence of any value.
		   - It is usually assigned explicitly by a developer to indicate that a variable or object property does not have a value.
		   - It is often used as a deliberate placeholder when a value is expected but not available or valid.

Example:
```javascript
let variable2 = null; // assigned null intentionally to indicate no value
const obj2 = { prop: null }; // explicitly setting prop to null
```

 Here's a summary of the key differences:

  - `undefined` is automatically assigned to variables that are declared but not initialized, while `null` must be explicitly assigned.
  - `undefined` represents the absence of a value due to lack of assignment or an uninitialized state, while `null` represents an intentional lack of value.
  - `undefined` is often used to indicate that something is not present or not available, whereas `null` is often used to represent the absence of a valid value.

In most cases, you don't need to assign `null` explicitly, as JavaScript will handle uninitialized variables with `undefined`. However, using `null` can be useful when you want to explicitly indicate the absence of a value, especially when you are working with objects and need to differentiate between "not set" and "set to null." 				
 
 
 =================================================================================================================================================================
 
 What are Promises and async/await in JavaScript? How do they simplify asynchronous programming?
 	Promises and async/await are modern JavaScript features that simplify asynchronous programming and make it easier to work with asynchronous tasks like API calls, file I/O etc.
 	
 	1. Promises:
		Promises are objects representing the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a clean and structured way to handle asynchronous tasks.

	Promises have three states:
		Pending: The initial state. The promise is still pending and hasn't been fulfilled or rejected yet.
		Fulfilled: The asynchronous operation completed successfully, and the promise now holds the resulting value.
		Rejected: The asynchronous operation encountered an error, and the promise holds the reason for the rejection.
		Promises simplify asynchronous programming by allowing you to chain multiple asynchronous operations using .then() and handle errors using .catch().

Example using Promises:
 
 	function fetchData() {
  		return new Promise((resolve, reject) => {
   		 // Simulate an API call
   		 setTimeout(() => {
    		  const data = { id: 1, name: 'John Doe' };
     		 if (data) {
     		   resolve(data); // Fulfill the promise with data
     		 } else {
      		  reject('Error: Data not found.'); // Reject the promise with an error message
    		  }
   		 }, 1000);
  		});
	}

	fetchData()
  	.then((data) => console.log(data))
  	.catch((error) => console.error(error));

 
 
 
 
 ============================================================================================================================================================================================================================================
 
Describe the differences between let, const, and var in terms of scope and hoisting.
 
 
The differences between `let`, `const`, and `var` in terms of scope and hoisting are significant, and understanding them is essential for writing clean and predictable JavaScript code.

1. **var:**
   - `var` was the original way to declare variables in JavaScript, introduced in ECMAScript 5 (ES5).
   - Variables declared with `var` are function-scoped, meaning they are only accessible within the function where they are declared.
   - If a `var` variable is declared outside any function, it becomes a global variable, accessible throughout the entire program.
   - Hoisting occurs with `var`, which means that variable declarations are moved to the top of their containing scope during the compilation phase, while the initial assignment remains in place.

   Example with `var`:
   ```javascript
   function exampleFunction() {
     if (true) {
       var x = 10;
       console.log(x); // Output: 10
     }
     console.log(x); // Output: 10 (due to hoisting)
   }
   ```

2. **let:**
   - `let` was introduced in ECMAScript 6 (ES6) to address some issues with `var`.
   - Variables declared with `let` have block scope, which means they are only accessible within the block (i.e., any set of curly braces) where they are defined.
   - Unlike `var`, `let` variables are not hoisted to the top of their scope, so you cannot access them before their declaration.

   Example with `let`:
   ```javascript
   function exampleFunction() {
     if (true) {
       let y = 20;
       console.log(y); // Output: 20
     }
     console.log(y); // Error: y is not defined
   }
   ```

3. **const:**
   - `const` was also introduced in ES6 and stands for "constant."
   - Variables declared with `const` are block-scoped like `let` and cannot be reassigned after they are declared.
   - The value assigned to a `const` variable must be provided at the time of declaration and cannot be changed later.

   Example with `const`:
   ```javascript
   function exampleFunction() {
     const z = 30;
     console.log(z); // Output: 30

     z = 40; // Error: Assignment to constant variable
   }
   ```

In summary:
- `var` is function-scoped and hoisted, which can sometimes lead to unexpected behavior and bugs.
- `let` and `const` are block-scoped and not hoisted, providing more predictable behavior and safer code.
- Use `let` when you need to reassign the variable, and use `const` when the value should remain constant throughout the program.
- In modern JavaScript, it is recommended to use `let` and `const` over `var` for better scoping and to avoid hoisting-related issues. 
 
 
 
 ==================================================================================================================================================================
 
 What are the differences between map, forEach, filter, and reduce array methods? Provide use cases for each.
 
 `map`, `forEach`, `filter`, and `reduce` are important array methods in JavaScript that allow you to manipulate arrays in different ways. Here are the differences between them along with their use cases:

1. **`map`:**
   - `map` is used to transform each element of an array into a new array based on a given function.
   - It creates a new array with the same length as the original array, where each element is the result of applying the provided function to the corresponding element of the original array.

   Use case:
   ```javascript
   const numbers = [1, 2, 3, 4, 5];

   const squaredNumbers = numbers.map((num) => num * num);
   // Output: [1, 4, 9, 16, 25]

   const names = ['Alice', 'Bob', 'Charlie'];
   const upperCaseNames = names.map((name) => name.toUpperCase());
   // Output: ['ALICE', 'BOB', 'CHARLIE']
   ```

2. **`forEach`:**
   - `forEach` is used to iterate over an array and perform a specific action or side effect for each element. It does not create a new array but instead modifies the existing array or performs some side effects.

   Use case:
   ```javascript
   const numbers = [1, 2, 3, 4, 5];

   numbers.forEach((num) => console.log(num));
   // Output: 1 2 3 4 5
   ```

3. **`filter`:**
   - `filter` is used to create a new array containing elements that pass a certain condition specified in a callback function.
   - It returns a new array with only the elements that satisfy the condition.

   Use case:
   ```javascript
   const numbers = [1, 2, 3, 4, 5];

   const evenNumbers = numbers.filter((num) => num % 2 === 0);
   // Output: [2, 4]

   const names = ['Alice', 'Bob', 'Charlie'];
   const longNames = names.filter((name) => name.length > 5);
   // Output: ['Charlie']
   ```

4. **`reduce`:**
   - `reduce` is used to "reduce" an array into a single value by applying a function to each element of the array.
   - It takes an accumulator and each element of the array, and it returns the accumulated value after applying the provided function to all elements.

   Use case:
   ```javascript
   const numbers = [1, 2, 3, 4, 5];

   const sum = numbers.reduce((acc, num) => acc + num, 0);
   // Output: 15 (sum of all elements)

   const names = ['Alice', 'Bob', 'Charlie'];
   const concatenatedNames = names.reduce((acc, name) => acc + ' ' + name);
   // Output: 'Alice Bob Charlie'
   ```

In summary:
- `map` is used to transform an array into a new array with the same length.
- `forEach` is used for iterating over an array and performing side effects on each element.
- `filter` is used to create a new array with only the elements that pass a specified condition.
- `reduce` is used to "reduce" an array into a single value by applying a function to each element and accumulating the results.
 
 
 ====================================================================================================================================================================
 
 How does this work in JavaScript? Provide examples of how it can change in different contexts?
 
 The behavior of `this` in JavaScript can change depending on the context in which it is used. The value of `this` is determined dynamically during the runtime based on how a function is called, rather than how it is defined. The way `this` behaves in different contexts is one of the aspects that can lead to confusion for developers. Let's explore some common scenarios:

1. **Global context:**
   When `this` is used in the global context (outside of any function or object), it refers to the global object, which is the `window` object in browsers and the `global` object in Node.js.

   Example:
   ```javascript
   console.log(this === window); // Output: true (in a browser environment)
   console.log(this === globalThis); // Output: true (in Node.js)
   ```

2. **Function context:**
   When `this` is used inside a regular function, its value depends on how the function is called. If the function is called as a standalone function (not attached to an object), `this` will point to the global object (in non-strict mode) or be `undefined` (in strict mode).

   Example:
   ```javascript
   function showThis() {
     console.log(this);
   }

   showThis(); // Output: window (in a browser environment, non-strict mode)
   ```

3. **Method context:**
   When `this` is used inside a method (a function defined as a property of an object), `this` refers to the object that the method is called on.

   Example:
   ```javascript
   const person = {
     name: 'John',
     greet() {
       console.log(`Hello, my name is ${this.name}.`);
     },
   };

   person.greet(); // Output: "Hello, my name is John."
   ```

4. **Constructor context:**
   When a function is used as a constructor (invoked with the `new` keyword), `this` refers to the newly created instance of the object that the constructor is creating.

   Example:
   ```javascript
   function Person(name) {
     this.name = name;
   }

   const john = new Person('John');
   console.log(john.name); // Output: "John"
   ```

5. **Event handler context:**
   In event handlers, `this` often refers to the DOM element on which the event is triggered.

   Example:
   ```html
   <button onclick="console.log(this);">Click me</button>
   <!-- Output: [button HTML element] -->
   ```

6. **Arrow function context:**
   Arrow functions have a different behavior for `this` compared to regular functions. In arrow functions, `this` retains the value of the enclosing context lexically, which means it captures the `this` value of the surrounding scope.

   Example:
   ```javascript
   const obj = {
     name: 'John',
     greet() {
       setTimeout(() => {
         console.log(this.name); // Output: "John" (this retains the value of the "obj" object)
       }, 100);
     },
   };

   obj.greet();
   ```

Remember that understanding the context in which `this` is used is crucial for writing effective JavaScript code, especially when dealing with functions in different contexts or using them as event handlers. Using arrow functions can sometimes help maintain the desired behavior of `this`.
 
 
=================================================================================================================================================================
=================================================================================================================================================================


POLYFILLS FOR MAP FUNCTION (IMPLEMENTATION OF MAP FUNCTIO):
	let arr=[3,4,5,67]
	

 	Array.prototype.myMap=function(cb){
    		let temp=[]
    		for(let i=0;i<this.length;i++){
        		temp.push(cb(this[i], i, this))
    			}
    		return temp;
		}


		// let ar2=arr.map((ar)=>{
		//     return ar*2;
		// })
		// console.log(ar2)
 	
	let ar2=arr.myMap((ar, i, arr)=>{
    		return ar*2;
	})
	console.log(ar2)
 				
 
=================================================================================================================================================================
=================================================================================================================================================================

POLYFILLS FOR FILTER : 
	
	let arr=[3,4,5,67]

	Array.prototype.myFilter=function(cb){
  	  let temp=[]
   	 for(let i=0;i<this.length;i++){
   	     if(cb(this[i], i , this))temp.push(this[i])
 	   }
 	   return temp;
	}

	let arr2=arr.myFilter((ar,i,arr)=>{
	    return ar>4;    
	})

	console.log(arr2)
	  
=================================================================================================================================================================
=================================================================================================================================================================


POLYFILLS FOR REDUCE : 
	     
	let arr=[3,4,5,67]

	// let sum=arr.reduce((acc, curr, i, arr)=>{
	//     return acc+curr;
	// },0)
	// console.log(sum)

	Array.prototype.myReduce=function(cb, initialValue){
    		let accumulator=initialValue;
    		for(let i=0;i<this.length;i++){
	        	accumulator=accumulator?cb(accumulator, this[i], i, this):this[i]
    		}
    		return accumulator;
	}

	let sum=arr.myReduce((acc, curr, i, arr)=>{
    		return acc+curr;
	},0)

	console.log(sum)
	 		 
