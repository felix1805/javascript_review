// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// let sum = 0

// for (let key in salaries) {
//   sum += salaries[key]
// }
// alert(sum)


// /////////////////////////////////////////////////////

// let menu = {
//   width: 200,
//   height: 400,
//   title: 'my Menu'
// }

// function multiplyMenuNums(menu) {
//   for (let multiply in menu) {
//     if (typeof menu[multiply] == 'number') {
//       menu[multiply] = menu[multiply] * 2

//     }
//   }
// }

// multiplyMenuNums(menu)
// multiplyMenuNums(menu)

// ///////////////////////////////////////////////////////////

// let calculator = {
//   sum() {
//     return this.a + this.b
//   },
//   mult() {
//     return this.a * this.b
//   },

//   read() {
//     this.a = +prompt('value of a = ', 'a')
//     this.b = +prompt('value of b = ', 'b')
//   }
// }
// calculator.read()
// alert(calculator.sum())
// alert(calculator.mult())

// ///////////////////////////////////////////////////////////

// let calculator2 = {
//   subt() {
//     return this.a - this.b
//   },
//   div() {
//     return this.a / this.b
//   },
//   comp() {
//     this.a = +prompt('please input value for a', 'a')
//     this.b = +prompt('please input value for b', 'b')
//   }
// }

// calculator2.comp()
// alert(calculator2.subt())
// alert(calculator2.div())

// /////////////////////////////////////////////////////////////////

// // Ladder object

// let ladder = {
//   step: 0,
//   up() {
//     this.step++
//     return this
//   },
//   down() {
//     this.step--
//     return this
//   },
//   showStep: function () {
//     alert(this.step)
//     return this
//   }
// }

// ladder.up()
// ladder.up()
// ladder.up()
// ladder.showStep()

// ////////////////////////////////////////////////////////////
// let calculatorChaining = {
//   value: 0,
//   add(x) {
//     this.value += x;
//     return this;
//   },
//   subtract(x) {
//     this.value -= x;
//     return this;
//   },
//   multiply(x) {
//     this.value *= x;
//     return this;
//   },
//   divide(x) {
//     this.value /= x;
//     return this;
//   },
//   getValue() {
//     console.log(this.value);
//     return this;
//   }
// };
// calculatorChaining.add(5).multiply(2).subtract(3).divide(2).getValue();

// /////////////////////////////////////////////////

// function User(name,age) {
//   this.name = name;
//   this.age = age;
//   this.admin = true
// }

// let user = new User('John','30')

////////////////////////////////////////////////

// function Calculator(valA, valB) {
//   this.read = function () {
//     if (valA === undefined || valB === undefined) {
//       this.valA = +prompt('please enter a value for a', 'a');
//       this.valB = +prompt('please enter a value for b', 'b');
//     } else {
//       this.valA = valA
//       this.valB = valB
//     }
//   };
//   this.sum = function () {
//     return this.valA + this.valB
//   };
//   this.mul = function () {
//     return this.valA * this.valB
//   }
// }
// let calculator = new Calculator()
// calculator.read()
// alert('the sum is = ' + calculator.sum())
// alert('the multiplication is = ' + calculator.mul())

// this.valA= +prompt('please enter a value for a', 'a');
// this.valB= +prompt('please enter a value for b', 'b');

///////////////////////////////////////////////////////////

// let Calculator2 = function() {
//   this.read = function () {
//     this.valA = +prompt('please enter value A')
//     this.valB = +prompt('please enter value B')
//   }
//   this.div = function () {
//     return this.valA / this.valB
//   }
//   this.operation = function () {
//     this.valC = +prompt('please enter a value for C')
//     return (this.valA * this.valB) / this.valC
//   }
//   this.compOp = function () {
//     while (true) {
//       this.op = prompt('please enter your operant', '*,/,-,+')
//       if (this.op === '/') {
//         return (this.valA / this.valB)
//       } else if (this.op === '*') {
//         return (this.valA * this.valB)
//       } else if (this.op === '-') {
//         return (this.valA - this.valB)
//       } else if (this.op === '+') {
//         return (this.valA + this.valB)
//       } else {
//         alert('you have entered an invalid operator')
//       }
//     }
//   }
// }

// let calculator2 = new Calculator2()
// calculator2.read()

// alert('the devision product is = ' + calculator2.div())
// alert('the operation result is = ' + calculator2.operation())
// alert('the operation result is = ' + calculator2.compOp())

//////////////////////////////////////////////////////////////

// create a constructor function that takes in two values and adds them to an initial value

let Accumulator = function (startingVal) {
  this.value = startingVal
  this.read = function () {
    this.value += +prompt('please enter your accumulator')
  }
}

let accumulator = new Accumulator(1)
accumulator.read()
accumulator.read()
alert(accumulator.value)