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