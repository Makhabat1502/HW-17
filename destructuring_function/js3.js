func( ['Иван', 'Иванов', 'отдел разработки'] );

function func([firstName, lastName, department, position = "junior"]) {
    console.log(position);
}