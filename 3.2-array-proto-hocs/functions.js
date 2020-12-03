console.clear();
// Задача №1 
//const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
    //console.log(weapons);
// Все последующие функции следует реализовывать без использования циклов!!!

    //function getNames(){
        //console.log(Array.from(arguments));
        
    //}
    //getNames(weapons);
    
//const maries = weapons.filter(weapon => weapon.name);
//console.log(maries);
const test = [
    Knife = {name: "Нож", attack: 5, durability: 300, initDurability: 300, range: 1},
    Staff = {name: "Посох", attack: 8, durability: 300, initDurability: 300, range: 2},
    Axe = {name: "Секира", attack: 27, durability: 800, initDurability: 800, range: 1},
    StormStaff = {name: "Посох Бури", attack: 10, durability: 300, initDurability: 300, range: 3},
    LongBow = {name: "Длинный лук", attack: 15, durability: 200, initDurability: 200, range: 4},
    Bow = {name: "Лук", attack: 10, durability: 200, initDurability: 200, range: 3}
];
//console.log(test.name)

function neme(){
    console.log(Array.from(arguments));
    
}
neme(test);