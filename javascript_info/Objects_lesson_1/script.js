let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0

for (let key in salaries) {
  sum += salaries[key]
}
alert(sum)


/////////////////////////////////////////////////////

let menu = {
  width: 200,
  height: 400,
  title: 'my Menu'
}

function multiplyMenuNums(menu) {
  for (let multiply in menu) {
    if (typeof menu[multiply] == 'number') {
      menu[multiply] = menu[multiply] * 2

    }
  }
}

multiplyMenuNums(menu)
multiplyMenuNums(menu)

///////////////////////////////////////////////////////////

let calculator = {
  sum() {
    return this.a + this.b
  },
  mult() {
    return this.a * this.b
  },

  read() {
    this.a = +prompt('value of a = ', 'a')
    this.b = +prompt('value of b = ', 'b')
  }
}
calculator.read()
alert(calculator.sum())
alert(calculator.mult())

///////////////////////////////////////////////////////////

let calculator2 = {
  subt() {
    return this.a - this.b
  },
  div() {
    return this.a / this.b
  },
  comp() {
    this.a = +prompt('please input value for a', 'a')
    this.b = +prompt('please input value for b', 'b')
  }
}

calculator2.comp()
alert(calculator2.subt())
alert(calculator2.div())

/////////////////////////////////////////////////////////////////

// Ladder object

let ladder = {
  step: 0,
  up() {
    this.step++
    return this
  },
  down() {
    this.step--
    return this
  },
  showStep: function () {
    alert(this.step)
    return this
  }
}

ladder.up()
ladder.up()
ladder.up()
ladder.showStep()

////////////////////////////////////////////////////////////
let calculatorChaining = {
  value: 0,
  add(x) {
    this.value += x;
    return this;
  },
  subtract(x) {
    this.value -= x;
    return this;
  },
  multiply(x) {
    this.value *= x;
    return this;
  },
  divide(x) {
    this.value /= x;
    return this;
  },
  getValue() {
    console.log(this.value);
    return this;
  }
};
calculatorChaining.add(5).multiply(2).subtract(3).divide(2).getValue();

/////////////////////////////////////////////////

function User(name,age) {
  this.name = name;
  this.age = age;
  this.admin = true
}

let user = new User('John','30')
