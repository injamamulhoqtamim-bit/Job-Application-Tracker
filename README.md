### 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is :
getElementById(): It selects one element using its id and IDs are supposed to be unique like only one element should have that id. It returns a single element object. If it doesn’t find anything, it also returns null.

getElementsByClassName(): It selects elements using their class name.Many elements can have the same class and It returns an HTMLCollection like a list. Even if there is only one element, it still returns a collection.
Also It is live (if the DOM changes, the collection updates automatically).

querySelector() : It selects the first element that matches a CSS selector. We can use id (#id), (.class), tag (div, p) and also use complex CSS selectors. It returns only the first match.

querySelectorAll(): It selects all elements that match a CSS selector and Returns a NodeList. It is Not live (static list).It can loop through it easily

### 2. How do you create and insert a new element into the DOM?
To create and insert a new element into the DOM I usually follow 3 steps:
Create → createElement(): const newElement = document.createElement("p");

Add text → textContent: newElement.textContent = "Hello World!";

Insert → appendChild(): document.body.appendChild(newElement);

### 3. What is Event Bubbling? And how does it work?
Event Bubbling is when an event starts from the target element and then moves upward through its parent elements.It like air bubbles in water.How bubbles are work simple example i show you:
HTML:
<div id="parent">
  <button id="child">Click Me</button>
</div> 

JavaScript:
document.getElementById("child").addEventListener("click", function() {
  console.log("Button clicked");
});

document.getElementById("parent").addEventListener("click", function() {
  console.log("Div clicked");
});

Output: Button clicked
Div clicked

If bubbling stop than using this : event.stopPropagation();

### 4. What is Event Delegation in JavaScript? Why is it useful?
Event Delegation is a technique where attach one event listener to a parent element to handle events for its child elements.
It usefull to Better performance – One listener instead of many and Works for dynamic elements – If new buttons are added later, it still works also Cleaner code – Less repetition.
Example:
If Insted doing this 
JavaScript:
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function() {
    console.log("Button clicked");
  });
});
Than I can do like this:
document.getElementById("parent").addEventListener("click", function(event) {
  if (event.target.tagName === "BUTTON") {
    console.log("Button clicked");
  }
});

### 5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault()  is stops default action elements and stopPropagation() is stops event from moving to parent elements.
Example:
If we use preventDefault() method , it stop that like normal behavior.
JavaScript:
document.querySelector("a").addEventListener("click", function(event) {
  event.preventDefault();
});
Or if we use stopPropagation() method,the event stops there.
JavaScript:
document.querySelector("button").addEventListener("click", function(event) {
  event.stopPropagation();
});


