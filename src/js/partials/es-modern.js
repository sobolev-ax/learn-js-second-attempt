
/* let activeUsers = [
  { name: 'Вася' },
  { name: 'Петя' },
  { name: 'Маша' },
];

// вспомогательная информация о них,
// которая напрямую не входит в объект юзера,
// и потому хранится отдельно
let weakMap = new WeakMap();

weakMap.set(activeUsers[0], 1);
weakMap.set(activeUsers[1], 2);
weakMap.set(activeUsers[2], 3);
weakMap.set('Katya', 4); // Будет ошибка TypeError: "Katya" is not a non-null object

alert(weakMap.get(activeUsers[0])); // 1

activeUsers.splice(0, 1); // Вася более не активный пользователь

// weakMap теперь содержит только 2 элемента

activeUsers.splice(0, 1); // Петя более не активный пользователь

// weakMap теперь содержит только 1 элемент
 */
/* const set = new Set();

const vasya = { name: 'Вася' };
const petya = { name: 'Петя' };
const dasha = { name: 'Даша' };

// посещения, некоторые пользователи заходят много раз
set.add(vasya);
set.add(petya);
set.add(dasha);
set.add(vasya);
set.add(petya);

// set сохраняет только уникальные значения
alert(set.size); // 3

set.forEach(user => alert(user.name)); // Вася, Петя, Даша

// Set – коллекция для хранения множества значений,
// причём каждое значение может встречаться лишь один раз
 */

/* const recipeMap = new Map([
  ['огурцов', '500 гр'],
  ['помидоров', '350 гр'],
  ['сметаны', '50 гр'],
]);

recipeMap.forEach((value, key, map) => {
  alert(`${key}: ${value}`); // огурцов: 500 гр, и т.д.
});
 */
/* const recipeMap = new Map([
  ['огурцов', '500 гр'],
  ['помидоров', '350 гр'],
  ['сметаны', '50 гр'],
]);

// Перебор осуществляется в порядке вставки

// цикл по ключам
for (const fruit of recipeMap.keys()) {
  alert(fruit); // огурцов, помидоров, сметаны
}

// цикл по значениям [ключ,значение]
for (const amount of recipeMap.values()) {
  alert(amount); // 500 гр, 350 гр, 50 гр
}

// цикл по записям
for (const entry of recipeMap) { // то же что и recipeMap.entries()
  alert(entry); // огурцов,500 гр , и т.д., массивы по 2 значения
}
 */
/* let map = new Map();

map.set('1', 'str1'); // ключ-строка
map.set(1, 'num1'); // число
map.set(true, 'bool1'); // булевое значение

// в обычном объекте это было бы одно и то же,
// map сохраняет тип ключа
alert(map.get(1)); // 'num1'
alert(map.get('1')); // 'str1'

alert(map.size); // 3

map = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1'],
]);

console.log(map);
 */
/* const range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    return this;
  },
  next() {
    if (this.current === undefined) {
      // инициализация состояния итерации
      this.current = this.from;
    }

    if (this.current <= this.to) {
      return {
        done: false,
        value: this.current++,
      };
    }
    // очистка текущей итерации
    delete this.current;
    return {
      done: true,
    };
  },
};
for (const num of range) {
  alert(num); // 1, затем 2, 3, 4, 5
}
// Произойдёт вызов Math.max(1,2,3,4,5);
alert(Math.max(...range)); // 5 (*)
 */
/* const range = {
  from: 1,
  to: 5,
};

// сделаем объект range итерируемым
range[Symbol.iterator] = () => {
  let current = this.from;
  const last = this.to;

  // метод должен вернуть объект с методом next()
  // метод next() возвращает объект со свойствами done и false
  return {
    next() {
      if (current <= last) {
        return {
          done: false,
          value: current++,
        };
      }
      return {
        done: true,
      };
    },
  };
};

for (const num of range) {
  alert(num); // 1, затем 2, 3, 4, 5
}
 */
/* for (const char of 'Привет') {
  alert(char);
  // Выведет по одной букве: П, р, и, в, е, т
} */

/* class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor() {
    super();
    this.name = 'dd';
    alert(this);
  }
}

Rabbit();
 */
/* class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    alert(`I walk: ${this.name}`);
  }
}

class Rabbit extends Animal {
  walk() {
    super.walk();
    alert('...and jump!');
  }
}

new Rabbit('Вася').walk();
 */
/* const name = 'Вася';
const surname = 'Петров';
const user = {
  name,
  surname,
  get fullName() {
    return `${name} ${surname}`;
  },
};

alert(user.fullName); // Вася Петров
 */
/* let user = { name: "Вася", isAdmin: false };

// clone = пустой объект + все свойства user
let clone = Object.assign({}, user);
 */
/* let name = 'Вася';
let isAdmin = true;

let user = {
  name,
  isAdmin,
};
alert(JSON.stringify(user)); // {"name": "Вася", "isAdmin": true}
 */
/* alert('S\u0307\u0323'); // Ṩ
 */
/* let group = {
  title: "Наш курс",
  students: ["Вася", "Петя", "Даша"],

  showList: function() {
    const self = this;
    this.students.forEach(function(student) {
      alert(self.title + ': ' + student); // будет ошибка
    })
  }
}

group.showList()
 */
/* function f() {} // f.name == "f"

let gggg = function g() {}; // g.name == "g"

alert(`${f.name} ${gggg.name}`); // f g
 */
/* function showMenu({ title = 'Заголовок', width: w = 100, height: h = 200 } = {}) {
  alert(`${title} ${w} ${h}`);
}

showMenu(); // Заголовок 100 200
 */
/* const myArr = ['a', 'b'];
alert(myArr);
 */
/* let options = {
  title: 'Меню',
  width: 100,
  height: 200,
};

let { width: w, height: h, title } = options;

alert(title); // Меню
alert(w); // 100
alert(h); // 200
 */
/* let [firstName, lastName] = ['Илья', 'Кантор'];

alert(firstName); // Илья
alert(lastName); // Кантор
 */
/* function makeArmy() {
  const shooters = [];

  for (let i = 0; i < 10; i++) {
    shooters.push(() => {
      alert(i); // выводит свой номер
    });
  }

  return shooters;
}

const army = makeArmy();

army[0](); // 0
army[5](); // 5
 */
