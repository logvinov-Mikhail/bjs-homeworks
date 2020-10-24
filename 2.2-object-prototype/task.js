// Задача №1
String.prototype.isPalindrome =
function () {
  let messege = this.split('').reverse().join('').toLowerCase();
  //console.log(messege);
  let messegeInput = this.toLowerCase();
  //console.log(messegeInput);
  return messegeInput === messege;
  // for (let i = 0; i < messegeInput.length; i++) {
  //   if (messegeInput[i] === messegeInput[messegeInput.length - 1 - i]){
  //     return true;
  //   } else {
  //     return false;
  //   };
  // };
};
  console.log("А кет роза упала на лапу Азора".isPalindrome());

// Задача №2
let roundedAverage;
function getAverageMark(marks) {
  if(marks == 0) {
    return roundedAverage = 0; 
  }
  let summary = 0;
  for(let i = 0; i < marks.length; i++) {
    summary += marks[i];
  }
  let average = summary / marks.length;
  console.log(average);
  return roundedAverage = Math.round(average);
  //let average = marks.reduce((sum, current) => (sum + current))/ marks.length;
  //console.log(average);
  // if (average != 0) {
  //   return roundedAverage = Math.round(average);
  // } else {
  //   return roundedAverage = 0;
  // }; 
}

// Задача №3
function checkBirthday(birthday) {
  const now = Date.now();
  const date = new Date(birthday);
  const parsedBirthday = new Date(birthday).getTime();
  const diff = now - parsedBirthday;
  const age = diff / 31557600000; //365,25 дней
  return verdict = (age > 18);
}
