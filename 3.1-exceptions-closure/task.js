// Задача №1 

function parseCount(result) {
    let resultParse = Number.parseInt(result);
    if (isNaN(resultParse)) {
        throw numberError = new Error("Невалидное значение");
    } else {
        return resultParse;
    }
}

function validateCount(count) {
    try {
        return parseCount(count);  
    } catch(e) {
        return numberError; 
    }      
}

// Задача №2 

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if ((a + b) < c || (a + c) < b || (b + c) < a) { 
            throw triangleError = new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return (this.a + this.b + this.c);
    }

    getArea() {
        const pP = this.getPerimeter() * 0.5; //Вычисление полупериметра
        const s = Math.sqrt(pP * (pP - this.a) * (pP - this.b) * (pP - this.c)); //Вычисление площади
        return parseInt(s.toFixed(3));
    }
}

const test = new Triangle(10, 12, 100);
console.log(test);
console.log(test.getPerimeter());
console.log(test.getArea());

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c); 
    } catch(e) {
        return triangleError;
    }      
}
