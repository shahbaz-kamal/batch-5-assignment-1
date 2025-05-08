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

Interfaces support implementing and extending union types. On the other hand, type does not support implementing or extending union types.

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