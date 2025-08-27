# ** ANSWER OF THE QUESTIONS **

---

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### ✅ getElementByID :

The getElementByID is used to collect for a specific html content having a unique ID. if there is Multiple id with the same name then it will collect only the first html element with that specific id.

### ✅ getElementsByClassName :

The getElementsByClassName is used to collect one or multiple html element having the unique or same classname respectively.

### ✅ querySelector :

The querySelector is used to collect first matching single html element of a id, class or any html element that is defined as per css selector.

### ✅ querySelectorAll :

The querySelectorAll is used to collect matching all the html element of a id, class or any html element that is defined as per css selector. It returns an array like object collection.

---

## 2. How do you create and insert a new element into the DOM?

### Create an Element into DOM:

By Using createElement('TagName') we can create that HTML Element for that specific tag named property into DOM. Like createElement('div') we can create a "<"div">""</"div">" block into the DOM. Using this method we can create any html block we want.

### Inserting an Element into DOM:

1. We can insert a html element into any html element using appendChild('childElement') method.
2. using innerHtml Method.
3. using insertAdjacentElement method.

---

## 4. What is Event Bubbling and how does it work?

Event Bubbling means that after clicking a button, the click event bubbles up like a bubble in water from its triggered click event that is button to go upwards to its parent element then to its parent element upto the window element.

#### How does it work:

Event Bubbling works in three phases

- Capture Phase: Travels Down From window to the targeted down element.
- Target Phase: The Event reaches to the target element.
- Bubbling Phase: The Event bubbles up like water bubble from target element to window.

---

## 5. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is technique of handling events where we don't add event listener in multiple child element instead of we add single event listener to the parent element of that multiple children then traverse the child element. it works because of event bubbling. It is very useful that we don't need to add too many event listener.

---

## 6. What is the difference between preventDefault() and stopPropagation() methods?

**preventDefault()**: Stop the default behavior of form reloading after submit.

**stopPropagation()**: Stops the event from bubbling up or down through the DOM tree.

---
