# Ecommerce Platform
## Andrea E! *Friday November 21<sup>st</sup> 2025*

### Index
-[Technology Used](#technology-used)
-[Reflection questions](#Reflection)
-[Learning Resources](#learning-resources)

#### Technology Used
Using HTML,CSS, Javascript/ Typescript and an external API, I built an E-Commerce Platform. This application has proper error handling for product fetching. Utilizing my understanding of class based Object Oriented Programming (Instances, Classes, Methods)
#### Reflection

###### Difficulties: 
 1. The first mistake I originally made was beginning without proper planning. I set up my project files and I sorted through the project scope and generalized what I would have done. I quickly realized before getting into the project to deeply I needed a more thorough plan especially when it came to working on the platform over the span of a few days. This shift allowed me to create an organized and thorough plan of completion. In a real world example this would be also beneficial if I were to be working on a team, because this means anyone could pick up on a piece of work and it have a better streamline of completion. 

*How you implemented TypeScript features and OOP principles.*
2. I implemented typescript and it made understanding my project that much easier. It helps set expectations of input and outputs. Utilizing object oriented programming helped me store product data, transform raw data, and do things like calculate prices / discounts.

3. *The challenges you encountered and how you overcame them.*
I faced several challenges as I was still getting the hang of typescript. Some of those issues included not getting outputs I desired when testing, and thinking something was wrong with my code despite it being a similiarly written method as another file that worked fine. This caused me on a few occaisions to go in fixing perfectly working code because I thought there was a bug somewhere because things were not outputting as expected just to later realize there was a calling or compiling issue. At the same time this made me be extremely careful and gave me more practice in debugging. In one particular issue I had tested discountCalculator within discountCalculator and assumed everything would output as expected. Come to remember I had only turned watch on main.ts so the file was not compiled when I attempted to test it. I also had some confusion on the placement of custom errors. I placed them in accordance to my last lab.

4. *How you handled asynchronous operations and error management.*
In my apiService.ts file I defined the fetchProducts function. It is an asynchronus function that fetches products from an api. Using await, it checks the response and parses the information to JSON. This is returned into an array apiProducts[].
In main.ts I used an async function and used await inside my function. This allowed me to create Product instances and use methods such as calculateTax.
For my error handling I created and called custom errors that extended Javascripts built in error. I used try catch 
blocks and placed errors where it would be most useful!

#### Learning Resources

1. [Fetching Data](https://www.youtube.com/watch?v=37vxWr0WgQk)
2. [Async Await](https://blog.logrocket.com/async-await-typescript/)
3. [Catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
4. [OOP](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming)
5. [Type Errors](https://stackoverflow.com/questions/56516615/how-to-fix-typeerror-fetchproducts-is-not-a-function)
6. [Creating an instance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
7. [Review on Custom Errors](https://medium.com/@Nelsonalfonso/understanding-custom-errors-in-typescript-a-complete-guide-f47a1df9354c)
8. [Asynchronus JS](https://www.youtube.com/watch?v=670f71LTWpM)