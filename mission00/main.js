/* -------------------------------------------------------------------------- */
/*                                    문제 1                                    */
/* -------------------------------------------------------------------------- */
function getValueAtObject(obj, key) {
  if (obj[key]) return obj[key];
  else throw new Error(`${key}은(는) 존재하지 않습니다.`);
}

const person = {
  name: "Alice",
  age: 25,
  city: "Wonderland",
};

console.log(getValueAtObject(person, "name")); // 'Alice'
console.log(getValueAtObject(person, "age")); // 25
console.log(getValueAtObject(person, "city")); // 'Wonderland'
console.log(getValueAtObject(person, "country")); // Error !



/* -------------------------------------------------------------------------- */
/*                                    문제 2                                    */
/* -------------------------------------------------------------------------- */
function getNumberAtArray(arr, index) {
  if (arr[index]) return arr[index];
  else throw new Error(`${index}번째 인덱스는 존재하지 않습니다.`);
}

const numbers = [10, 20, 30, 40, 50];

console.log(getNumberAtArray(numbers, 2)); // 30
console.log(getNumberAtArray(numbers, 4)); // 50
console.log(getNumberAtArray(numbers, 5)); // Error!
console.log(getNumberAtArray(numbers, -1)); // Error!
