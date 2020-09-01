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
    
    let sumOfMark = 0;

    if (marks.length == 0) {
        return 0;
    } else if (marks.length > 5) {
        marks.splice(5);
        console.log("Количество оценок больше 5. Учитываются первые 5");
    } 

    for (let i = 0; i < marks.length; i++){
        sumOfMark += marks[i];
    
    }
       
    return sumOfMark / marks.length;

}

function askDrink(name,dateOfBirthday){
    
let userAge = new Date().getFullYear() - dateOfBirthday.getFullYear();
    
if (userAge < 18) {
    return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
} else {
    return `Не желаете ли олд-фэшн, ${name}?`;
}
    
}
