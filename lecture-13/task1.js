// single inheritance
//multiple inheritance
//multilevel inheritance
//hierarchical inheritance
//hubrid inheritance
class Animal {
  eat() {
    console.log("Eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking");
  }
}

const dog = new Dog();
dog.eat();
dog.bark();