class Contractor {
    constructor(name, role) {
        this._name = name
        this._role = role
    }
    get name() {
        return this._name
    }
    get role() {
        return this._role
    }
    sayHello() {
        console.log(`I like to work with Technology! My name is ${this._name} and my role is ${this._role}.`)
    }
}

class Front extends Contractor {
    constructor(name, role, tech) {
        super(name, role)
        this._tech = tech
    }
    get tech() {
        return this._tech
    }
    sayHello() {
        console.log(`Hello, I am ${this._name}, and I work as a ${this._role}. I am specialized in ${this._tech}.`)
    }
}
class Back extends Contractor {
    constructor(name, role, tech) {
        super(name, role)
        this._tech = tech
    }
    get tech() {
        return this._tech
    }
    sayHello() {
        console.log(`Hello, I am ${this._name}, and I work as a ${this._role}. I am specialized in ${this._tech}.`)
    }
}

let Pablo = new Front('Pablo', 'Front-End Dev', 'NodeJs')
let Phil = new Back('Phil', 'Back-End Dev', 'SQL')

let contractorList = [Pablo, Phil]

for (target of contractorList) {
    target.sayHello()
    console.log(target.role)
}