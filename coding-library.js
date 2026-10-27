"use strict";

const programmingData = {
  C: [
    {
      title: "1. Variables and Data Types",
      text: "Variables store values. Common C data types include int, float, char and double.",
      code: "int age = 18;\nfloat marks = 85.5f;\nchar grade = 'A';\nprintf(\"%d\", age);"
    },
    {
      title: "2. Input and Output",
      text: "Use printf() to display output and scanf() to take input. Use the correct format specifier.",
      code: "int number;\nprintf(\"Enter a number: \");\nscanf(\"%d\", &number);\nprintf(\"Number = %d\", number);"
    },
    {
      title: "3. If-Else",
      text: "An if-else statement chooses between alternatives based on a condition.",
      code: "int n = 7;\nif (n % 2 == 0) {\n    printf(\"Even\");\n} else {\n    printf(\"Odd\");\n}"
    },
    {
      title: "4. Loops",
      text: "for, while and do-while repeat statements.",
      code: "for (int i = 1; i <= 5; i++) {\n    printf(\"%d \", i);\n}"
    },
    {
      title: "5. Arrays",
      text: "An array stores multiple values of the same type.",
      code: "int numbers[5] = {10, 20, 30, 40, 50};\nfor (int i = 0; i < 5; i++) {\n    printf(\"%d \", numbers[i]);\n}"
    },
    {
      title: "6. Strings",
      text: "A C string is a character array ending with the null character '\\0'.",
      code: "#include <stdio.h>\nint main(void) {\n    char name[] = \"Harsh\";\n    printf(\"%s\", name);\n    return 0;\n}"
    },
    {
      title: "7. Functions",
      text: "Functions organise code into reusable blocks.",
      code: "int add(int a, int b) {\n    return a + b;\n}\n\nint main(void) {\n    printf(\"%d\", add(2, 3));\n    return 0;\n}"
    },
    {
      title: "8. Pointers",
      text: "A pointer stores the address of another object.",
      code: "int number = 10;\nint *ptr = &number;\nprintf(\"%d\", *ptr);"
    },
    {
      title: "9. Recursion",
      text: "Recursion occurs when a function calls itself. A base case stops the calls.",
      code: "int factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}"
    },
    {
      title: "10. Structures",
      text: "A structure groups related values that may have different data types.",
      code: "struct Student {\n    int roll;\n    char grade;\n};"
    }
  ],

  "C++": [
    {
      title: "1. Basic Output",
      text: "C++ commonly uses cout to display output.",
      code: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"Hello, Harsh!\";\n    return 0;\n}"
    },
    {
      title: "2. Variables",
      text: "Variables store data such as integers, decimal numbers and text characters.",
      code: "int age = 18;\ndouble marks = 85.5;\nchar grade = 'A';"
    },
    {
      title: "3. Conditions",
      text: "if, else-if and else select a path based on conditions.",
      code: "int n = 10;\nif (n > 0) cout << \"Positive\";\nelse if (n < 0) cout << \"Negative\";\nelse cout << \"Zero\";"
    },
    {
      title: "4. Loops",
      text: "Loops repeat code while a condition or iteration rule allows it.",
      code: "for (int i = 1; i <= 5; i++) {\n    cout << i << \" \";\n}"
    },
    {
      title: "5. Functions",
      text: "Functions can accept parameters and return a result.",
      code: "int add(int a, int b) {\n    return a + b;\n}"
    },
    {
      title: "6. Classes and Objects",
      text: "A class defines a type; an object is an instance of that class.",
      code: "class Student {\npublic:\n    string name;\n    void display() {\n        cout << name;\n    }\n};"
    },
    {
      title: "7. Constructors",
      text: "A constructor initialises an object when it is created.",
      code: "class Box {\npublic:\n    int size;\n    Box(int s) : size(s) {}\n};"
    },
    {
      title: "8. Inheritance",
      text: "Inheritance lets a derived class reuse accessible features of a base class.",
      code: "class Animal {\npublic:\n    void eat() {}\n};\nclass Dog : public Animal {}; "
    },
    {
      title: "9. Vectors",
      text: "A vector is a resizable sequence container from the C++ standard library.",
      code: "#include <vector>\nvector<int> nums = {1, 2, 3};\nnums.push_back(4);"
    },
    {
      title: "10. References",
      text: "A reference is an alias for an existing object.",
      code: "int value = 10;\nint &ref = value;\nref = 20;"
    }
  ],

  Java: [
    {
      title: "1. Hello World",
      text: "Java applications commonly start execution in the main method.",
      code: "class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello World\");\n    }\n}"
    },
    {
      title: "2. Variables",
      text: "Java has primitive data types such as int, double, char and boolean.",
      code: "int age = 18;\ndouble marks = 85.5;\nchar grade = 'A';\nboolean passed = true;"
    },
    {
      title: "3. Conditions",
      text: "Use if, else-if and else to make decisions.",
      code: "int n = 8;\nif (n % 2 == 0) {\n    System.out.println(\"Even\");\n} else {\n    System.out.println(\"Odd\");\n}"
    },
    {
      title: "4. Loops",
      text: "for and while loops repeat statements.",
      code: "for (int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}"
    },
    {
      title: "5. Arrays",
      text: "An array holds a fixed number of values of one declared type.",
      code: "int[] numbers = {10, 20, 30};\nfor (int n : numbers) {\n    System.out.println(n);\n}"
    },
    {
      title: "6. Methods",
      text: "Methods contain reusable instructions and may return a value.",
      code: "static int add(int a, int b) {\n    return a + b;\n}"
    },
    {
      title: "7. Classes and Objects",
      text: "Classes describe objects through fields and methods.",
      code: "class Student {\n    String name;\n}\n\nStudent s = new Student();\ns.name = \"Harsh\";"
    },
    {
      title: "8. Constructors",
      text: "A constructor initialises a newly created object.",
      code: "class Student {\n    String name;\n    Student(String n) {\n        name = n;\n    }\n}"
    },
    {
      title: "9. Inheritance",
      text: "The extends keyword declares a subclass in Java.",
      code: "class Animal {\n    void eat() {}\n}\nclass Dog extends Animal {}"
    },
    {
      title: "10. ArrayList",
      text: "ArrayList is a resizable list in the Java Collections Framework.",
      code: "import java.util.ArrayList;\nArrayList<String> names = new ArrayList<>();\nnames.add(\"Harsh\");"
    }
  ]
};

