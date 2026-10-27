const languages = {
  C: {
    topics: [
      "Introduction to C",
      "Variables and Data Types",
      "Input and Output",
      "Operators",
      "If-Else",
      "Switch",
      "For Loop",
      "While Loop",
      "Do-While Loop",
      "Arrays",
      "Strings",
      "Functions",
      "Recursion",
      "Pointers",
      "Structures",
      "File Handling"
    ],
    questions: [
      "Print Hello World.",
      "Add two numbers.",
      "Check whether a number is even or odd.",
      "Find the largest of two numbers.",
      "Find the largest of three numbers.",
      "Check whether a year is a leap year.",
      "Make a simple calculator using switch.",
      "Print numbers from 1 to 100.",
      "Print the multiplication table of a number.",
      "Find the sum of the first N natural numbers.",
      "Find the factorial of a number.",
      "Reverse the digits of a number.",
      "Check whether a number is a palindrome.",
      "Check whether a number is prime.",
      "Print all prime numbers in a range.",
      "Print a Fibonacci series.",
      "Count the digits of a number.",
      "Find the sum of digits of a number.",
      "Swap two numbers using a temporary variable.",
      "Swap two numbers without a temporary variable.",
      "Find the largest element in an array.",
      "Find the smallest element in an array.",
      "Calculate the sum of array elements.",
      "Calculate the average of array elements.",
      "Reverse an array.",
      "Sort an array in ascending order.",
      "Search an element using linear search.",
      "Search an element using binary search.",
      "Merge two arrays.",
      "Find duplicate elements in an array.",
      "Find the length of a string without strlen.",
      "Copy a string without strcpy.",
      "Concatenate strings without strcat.",
      "Compare strings without strcmp.",
      "Reverse a string.",
      "Check whether a string is a palindrome.",
      "Count vowels and consonants in a string.",
      "Count words in a sentence.",
      "Write a function to add two numbers.",
      "Swap values using call by value.",
      "Swap values using pointers.",
      "Find factorial using recursion.",
      "Find Fibonacci numbers using recursion.",
      "Demonstrate pointer arithmetic.",
      "Create a structure to store student details.",
      "Store and display records using structures.",
      "Write data to a file.",
      "Read data from a file.",
      "Find the sum of a matrix.",
      "Multiply two matrices."
    ]
  },

  "C++": {
    topics: [
      "Introduction to C++",
      "Variables and Data Types",
      "Conditions and Loops",
      "Functions",
      "Arrays and Strings",
      "Pointers and References",
      "Classes and Objects",
      "Constructors",
      "Inheritance",
      "Polymorphism",
      "Encapsulation",
      "Abstraction",
      "Templates",
      "STL",
      "Vectors",
      "Stacks and Queues"
    ],
    questions: [
      "Print Hello World.",
      "Add two numbers.",
      "Check whether a number is even or odd.",
      "Find the largest of three numbers.",
      "Create a calculator using switch.",
      "Print a multiplication table.",
      "Find factorial using a loop.",
      "Check whether a number is prime.",
      "Print a Fibonacci series.",
      "Reverse a number.",
      "Check whether a number is a palindrome.",
      "Find the sum of array elements.",
      "Reverse an array.",
      "Sort an array.",
      "Perform linear search.",
      "Perform binary search.",
      "Reverse a string.",
      "Check whether a string is a palindrome.",
      "Create a function to find the maximum.",
      "Demonstrate function overloading.",
      "Create a class named Student.",
      "Create an object and display its data.",
      "Demonstrate a default constructor.",
      "Demonstrate a parameterized constructor.",
      "Demonstrate a copy constructor.",
      "Demonstrate encapsulation.",
      "Demonstrate single inheritance.",
      "Demonstrate multilevel inheritance.",
      "Demonstrate multiple inheritance.",
      "Demonstrate function overriding.",
      "Demonstrate virtual functions.",
      "Demonstrate runtime polymorphism.",
      "Demonstrate an abstract class.",
      "Overload the plus operator.",
      "Use a friend function.",
      "Create a template function.",
      "Use a vector to store numbers.",
      "Sort a vector.",
      "Use a stack.",
      "Use a queue.",
      "Use a map to store key-value pairs.",
      "Remove duplicates from a vector.",
      "Find the second-largest array element.",
      "Count character frequencies in a string.",
      "Check balanced parentheses using a stack.",
      "Implement a linked list.",
      "Implement a binary search tree.",
      "Perform tree traversal.",
      "Implement bubble sort.",
      "Implement merge sort."
    ]
  },

  Java: {
    topics: [
      "Java Basics",
      "Data Types",
      "Conditions",
      "Loops",
      "Arrays",
      "Strings",
      "Methods",
      "Classes and Objects",
      "Constructors",
      "Inheritance",
      "Interfaces",
      "Exception Handling",
      "Collections",
      "ArrayList",
      "File Handling",
      "Multithreading"
    ],
    questions: [
      "Print Hello World.",
      "Add two integers.",
      "Check whether a number is even or odd.",
      "Find the largest of three numbers.",
      "Create a calculator.",
      "Print a multiplication table.",
      "Find factorial using a loop.",
      "Check whether a number is prime.",
      "Print Fibonacci numbers.",
      "Reverse an integer.",
      "Check whether a number is a palindrome.",
      "Find the sum of array elements.",
      "Find the maximum array element.",
      "Sort an array.",
      "Perform linear search.",
      "Perform binary search.",
      "Reverse a string.",
      "Check whether a string is a palindrome.",
      "Count vowels in a string.",
      "Count words in a sentence.",
      "Create a method to add numbers.",
      "Create a Student class.",
      "Create and use an object.",
      "Demonstrate constructor overloading.",
      "Demonstrate inheritance.",
      "Demonstrate method overriding.",
      "Demonstrate method overloading.",
      "Implement an interface.",
      "Create an abstract class.",
      "Handle division by zero using try-catch.",
      "Create a custom exception.",
      "Use an ArrayList.",
      "Sort a list of integers.",
      "Use a HashMap.",
      "Count character frequencies.",
      "Remove duplicates from a list.",
      "Read a text file.",
      "Write to a text file.",
      "Create a thread by extending Thread.",
      "Create a thread using Runnable.",
      "Demonstrate synchronization.",
      "Find the second-largest number.",
      "Check whether two strings are anagrams.",
      "Find duplicate array elements.",
      "Merge two sorted arrays.",
      "Implement a stack.",
      "Implement a queue.",
      "Implement bubble sort.",
      "Implement binary search recursively.",
      "Create a simple banking class."
    ]
  },

  Python: {
    topics: [
      "Python Basics",
      "Variables",
      "Data Types",
      "Conditions",
      "Loops",
      "Lists",
      "Tuples",
      "Sets",
      "Dictionaries",
      "Functions",
      "Recursion",
      "Strings",
      "File Handling",
      "Classes and Objects",
      "Exceptions",
      "Modules"
    ],
    questions: [
      "Print Hello World.",
      "Add two numbers.",
      "Check whether a number is even or odd.",
      "Find the largest of three numbers.",
      "Create a calculator.",
      "Print a multiplication table.",
      "Find factorial using a loop.",
      "Check whether a number is prime.",
      "Print a Fibonacci series.",
      "Reverse an integer.",
      "Check whether a number is a palindrome.",
      "Find the sum of digits.",
      "Count digits in a number.",
      "Find the maximum element in a list.",
      "Find the minimum element in a list.",
      "Reverse a list.",
      "Sort a list.",
      "Perform linear search.",
      "Perform binary search.",
      "Remove duplicates from a list.",
      "Find the second-largest element.",
      "Count the frequency of list elements.",
      "Merge two lists.",
      "Find common elements in two lists.",
      "Reverse a string.",
      "Check whether a string is a palindrome.",
      "Count vowels in a string.",
      "Count words in a sentence.",
      "Check whether two strings are anagrams.",
      "Create a function to calculate factorial.",
      "Find factorial using recursion.",
      "Create a function that returns the maximum.",
      "Use a dictionary to count word frequency.",
      "Sort a dictionary by its values.",
      "Read a text file.",
      "Write to a text file.",
      "Handle division by zero.",
      "Create a Student class.",
      "Demonstrate inheritance.",
      "Demonstrate encapsulation.",
      "Create a simple calculator function.",
      "Generate a list of squares.",
      "Filter even numbers using a list comprehension.",
      "Find common dictionary keys.",
      "Transpose a matrix.",
      "Add two matrices.",
      "Implement bubble sort.",
      "Implement merge sort.",
      "Create a simple contact book.",
      "Create a basic quiz application."
    ]
  },

  JavaScript: {
    topics: [
      "JavaScript Basics",
      "Variables",
      "Data Types",
      "Operators",
      "Conditions",
      "Loops",
      "Functions",
      "Arrays",
      "Strings",
      "Objects",
      "DOM",
      "Events",
      "Callbacks",
      "Promises",
      "Async/Await",
      "Local Storage"
    ],
    questions: [
      "Print Hello World.",
      "Add two numbers.",
      "Check whether a number is even or odd.",
      "Find the largest of three numbers.",
      "Create a calculator.",
      "Print a multiplication table.",
      "Find factorial using a loop.",
      "Check whether a number is prime.",
      "Print Fibonacci numbers.",
      "Reverse a number.",
      "Check whether a number is a palindrome.",
      "Find the sum of an array.",
      "Find the maximum array element.",
      "Sort an array numerically.",
      "Perform linear search.",
      "Perform binary search.",
      "Reverse a string.",
      "Check whether a string is a palindrome.",
      "Count vowels in a string.",
      "Count words in a sentence.",
      "Remove duplicates from an array.",
      "Find the second-largest array element.",
      "Count array element frequencies.",
      "Merge two arrays.",
      "Find common elements in two arrays.",
      "Create a function using an arrow function.",
      "Demonstrate a callback function.",
      "Use map to double array values.",
      "Use filter to select even numbers.",
      "Use reduce to sum an array.",
      "Sort an array of objects by a property.",
      "Create a Student object.",
      "Demonstrate object destructuring.",
      "Demonstrate array destructuring.",
      "Select an HTML element using the DOM.",
      "Change an element's text using JavaScript.",
      "Create a click event listener.",
      "Build a simple counter.",
      "Validate a form field.",
      "Save data to localStorage.",
      "Read data from localStorage.",
      "Delete data from localStorage.",
      "Create a to-do list.",
      "Create a digital clock.",
      "Fetch data from an API.",
      "Use async and await.",
      "Handle a rejected Promise.",
      "Create a simple quiz.",
      "Create a notes app.",
      "Create a theme toggle."
    ]
  }
};

