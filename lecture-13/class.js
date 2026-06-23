class student{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    study(){
        console.log(`${this.name} is studing js`);
    }
}

let s1 = new student("kapil",20);
let s2 = new student("gaurav",21);
let s3 = new student("rishabh",34);
console.log(s1);
console.log(s2);          
console.log(s3);
s1.study();
// inheritence
class ANIMAL {
  eat() {
    console.log("eating");
  }

  sleep() {
    console.log("sleeping");
  }
}

class Dog extends ANIMAL {
  bark() {
    console.log("barking");
  }
}

const dog = new Dog();

dog.eat();    // eating
dog.sleep();  // sleeping
dog.bark();   // barking
//
class animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}
class cat extends animal{
    constructor(name,age,breed){

    }
}