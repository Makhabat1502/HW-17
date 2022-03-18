let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];
let [firstName, lastName, department, position = "junior"] = arr;

console.log(position);