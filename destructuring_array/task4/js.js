//rest
let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
let [firstName, ...salary] = arr;

console.log(firstName);
console.log(salary);

//меньше элементов
let arr1 = ['Иван', 'Иванов', 'отдел разработки'];
let [name, surname, department, position] = arr1;

console.log(department);
console.log(position);

//пропуск значений
let array = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
let [userName, LastName, departmentOf] = array;

console.log(userName);
console.log(LastName);
console.log(departmentOf);
