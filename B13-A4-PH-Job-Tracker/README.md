### What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is :
getElementById(): It selects one element using its id and IDs are supposed to be unique like only one element should have that id. It returns a single element object. If it doesn’t find anything, it also returns null.

getElementsByClassName(): It selects elements using their class name.Many elements can have the same class and It returns an HTMLCollection like a list. Even if there is only one element, it still returns a collection.
Also It is live (if the DOM changes, the collection updates automatically).

querySelector() : It selects the first element that matches a CSS selector. We can use id (#id), (.class), tag (div, p) and also use complex CSS selectors. It returns only the first match.

querySelectorAll(): It selects all elements that match a CSS selector and Returns a NodeList. It is Not live (static list).It can loop through it easily