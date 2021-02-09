const rect = require('./rectangle');

function solveRect(l, b) {
    console.log(`Solving for Rectangle with l = ${l} and b = ${b}`);

    console.log(`Area = ${rect.area(l, b)}`);
    console.log(`Perimeter = ${rect.perimeter(l, b)}`);

}

solveRect(2, 4);
