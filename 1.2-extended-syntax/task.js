function getResult(a,b,c){
    "use strict"; 
    
    let d = b**2 -4*a*c;

    let x = [];

    if (d >= 0) {
        x[0] = (-b + Math.sqrt(d)) / 2 * a;
    }

    if (d > 0) {
        x[1] = (-b - Math.sqrt(d)) / 2 * a;
    }

     return x;
}

function getAverageMark(marks){
    
    let sumOfMark =0;
    let len = marks.length;

    if (len == 0) {
        return 0;
    } else if (len > 5) {
        return "Количество оценок больше 5. Учитываются первые 5"
    }
    
    marks.splice(5);

    for (let i = 0; i < len; i++){
       sumOfMark += marks[i];
       let averageMark =  sumOfMark / len;

       return averageMark;
    }

}

function askDrink(name,dateOfBirthday){
    
    
    
    return result;
}