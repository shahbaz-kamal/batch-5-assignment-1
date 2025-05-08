# Topic 1: How TypeScript Improves Code Quality and Maintainability

Javascript is a dynamically typed language. This means we can assign any type of valy to a variable. For small projects this can be okay, but for larger projects type checking is necessary for error free code. Here comes the typescript, providing a strong typing system, this can be solved. Using type checking, its easier to find bugs. As javascript can catch error in runtime but in typescript we can catch error while writing code. Typescript also provides a huge benefit. That is for developers who learned js from es6 he/she might not know about older version of javascript. Some browsers might not support es6. So for that reason code needs to be converted to older versions of js. By using typescript we can convert code to any versions of js code. Thus can improve code quality and project maintainability. 


# Topic 2 : TypeScript Interfaces vs Types: Key Differences

In TypeScript, to define the structure of data we use interfaces and types. But there are various differences between them as they differ in flexibility and usages. Some differences are given below:

---

## 1. Type Definitions

By using interfaces we cannot define primitive (`Boolean`, `number`, `string`, `bigint`, `symbol`), unions and tuple types of data. We can only define object types of data. But using `type`, we can define primitive type as well as object type of data.

**Example:**

```typescript
// Using interfaces
interface Vehicle {
  company: string;
  model: string;
}

const car: Vehicle = {
  company: "Toyota",
  model: "Camry",
};

console.log(car); // Output: { company: 'Toyota', model: 'Camry' }

// Using type
type Fruit = string;
const fruit = "Watermelon";
console.log(fruit); // logs "Watermelon"

type Fruits = {
  name: string;
  taste: string;
};

const fruits = {
  name: "Watermelon",
  taste: "Sweet",
};
console.log(fruits); // logs { name: 'Watermelon', taste: 'Sweet' }
```

## 2. Declaration Merging

In case of interfaces, two interfaces with the same name get merged. But in case of type, two types with same name cause an exception.

**Example:**

```typescript
// Interface merging works
interface User {
  name: string;
}
interface User {
  age: number;
}

const user: User = {
  name: "Shahbaz",
  age: 28,
}; // Valid - interfaces merge

// Type redeclaration causes error
type Person = {
  name: string;
};
type Person = {
  // Error: Duplicate identifier 'Person'
  age: number;
};
```
## 3. Extending Union Types

Interfaces support implementing and extending union types. On the other hand, type does not support implementing or extending union types directly.

**Key Differences:**

```typescript
// INTERFACES can extend union types
interface Animal {
  type: 'dog' | 'cat';
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}

// TYPES cannot extend union types directly
type Pet = {
  type: 'bird' | 'fish';
};

// Instead, you must use intersection (&)
type Bird = Pet & {
  color: string;
  sing(): void;
};

// Implementation example
class Labrador implements Dog {
  type: 'dog' = 'dog';  // from Animal
  breed = 'Labrador';
  bark() {
    console.log('Woof!');
  }
}