class Key {
  private signature: number;
  constructor() {
    if (typeof this.signature === "undefined") {
      this.signature = Math.random();
    }
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  protected tenants: Person[] = [];

  constructor(protected key: Key) {
    this.key = key;
    // this.door = false;
  }
  abstract openDoor(key: Key): void;

  comeIn(person: Person) {
    if (this.door) {
      this.tenants.push(person);
      console.log("Welcome home!");
    } else {
      console.log("You key is wrong!");
    }
  }
}
class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door open");
    }
  }
}
const key = new Key();
console.log("key.signature", key.getSignature());
const house = new MyHouse(key);
console.log("myHouse", house);
const person = new Person(key);
console.log("person", person.getKey());
house.openDoor(person.getKey());

house.comeIn(person);
