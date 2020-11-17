// Задача №1

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){ 
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
       this.state *= 1.5;
    }

    set state(status) {
        if (status < 0 ){
            this._state = 0;
        } else if (status >= 100){
            this._state = 100;
        } else {
            this._state = status;
        }
    }

    get state() {
        return this._state;
    }
}

const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
//sherlock.state = 50;
//console.log(sherlock.releaseDate); //2019
//console.log(sherlock.state); //100
//sherlock.fix();
//console.log(sherlock.state); //100

class Magazine extends PrintEditionItem{
    type = "magazine";
    
}
    
const magaz = new Magazine("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
//console.log(magaz.type);

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount)
    this.author = author;
    this.type = "book";
    }
}

const book = new Book("А. Сапковский","Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
//console.log(book.author);
//console.log(book.type);
//console.log(book);


class NovelBook extends Book {
    type = "novel";
}
const novelBook = new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138); 
//console.log(novelBook.type);

class FantasticBook extends Book {
    type = "fantastic";
}
const fantasticBook = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
//console.log(fantasticBook.author);
//console.log(fantasticBook.type);
//console.log(fantasticBook);

class DetectiveBook extends Book {
    type = "detective"; 
}
const detectiveBook = new DetectiveBook("А. Сапковский","Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);
//console.log(detectiveBook.type);
//console.log(detectiveBook.author);

const picknick = new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168);
console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15


// Задача №2
console.log(' ');
console.log('Задача №2');
console.log(' ');

class Library { 
    constructor(name){ 
        this.name = name;
        this.books = [];
    }

    addBook(book) {  
        if (book.state > 30) {  
            this.books.push(book);
            
        }
    }

    findBookBy(type, value) {

        for (let search of this.books) {
            if (search[type] == value) {
                return search;
            }    
        }
        return null    
    }

    giveBookByName(bookName) {

        let founded = null;

        this.books.forEach(function(element, i, array) {
            if(element.name == bookName) {
                founded = element;
                array.splice([i], 1); 
            } 
        });
        return console.log(founded);
    }
}

const library = new Library("Библиотека имени Ленина");
library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.books);

console.log(library.findBookBy("name", "Мурзилка"))
console.log(library.findBookBy("name", "Властелин колец")); //null

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3


//Задача №3 

class StudentLog {
    constructor(name) {
        this.name = name;
    }
    
    getName() {
        return this.name; 
    }
                // Создайте метод addGrade(grade, subject), который будет вносить оценку по соответствующему предмету. При этом grade — оценка, subject — предмет. Условия работы метода:
                // Метод возвращает количество поставленных оценок по данному предмету.
                // Оценка ставится числом в пределах от 1 до 5.
                // При неверной оценке дополнительно выдаётся сообщение с ошибкой, оценка в журнал не заносится. Текущее количество оценок все равно требуется вернуть.
                // const log = new StudentLog('Олег Никифоров');

                // console.log(log.addGrade(3, 'algebra'));
                // // 1
    addGrade(grade, subject) {
        this.subject = subject;
        this.grade = [];
        this.grade.push(grade);
        // if (this.grade > 0 && this.grade <= 5) { 
        //     this.grade.push(grade);
        // } else {
        //     return console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5`);
        // }

    }

}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName());

console.log(log.addGrade(3, 'algebra'));
console.log(log.addGrade(5, 'algebra'));
console.log(log.addGrade(5, 'maz'));
console.log(log);



