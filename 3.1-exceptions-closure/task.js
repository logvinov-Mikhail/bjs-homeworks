// Задача №1 

function parseCount(result) {
    let resultParse = Number.parseInt(result);
    if (isNaN(resultParse)) {
        throw numberError = new Error("Невалидное значение");
    } 
    return resultParse;
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
            const triangleErr = new Error("Треугольник с такими сторонами не существует");
            throw triangleErr;
        } 
    }

    getPerimeter() {
        return (this.a + this.b + this.c);
    }

    getArea() {
        const pP = this.getPerimeter() * 0.5; //Вычисление полупериметра
        const s = Math.sqrt(pP * (pP - this.a) * (pP - this.b) * (pP - this.c)); //Вычисление площади
        return +s.toFixed(3);  // return parseInt(s.toFixed(3));
    }
}

// const test = new Triangle(1, 2, 3);
// console.log(test);
// console.log(test.getPerimeter());
// console.log(test.getArea());

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c); 
    } catch(e) {
        // - В случае перехвата исключения возвращайте объект(сформировать новый объект) с двумя методами `getArea` и `getPerimeter`, 
        //     которые возвращают строку: *"Ошибка! Треугольник не существует"*.
        
        return Obj = {
            getArea() {
                return 'Ошибка! Треугольник не существует'
            }, 
            getPerimeter() {
                return 'Ошибка! Треугольник не существует'
            }
        }
    }   
}