const languageNames = Object.keys(languages);
let activeLanguage = "C";

const tabs = document.getElementById("languageTabs");
const content = document.getElementById("languageContent");
const questionBank = document.getElementById("questionBank");
const searchInput = document.getElementById("languageSearch");

function renderTabs() {
  tabs.innerHTML = "";

  languageNames.forEach(name => {
    const button = document.createElement("button");
    button.className = "language-tab" +
      (name === activeLanguage ? " active" : "");
    button.textContent = name;
    button.type = "button";

    button.addEventListener("click", () => {
      activeLanguage = name;
      renderTabs();
      renderLanguage();
    });

    tabs.appendChild(button);
  });
}

function renderLanguage() {
  const language = languages[activeLanguage];
  const query = searchInput.value.trim().toLowerCase();

  const topics = language.topics.filter(topic =>
    topic.toLowerCase().includes(query)
  );

  const questions = language.questions.filter(question =>
    question.toLowerCase().includes(query)
  );

  content.innerHTML = `
    <div class="language-panel">
      <h3>${activeLanguage} Programming</h3>
      <p>${language.topics.length} learning topics · ${language.questions.length} practice questions</p>

      <h3>Learning Topics</h3>
      <div class="topic-list">
        ${topics.map(topic => `
          <div class="topic-item">
            <strong>${topic}</strong>
            <p>Study the concept and practise with examples.</p>
          </div>
        `).join("") || "<p>No matching topics found.</p>"}
      </div>
    </div>
  `;

  questionBank.innerHTML = `
    <details class="question-group" open>
      <summary>${activeLanguage}: Practice Questions (${questions.length})</summary>
      <div class="question-inner">
        <ol>
          ${questions.map(question => `<li>${question}</li>`).join("")}
        </ol>
      </div>
    </details>
  `;
}

searchInput.addEventListener("input", renderLanguage);

renderTabs();
renderLanguage();
