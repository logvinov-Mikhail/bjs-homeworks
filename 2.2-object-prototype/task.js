// Задача №1
String.prototype.isPalindrome =
function () {
  let messege = this.split('').reverse().join('').toLowerCase();
  console.log(messege);
  let messegeInput = this.toLowerCase();
  for (let i = 0; i < messegeInput.length; i++) {
    if (messegeInput[i] === messegeInput[messegeInput.length - 1 - i]){
      return true;
    } else {
      return false;
    };
  };
};
  console.log("А кет роза упала на лапу Азора".isPalindrome());

// Задача №2
let roundedAverage;
function getAverageMark(marks) {
  //console.log(marks);
  let average = marks.reduce((sum, current) => (sum + current))/ marks.length;
  //console.log(average);
  if (average != 0) {
    return roundedAverage = Math.round(average);
  } else {
    return roundedAverage = 0;
  }; 
}

// Задача №3
function checkBirthday(birthday) {
  let now = Date.now();
  let date = new Date(birthday);
  birthday = date.getTime();
  let diff = now - birthday;
  let age = diff / 31557600000; //365,25 дней
  return verdict = (age > 18);
}
