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
        return console.log("ошибку перехватил");  
    }   
    return console.log(parseCount(count));    
}

// Задача №2 

class Triangle {
    constructor(a, b, c) {
        try {
            if ((a + b) < c || (a + c) < b || (b + c) < a) {
                const trError = new Error("Невалидное значение");
                throw trError;
            } 
        } catch(e) {
            return console.log("ошибку перехватил");  
        } 
        return console.log("все хорошо");
    }
}

const test = new Triangle(1, 2, 1)

function getTriangle(a, b, c) {

}

//Добрый день. Если кто может помочь с решением задачи 3.1 еще из курса Основы JavaScript напишите в лс. Буду признателен!