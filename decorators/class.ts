function Character(life: number) {
  return function (target: any): void {
    target.prototype.life = life;
  }
}

@Character(100)
class Wizard {
  mana: number = 100;
  constructor() {}
}

const gandalf: Wizard = new Wizard();
console.log(gandalf);
