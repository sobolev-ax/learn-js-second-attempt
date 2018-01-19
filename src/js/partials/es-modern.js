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
