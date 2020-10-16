// Задача №1 

function getSolutions(a, b, c) {
  let D = ((b**2) - (4 * a * c));

  if (D < 0) {
    return { D: D, roots: [] };
  } else if (D == 0) {
    let x1 = -b / (2 * a);
    return { D: D, roots: [x1] };
  } else if (D > 0){
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    return { D: D, roots: [x1, x2]};
  }
}

getSolutions(2, 4, 2);

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  // console.log(result.roots)
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта:  ${result.D}`);

  if (result.D < 0) {
    console.log("Уравнение не имеет вещественных корней");
  } else if (result.D == 0) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else {
    console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

showSolutionsMessage(5, 64, 62);

// Задача №2 
function getAverageScore(data) {
  if(data == {}) {
    return {
      average: 0
    }
  };
  let sumOfScore = {};
  for ( let key in (data)) {
    sumOfScore[key] = getAverageMark(data[key]);
  // console.log( `ключ ${key} : значение ${balls}`)  
  }
  //console.log(sumOfScore)
  sumOfScore.average = getAverageMark(Object.values(sumOfScore));
  // console.log(sumOfScore)
  return sumOfScore
}
  
function getAverageMark(marks) {
  if (marks.length == 0) {
    return 0;
  }

  let summOfBalls = 0;
  for(let i = 0; i < marks.length; i++) {
    summOfBalls += marks[i];
  }
  let ageMark = summOfBalls / marks.length;
  //console.log(ageMark)
  return ageMark
}
  
getAverageScore({
  algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5],
  russian: [3, 3, 4, 5],
  physics: [5, 5],
  music: [2, 2, 6],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4, 4]
})

//  Задача 3

  function getPersonData(secretData) {
  //console.log(getDecodedValue(secretData['aaa']))
  //console.log((secretData['aaa']))
  return {
    firstName: getDecodedValue(secretData['aaa']),
    lastName: getDecodedValue(secretData['bbb'])
  }
  }
  
  let banditName =  getPersonData({
    aaa: 0,
    bbb: 1
  });
  console.log(banditName);

  function getDecodedValue(secret) {
    // console.log(secret)
    let name; 
    if(secret == 0){
      name = 'Родриго';
    } else if(secret == 1){
      name = 'Эмильо';
    }
    // console.log(name)
    return name;
  }
