// Задача №1 

function parseCount(result) {
    if (isNaN(Number.parseInt(result))) {
        const numberError = new Error("Невалидное значение");
        throw numberError;  
    } else {
        return Number.parseInt(result);
    }
}

function validateCount(count) {
    try {
        parseCount(count);  
    } catch(e) {
        const numberError = new Error("Невалидное значение");
        throw numberError; 
    }   
    return parseCount(count);   
}

// Задача №2 

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        try {
            if ((a + b) < c || (a + c) < b || (b + c) < a) {
                
                const trError = new Error("Треугольник с такими сторонами не существует");
                throw trError;
            } 
        } catch(e) {
            console.log("ошибку перехватил");  
        } 
    }
    
    getPerimeter() {
        return (this.a + this.b + this.c);
    }

    getArea() {
        const p = (this.a + this.b + this.c)*0.5; //Вычисление полупериметра
        const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)); //Вычисление площади
        return s.toFixed(3);
    }
}

const test = new Triangle(3, 2, 4);
console.log(test);
console.log(test.getPerimeter());
console.log(test.getArea());

function getTriangle(a, b, c) {
    
    // try {

    // } catch(e) {
    //     const trError = new Error("Треугольник с такими сторонами не существует");
    //     throw trError; 
    // }   
    return new Triangle(a, b, c); 
}