const practiceQuestions = {
  C: [
    "Write a program to print Hello World.",
    "Write a program to add two numbers.",
    "Check whether a number is even or odd.",
    "Find the largest of three numbers.",
    "Check whether a year is a leap year.",
    "Print numbers from 1 to 100.",
    "Find the sum of the first N natural numbers.",
    "Print a multiplication table.",
    "Calculate the factorial of a number.",
    "Check whether a number is prime.",
    "Print the Fibonacci series.",
    "Reverse the digits of a number.",
    "Check whether a number is a palindrome.",
    "Find the sum of the digits of a number.",
    "Swap two numbers using a temporary variable.",
    "Swap two numbers using a function.",
    "Find the largest element in an array.",
    "Find the smallest element in an array.",
    "Calculate the sum of array elements.",
    "Search for an element in an array.",
    "Sort an array in ascending order.",
    "Reverse an array.",
    "Count even and odd array elements.",
    "Find the second-largest array element.",
    "Add two matrices.",
    "Find the transpose of a matrix.",
    "Find the length of a string without strlen.",
    "Copy a string without strcpy.",
    "Compare two strings without strcmp.",
    "Concatenate two strings without strcat.",
    "Count vowels in a string.",
    "Reverse a string.",
    "Check whether a string is a palindrome.",
    "Count words in a sentence.",
    "Write a function to find a square.",
    "Find the GCD of two numbers.",
    "Find the LCM of two numbers.",
    "Use recursion to calculate factorial.",
    "Use recursion to calculate Fibonacci numbers.",
    "Demonstrate call by value.",
    "Demonstrate pointer-based swapping.",
    "Use a pointer to print a variable's value.",
    "Create a structure for student information.",
    "Store and display records using structures.",
    "Demonstrate a union.",
    "Read and write a text file.",
    "Count characters in a file.",
    "Use dynamic memory allocation.",
    "Demonstrate a function pointer.",
    "Create a menu-driven calculator."
  ],

  "C++": [
    "Print Hello World using cout.",
    "Add two numbers.",
    "Check even or odd.",
    "Find the largest of three numbers.",
    "Calculate a factorial.",
    "Check whether a number is prime.",
    "Print the Fibonacci series.",
    "Reverse an integer.",
    "Check a palindrome number.",
    "Create a function to add two numbers.",
    "Demonstrate function overloading.",
    "Create a class named Student.",
    "Create objects of a class.",
    "Demonstrate a constructor.",
    "Demonstrate a destructor.",
    "Use private and public members.",
    "Demonstrate single inheritance.",
    "Demonstrate multilevel inheritance.",
    "Demonstrate hierarchical inheritance.",
    "Demonstrate function overriding.",
    "Demonstrate a virtual function.",
    "Demonstrate an abstract class.",
    "Overload the plus operator.",
    "Use a pointer to an object.",
    "Demonstrate a reference variable.",
    "Find the largest element in an array.",
    "Sort a vector.",
    "Search a vector for an element.",
    "Remove duplicates from a vector.",
    "Use a string to reverse text.",
    "Count vowels in a string.",
    "Check a string palindrome.",
    "Use a map to count frequencies.",
    "Use a set to remove duplicates.",
    "Use a stack.",
    "Use a queue.",
    "Implement binary search.",
    "Implement bubble sort.",
    "Implement selection sort.",
    "Implement insertion sort.",
    "Create a recursive factorial function.",
    "Demonstrate exception handling.",
    "Read a file using ifstream.",
    "Write to a file using ofstream.",
    "Create a template function.",
    "Use a lambda expression.",
    "Demonstrate a copy constructor.",
    "Use a linked list.",
    "Implement a simple calculator.",
    "Create a menu-driven student record program."
  ],

  Java: [
    "Print Hello World.",
    "Add two integers.",
    "Check whether a number is even or odd.",
    "Find the largest of three numbers.",
    "Calculate a factorial.",
    "Check whether a number is prime.",
    "Print a Fibonacci series.",
    "Reverse a number.",
    "Check a palindrome number.",
    "Create a method to add two numbers.",
    "Create a Student class.",
    "Create and use an object.",
    "Demonstrate a constructor.",
    "Demonstrate method overloading.",
    "Demonstrate method overriding.",
    "Use single inheritance.",
    "Demonstrate an interface.",
    "Create an abstract class.",
    "Use encapsulation with private fields.",
    "Use the this keyword.",
    "Use the super keyword.",
    "Find the largest element in an array.",
    "Sort an integer array.",
    "Search an array for a value.",
    "Reverse an array.",
    "Count vowels in a string.",
    "Reverse a string.",
    "Check whether a string is a palindrome.",
    "Count words in a sentence.",
    "Use an ArrayList.",
    "Use a HashMap to count frequencies.",
    "Use a HashSet to remove duplicates.",
    "Demonstrate exception handling.",
    "Handle division by zero.",
    "Read text from a file.",
    "Write text to a file.",
    "Create a recursive factorial method.",
    "Implement binary search.",
    "Implement bubble sort.",
    "Implement selection sort.",
    "Create a calculator using switch.",
    "Create a menu-driven program.",
    "Use a static variable.",
    "Demonstrate an enum.",
    "Create and run a thread.",
    "Use a lambda expression.",
    "Sort a list using a comparator.",
    "Demonstrate generic methods.",
    "Create a simple bank account class.",
    "Create a student marks management program."
  ]
};

