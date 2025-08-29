1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

<!-- Answers  -->

1. Answer:  
   --> "getElementById" selects one element by its unique ID,
   --> "getElementsByClassName" selects a list of elements with a same class name,
   --> "querySelector" selects the first element that matches any CSS selector and
   --> "querySelectorAll" selects all matches in a static list.

2. Answer: To create and insert a new element, we use

--> document.createElement(),
--> set its text or attributes,
--> then we append it to tatget Container.

3.  Event bubbling means when we click on a child element, the event also travels upward through its parents unless stopped.

4.  Event delegation takes advantage of bubbling by putting one listener on a parent to handle events for all its children—super useful for performance or when adding items dynamically.

5.  --> "preventDefault()" blocks the browser’s default behavior (like following a link),
    --> stopPropagation() prevents the event from bubbling up to parent elements.
