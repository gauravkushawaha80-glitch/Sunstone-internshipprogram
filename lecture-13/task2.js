class employ{
    constructor(id,name){
        this.id=id;
        this.name=name;

    }
    work(){
        console.log(`${this.name} is a working`);
    }
   showDetails(){
        console.log(`ID:${this.id} Name ${this.name}`);
    }
}
 class Developer extends employ{
    constructor(id,name,languarge){
        super(id,name);
        this.languarge=languarge;
    }
   writecode(){
    console.log(`${this.name}is write code ${this.languarge}`);
   }
   work(){
    console.log(`${this.name} is devolping software`);
   }
 }
 class frontadnDeveloper extends Developer{
    constructor(id,name,languarge,framework){
        super(id,name,languarge);
        this.framework=framework;
    }
    buildUI() {
    console.log(`${this.name} is building UI using ${this.framework}.`);
  }

  work() {
    console.log(`${this.name} is creating frontend applications.`);
  }
 }
 class manager extends employ{
    constructor(id,name,teamSize){
        super(id,name);
        this.teamSize=teamSize;
    }
    conductmeeting(){
        console.log(`Id:${this.id} name ${this.name}team size ${this.teamSize}`);
    }
     work() {
    console.log(`${this.name} this is manging team`);
  }
 }
 const Employ = new employ(101,"deepak");
  const developar = new Developer(101,"gaurav","c++");
 const Frontadndevelloper = new frontadnDeveloper(102,"rishi","java","react");
  const Manager = new manager(101,"yuvan",5);
  Employ.work();
Employ.showDetails();

Frontadndevelloper.work();
Frontadndevelloper.writecode();
Frontadndevelloper.buildUI();

Manager.work();
Manager.conductmeeting();