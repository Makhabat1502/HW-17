func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

function func([firstName, lastName, ...info]) {
    console.log(info);
}