// Задача №1
String.prototype.isPalindrome =
  function () {
    let messegeInput = this.toLowerCase().split('');
    return messegeInput.join('').replace(/\s/g, '') === messegeInput.reverse().join('').replace(/\s/g, '');
  };
  console.log("А роза упала на лапу Азора".isPalindrome());

 

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
  roundedAverage = Math.round(average);
  return roundedAverage;
}

// Задача №3
function checkBirthday(birthday) {
  const now = Date.now();
  const date = new Date(birthday);
  const parsedBirthday = new Date(birthday).getTime();
  const diff = now - parsedBirthday;
  const age = diff / 31557600000; //365,25 дней
  return age > 18;
}
