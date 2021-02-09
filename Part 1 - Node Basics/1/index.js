const rect = {
    perimeter: (x, y) => (2*(x+y)),
    area: (x, y) => (x*y)
};

function solveRect(l, b) {
    console.log(`Solving for Rectangle with l = ${l} and b = ${b}`);

    console.log(`Area = ${rect.area(l, b)}`);
    console.log(`Perimeter = ${rect.perimeter(l, b)}`);

}

solveRect(2, 4);
