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