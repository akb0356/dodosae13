class Pet {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    alert(`${this.name}is running`);
  }
}

const bambi = new Pet("밤비", "갈색");
bambi.run();

class Cat extends Pet {
  constructor(name, color, breed) {
    super(name, color);
    this.breed = breed;
  }
  viewInfo() {
    alert(`${this.name}는 ${this.color}의 ${this.breed}입니다.`);
  }
}

const cat2 = new Cat("밤비", "갈색", "푸들");
cat2.viewInfo();

