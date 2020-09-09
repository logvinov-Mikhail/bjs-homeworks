function calculateTotalMortgage(percent, contribution, amount, date) {
    "use strict"; 
   
    //console.log(typeof percent);
    //console.log(typeof contribution);
    //console.log(typeof amount);
    
    let months = ((date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth() - new Date().getMonth()));
    //console.log(typeof months);
    let percentMonth = (parseInt(percent)/12)/100;
    //console.log(typeof percentMonth);
    let accruedMonths = (amount - contribution)*(percentMonth + percentMonth/(((1 + percentMonth)**months)-1));

    let totalAmount = Number((accruedMonths * months).toFixed(2));
    //console.log(typeof totalAmount);
    return totalAmount;

}

function getGreeting(name) {

    if (name == "" || name == null || name == undefined) {
        greeting = 'Привет, мир! Меня зовут Аноним','.';
    } else {
        greeting = `Привет, мир! Меня зовут ${name}`,`.`;
    }

     return greeting;
}