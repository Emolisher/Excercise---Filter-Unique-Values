const menu = [
  {
    name: "pancakes",
    category: "breakfast",
  },
  {
    name: "burger",
    category: "lunch",
  },
  {
    name: "steak",
    category: "dinner",
  },
  {
    name: "bacon",
    category: "breakfast",
  },
  {
    name: "eggs",
    category: "breakfast",
  },
  {
    name: "pasta",
    category: "dinner",
  },
];
//Unique Values
// map - get all instances of
//new Set = narrow down to unique
// ['all', ....] - turn it back to array & ad our ALL class

const categories = ["all", ...new Set(menu.map((item) => item.category))];
console.log(categories);

//----------------------------------------------------------------
// Map method - returns a new array
//does not change the size of original array *unlike filter
const people = [
  {
    name: "bob",
    age: 27,
    position: "the boss",
  },
  {
    name: "joe",
    age: 21,
    position: "apprentice",
  },
  {
    name: "Bobby",
    age: 35,
    position: "captain",
  },
  {
    name: "Gosho",
    age: 40,
    position: "chief mate",
  },
];

const ages = people.map((item) => item.age * 2);
console.log(ages);

// or we can pass a callback FN
const getAges = (person) => person.age * 3;
const agesThree = people.map(getAges);
console.log(agesThree);

const newPeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});
console.log(newPeople);

// What is VERY COOL about MAP
// we can grab the data,  WRAP in our data in HTML (or JSX in REact)

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector("#result");
result.innerHTML = names.join(" ");

// Challenge - Multiply Unlimited Arguments (& if there is a 0 in there - return 0)
// key word - arguments

function multiply() {
  const args = [...arguments];
  const result = args.reduce((total, item)=> {
    return item?item * total : item + total;
  }, 1)
  return result;
}
multiply(2, 3, 4, 5, 6);

console.log(multiply(3, 4));
console.log(multiply(3, 4, 6, 10, 5, 11));
console.log(multiply(1, 5, 7, 0));
