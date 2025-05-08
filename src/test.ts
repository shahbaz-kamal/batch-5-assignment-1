{
  //using interfaces
  interface Vehicle {
    company: string;
    model: string;
  }

  const car: Vehicle = {
    company: "Toyota",
    model: "Camry",
  };

  console.log(car); //output: { company: 'Toyota', model: 'Camry' }

  //using type
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
  console.log(fruits) //logs { name: 'Watermelon', taste: 'Sweet' }
}