const languageTabs = document.getElementById("languageTabs");
const languageContent = document.getElementById("languageContent");
const languageSearch = document.getElementById("languageSearch");
const questionBank = document.getElementById("questionBank");

let activeLanguage = "C";

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function renderTabs() {
  languageTabs.replaceChildren();

  Object.keys(programmingData).forEach(language => {
    const button = makeElement("button", "language-tab", language);
    button.type = "button";
    button.classList.toggle("active", language === activeLanguage);
    button.setAttribute("aria-pressed", String(language === activeLanguage));

    button.addEventListener("click", () => {
      activeLanguage = language;
      renderTabs();
      renderLibrary();
      renderQuestions();
    });

    languageTabs.appendChild(button);
  });
}

function renderLibrary() {
  languageContent.replaceChildren();

  const query = languageSearch.value.trim().toLowerCase();
  const topics = programmingData[activeLanguage].filter(topic =>
    `${topic.title} ${topic.text} ${topic.code}`.toLowerCase().includes(query)
  );

  if (topics.length === 0) {
    languageContent.appendChild(
      makeElement("p", "empty-message", "No matching notes found. Try another search.")
    );
    return;
  }

  topics.forEach(topic => {
    const card = makeElement("article", "topic-card");
    card.appendChild(makeElement("h3", "", topic.title));
    card.appendChild(makeElement("p", "", topic.text));

    const pre = document.createElement("pre");
    const code = document.createElement("code");
    code.textContent = topic.code;
    pre.appendChild(code);
    card.appendChild(pre);

    languageContent.appendChild(card);
  });
}

function renderQuestions() {
  questionBank.replaceChildren();

  const query = languageSearch.value.trim().toLowerCase();
  const questions = practiceQuestions[activeLanguage].filter(question =>
    question.toLowerCase().includes(query)
  );

  if (questions.length === 0) {
    questionBank.appendChild(
      makeElement("p", "empty-message", "No matching questions found.")
    );
    return;
  }

  questions.forEach((question, index) => {
    const card = makeElement("article", "question-card");
    card.appendChild(makeElement("span", "question-number", `${index + 1}.`));
    card.appendChild(makeElement("p", "", question));
    questionBank.appendChild(card);
  });
}

languageSearch.addEventListener("input", () => {
  renderLibrary();
  renderQuestions();
});

renderTabs();
renderLibrary();
renderQuestions();
